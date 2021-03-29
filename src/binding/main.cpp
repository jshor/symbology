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
   * Returns a bitmap (of type V8 Array) of the image in memory.
   */
  Local<Object> getBitmap(Isolate* isolate, zint_symbol *symbol) {
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
   * Renders symbology and returns an object with PNG bitmap data, EPS, or SVG XML.
   */
  Local<Object> createStreamHandle(Isolate* isolate, zint_symbol *symbol, uint8_t *data, char *str, int rotate_angle) {
    int status_code;

    if ((symbol->output_options & BARCODE_STDOUT) != 0) {
      status_code = ZBarcode_Encode_and_Print(symbol, data, 0, rotate_angle);
    } else {
      status_code = ZBarcode_Encode_and_Buffer(symbol, data, 0, rotate_angle);
    }

    v8::Local<v8::Object> obj = Object::New(isolate);

    if(status_code <= 2) {
      // the barcode creation was successful; parse the result
      int fileNameLength = strlen(symbol->outfile);

      if(fileNameLength > 4) {
        // check if the file at least is 4 chars long so we can parse the last three and check it as an extension
        const char *fileExt = &symbol->outfile[fileNameLength - 3];

        if(strcmp("bmp", fileExt) == 0) {
          // parse the buffer as a bitmap array and store it in `encodedData`
          Nan::Set(obj, Nan::New<String>("encodedData").ToLocalChecked(), getBitmap(isolate, symbol));
        }

        if(strcmp("svg", fileExt) == 0 || strcmp("eps", fileExt) == 0) {
          Nan::Set(obj, Nan::New<String>("encodedData").ToLocalChecked(), Nan::New<String>(symbol->rendered_data).ToLocalChecked());
        }
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
    symbol->height = (int)args[2]->NumberValue(context).FromJust();
    symbol->whitespace_width = (int)args[3]->NumberValue(context).FromJust();
    symbol->border_width = (int)args[4]->NumberValue(context).FromJust();

    // options (-1 indicates not set)
    int option_1, option_2, option_3, output_options;
    float scale;

    scale = (float)args[9]->NumberValue(context).FromJust();
    option_1 = (int)args[10]->NumberValue(context).FromJust();
    option_2 = (int)args[11]->NumberValue(context).FromJust();
    option_3 = (int)args[12]->NumberValue(context).FromJust();
    output_options = (int)args[5]->NumberValue(context).FromJust();

    if(option_1 > -1) {
      symbol->option_1 = option_1;
    }
    if(option_2 > -1) {
      symbol->option_2 = option_2;
    }
    if(option_3 > -1) {
      symbol->option_3 = option_3;
    }
    if(output_options > -1) {
      symbol->output_options = output_options;
    }
    if(scale > 0) {
      symbol->scale = scale;
    }

    Nan::Utf8String bgcolor(args[6]);
    Nan::Utf8String fgcolor(args[7]);
    Nan::Utf8String outfile(args[8]);
    Nan::Utf8String text(args[14]);
    Nan::Utf8String primary(args[17]);

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
    symbol->show_hrt = (int)args[13]->NumberValue(context).FromJust();

    // encoding mode
    symbol->input_mode = (int)args[15]->NumberValue(context).FromJust();

    // eci mode
    symbol->eci = (int)args[16]->NumberValue(context).FromJust();

    // text to display
    strncpy((char*)&symbol->text[0], *text, sizeof(symbol->text) - 1);

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
    rotate_angle = (int)args[18]->NumberValue(context).FromJust();

    Nan::Utf8String data(args[0]);

    obj = createStreamHandle(isolate, symbol, (unsigned char*)*data, (char*)*data, rotate_angle);

    ZBarcode_Delete(symbol);
    args.GetReturnValue().Set(obj);
  }

  void Init(v8::Local<v8::Object> exports) {
    v8::Local<v8::Context> context = exports->CreationContext();

    (void)exports->Set(context,
      Nan::New("createStream").ToLocalChecked(),
      Nan::New<v8::FunctionTemplate>(createStream)
          ->GetFunction(context)
          .ToLocalChecked());
  }

  NODE_MODULE(symbology, Init);
}
