#include <v8.h>
#include <string>
#include <iostream>
#include <node.h>
#include <node_buffer.h>
#include <typeinfo>
#include <stdio.h>
#include <string.h>
#include <stdlib.h>
#include <nan.h>
#include <vector>
#include "../../.zint/backend/zint.h"

namespace symbology {
  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Context;
  using v8::Object;
  using v8::String;
  using v8::Value;

  /**
   * Returns a bitmap array for the given symbol.
   */
  Local<Object> getBitmap (Isolate* isolate, zint_symbol *symbol) {
    v8::Local<v8::Context> context = isolate->GetCurrentContext();

    int matrix_size = symbol->bitmap_width * symbol->bitmap_height * 3;
    int i;

    Local<v8::Array> outArr = v8::Array::New(isolate, matrix_size);

    for (i = 0; i < matrix_size; i++) {
      (void)outArr->Set(context, i, v8::Integer::NewFromUnsigned(isolate, symbol->bitmap[i]));
    }
    return outArr;
  }

  /**
   * Returns the encoded vector data as a string.
   */
  Local<String> getEncodedVector (zint_symbol *symbol) {
    char* memfile = (char*)malloc(symbol->memfile_size + 1); // allocate an extra byte for a null terminator

    if (!memfile) {
      return Nan::New<String>("").ToLocalChecked(); // allocation failure
    }

    memcpy(memfile, symbol->memfile, symbol->memfile_size);
    memfile[symbol->memfile_size] = '\0'; // null-terminate the string

    Local<String> result = Nan::New<String>(memfile).ToLocalChecked();
    free(memfile);

    return result;
  }

  /**
   * Renders symbology and returns an object with PNG bitmap data, EPS, or SVG XML.
   */
  Local<Object> createStreamHandle (Isolate* isolate, zint_symbol *symbol, uint8_t *data, char *str, int rotate_angle) {
    int status_code;
    const char *file_ext = &symbol->outfile[strlen(symbol->outfile) - 3];
    bool is_bitmap = strcmp("bmp", file_ext) == 0;

    if (is_bitmap) {
      status_code = ZBarcode_Encode_and_Buffer(symbol, data, 0, rotate_angle);
    } else {
      status_code = ZBarcode_Encode_and_Buffer_Vector(symbol, data, 0, rotate_angle);
    }

    v8::Local<v8::Object> obj = Object::New(isolate);

    if(status_code <= 2) {
      // assign `encodedData` and `bitmap` to be initially empty (required by BinResult)
      Nan::Set(obj, Nan::New<String>("encodedData").ToLocalChecked(), Nan::New<String>("").ToLocalChecked());
      Nan::Set(obj, Nan::New<String>("bitmap").ToLocalChecked(), v8::Array::New(isolate, 0));

      if(is_bitmap) {
        // parse the buffer as a bitmap array and store it in `bitmap`
        Nan::Set(obj, Nan::New<String>("bitmap").ToLocalChecked(), getBitmap(isolate, symbol));
      } else {
        // pass the encoded vector data to `encodedData`
        Nan::Set(obj, Nan::New<String>("encodedData").ToLocalChecked(), getEncodedVector(symbol));
      }

      // set the buffered bitmap dimensions
      Nan::Set(obj, Nan::New<String>("width").ToLocalChecked(), v8::Integer::New(isolate, symbol->bitmap_width));
      Nan::Set(obj, Nan::New<String>("height").ToLocalChecked(), v8::Integer::New(isolate, symbol->bitmap_height));
    }

    // set the informational params (message and status code)
    Nan::Set(obj, Nan::New<String>("message").ToLocalChecked(), Nan::New<String>(symbol->errtxt).ToLocalChecked());
    Nan::Set(obj, Nan::New<String>("code").ToLocalChecked(), v8::Integer::New(isolate, status_code));

    return obj;
  }

