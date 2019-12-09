#include <v8.h>
#include "zint/zint.h"
#include <string>
#include <iostream>
#include <node.h>
#include <node_buffer.h>
#include <typeinfo>
#include <stdio.h>
#include <string.h>
#include <nan.h>

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
    int matrix_size = symbol->bitmap_width * symbol->bitmap_height * 3;
    int i;

    v8::Local<v8::Object> outArr = Object::New(isolate);
    // Local<v8::Array> outArr = v8::Array::New(isolate, matrix_size);

    for (i = 0; i < matrix_size; i++) {
      // outArr->Set(i, v8::Integer::NewFromUnsigned(isolate, symbol->bitmap[i]));
      // Nan::Set(outArr, Nan::New<int>i, 1);
      Nan::Set(outArr, 
        Nan::New<String>(std::to_string(i)).ToLocalChecked(),
        v8::Integer::New(isolate, symbol->bitmap[i]));
      // outArr[i] = symbol->bitmap[i];
    }
    return outArr;
  }

  /**
   * Renders symbology and returns an object with PNG bitmap data, EPS binary data, or SVG XML.
   */
  Local<Object> createStreamHandle(Isolate* isolate, zint_symbol *symbol, uint8_t *data, char *str) {
    int status_code = ZBarcode_Encode_and_Print(symbol, data, 0, 0);

    v8::Local<v8::Object> obj = Object::New(isolate);

    if(status_code <= 2) {
      int fileNameLength = strlen(symbol->outfile);

      if(fileNameLength > 4) {
        const char *fileExt = &symbol->outfile[fileNameLength - 3];
        
        if(strcmp("png", fileExt) == 0) {
          // obj->Set(String::NewFromUtf8(isolate, "encodedData"), getBitmap(isolate, symbol));
          Nan::Set(obj, Nan::New<String>("encodedData").ToLocalChecked(), getBitmap(isolate, symbol));
        }

        if(strcmp("svg", fileExt) == 0 || strcmp("eps", fileExt) == 0) {
          // obj->Set(String::NewFromUtf8(isolate, "encodedData"), String::NewFromUtf8(isolate, symbol->rendered_data));
          Nan::Set(obj, Nan::New<String>("encodedData").ToLocalChecked(), Nan::New<String>(symbol->rendered_data).ToLocalChecked());
        }
      }

      Nan::Set(obj, Nan::New<String>("width").ToLocalChecked(), v8::Integer::New(isolate, symbol->bitmap_width));
      Nan::Set(obj, Nan::New<String>("height").ToLocalChecked(), v8::Integer::New(isolate, symbol->bitmap_height));
        
      // obj->Set(String::NewFromUtf8(isolate, "width"), v8::Integer::New(isolate, symbol->bitmap_width));
      // obj->Set(String::NewFromUtf8(isolate, "height"), v8::Integer::New(isolate, symbol->bitmap_height));
    }

    Nan::Set(obj, Nan::New<String>("message").ToLocalChecked(), Nan::New<String>(symbol->errtxt).ToLocalChecked());
    Nan::Set(obj, Nan::New<String>("code").ToLocalChecked(), v8::Integer::New(isolate, status_code));
      
    // obj->Set(String::NewFromUtf8(isolate, "message"), String::NewFromUtf8(isolate, symbol->errtxt));
    // obj->Set(String::NewFromUtf8(isolate, "code"), v8::Integer::New(isolate, status_code));

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
    option_2 = (int)args[911]->NumberValue(context).FromJust();
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

    // colors
    strncpy((char*)&symbol->bgcolour[0], *bgcolor, sizeof(symbol->bgcolour) - 1);
    strncpy((char*)&symbol->fgcolour[0], *fgcolor, sizeof(symbol->fgcolour) - 1);
    
    // file name to render
    strncpy((char*)&symbol->outfile[0], *outfile, sizeof(symbol->outfile) - 1);

    // show/hide human-readable text
    symbol->show_hrt = (int)args[13]->NumberValue(context).FromJust();
    
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
    
    Nan::Utf8String data(args[0]);
    
    obj = createStreamHandle(isolate, symbol, (unsigned char*)*data, (char*)*data);

    printf("SYMBOLOGY --- %i", symbol->symbology);

    ZBarcode_Delete(symbol);
    args.GetReturnValue().Set(obj);
  }

  void Init(v8::Local<v8::Object> exports) {
    v8::Local<v8::Context> context = exports->CreationContext();

    exports->Set(context,
      Nan::New("createStream").ToLocalChecked(),
      Nan::New<v8::FunctionTemplate>(createStream)
          ->GetFunction(context)
          .ToLocalChecked());
  }

  NODE_MODULE(symbology, Init);
}