  /**
   * Takes the given callback arguments and places their converted values into a new `zint_symbol` instance.
   */
  zint_symbol *getSymbolFromArgs(v8::Local<v8::Context> context, const Nan::FunctionCallbackInfo<v8::Value>& args) {
    struct zint_symbol *symbol;

    symbol = ZBarcode_Create();

    // basic symbology info and render size
    symbol->symbology = (int)args[1]->NumberValue(context).FromJust();
    symbol->whitespace_width = (int)args[3]->NumberValue(context).FromJust();
    symbol->whitespace_height = (int)args[4]->NumberValue(context).FromJust();
    symbol->border_width = (int)args[5]->NumberValue(context).FromJust();

    // options (-1 indicates not set)
    int option_1, option_2, option_3, output_options;
    float scale, dot_size, text_gap, guard_descent, height;

    height = (int)args[2]->NumberValue(context).FromJust();
    output_options = (int)args[6]->NumberValue(context).FromJust();
    option_1 = (int)args[11]->NumberValue(context).FromJust();
    option_2 = (int)args[12]->NumberValue(context).FromJust();
    option_3 = (int)args[13]->NumberValue(context).FromJust();
    dot_size = (float)args[20]->NumberValue(context).FromJust();
    text_gap = (float)args[21]->NumberValue(context).FromJust();
    guard_descent = (float)args[22]->NumberValue(context).FromJust();
    scale = (float)args[10]->NumberValue(context).FromJust();

    if(height > -1) symbol->height = height;
    if(output_options > -1) symbol->output_options = output_options;
    if(option_1 > -1) symbol->option_1 = option_1;
    if(option_2 > -1) symbol->option_2 = option_2;
    if(option_3 > -1) symbol->option_3 = option_3;
    if(dot_size > -1) symbol->dot_size = dot_size;
    // if(text_gap > -1) symbol->text_gap = text_gap;
    if(guard_descent > 0) symbol->guard_descent = guard_descent;
    if(scale > 0) symbol->scale = scale;

    Nan::Utf8String bgcolor(args[7]);
    Nan::Utf8String fgcolor(args[8]);
    Nan::Utf8String outfile(args[9]);
    Nan::Utf8String text(args[15]); // TODO: dead code
    Nan::Utf8String primary(args[18]);

    // colors
    strncpy((char*)&symbol->bgcolour[0], *bgcolor, sizeof(symbol->bgcolour) - 1);
    strncpy((char*)&symbol->fgcolour[0], *fgcolor, sizeof(symbol->fgcolour) - 1);

    // file name to render
    strncpy((char*)&symbol->outfile[0], *outfile, sizeof(symbol->outfile) - 1);

    // primary character data
    strncpy((char*)&symbol->primary[0], *primary, sizeof(symbol->primary) - 1);

    // human-readable text to display, if applicable
    strncpy((char*)&symbol->text[0], *text, sizeof(symbol->text) - 1);

    // show/hide human-readable text
    symbol->show_hrt = (int)args[14]->NumberValue(context).FromJust();

    // encoding mode
    symbol->input_mode = (int)args[16]->NumberValue(context).FromJust();

    // eci mode
    symbol->eci = (int)args[17]->NumberValue(context).FromJust();

    return symbol;
  }

  /**
   * Creates a new barcode stream and returns an object containing the
   * binary data of the bitmap, status code, message, and fileName, and bitmap params.
   */
  void createStream (const Nan::FunctionCallbackInfo<v8::Value>& args) {
    Isolate* isolate = args.GetIsolate();
    v8::Local<v8::Context> context = isolate->GetCurrentContext();
    Local<Object> obj;

    struct zint_symbol *symbol = getSymbolFromArgs(context, args);

    // parse `rotation` angle argument
    int rotate_angle;
    rotate_angle = (int)args[19]->NumberValue(context).FromJust();

    Nan::Utf8String data(args[0]);

    obj = createStreamHandle(isolate, symbol, (unsigned char*)*data, (char*)*data, rotate_angle);

    ZBarcode_Delete(symbol);
    args.GetReturnValue().Set(obj);
  }

  void Init (v8::Local<v8::Object> exports) {
    v8::Local<v8::Context> context = exports->GetCreationContext().ToLocalChecked();

    (void)exports->Set(context,
      Nan::New("createStream").ToLocalChecked(),
      Nan::New<v8::FunctionTemplate>(createStream)->GetFunction(context).ToLocalChecked()
    );
  }

  NODE_MODULE(symbology, Init);
}
