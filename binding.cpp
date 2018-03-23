#include <v8.h>
#include "zint/zint.h"
#include <string>
#include <iostream>
#include <node.h>
#include <node_buffer.h>
#include <typeinfo>
#include <stdio.h>
#include <string.h>

namespace barnode {

  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;

  /**
   * Copy v8 string to external buffer
   */
  void copyArgStr(Value *arg, char* buffer, size_t maxchars) {
    v8::String::Utf8Value str(arg->ToString());
    strncpy(buffer, *str, maxchars - 1);
    buffer[maxchars - 1] = '\0';
  }

  /**
   * Conversion from v8::Value to int
   */
  int argToInt(Value *arg) {
    return (int)(arg->Int32Value());
  }

  /**
   * Conversion from v8::Value to int
   */
  float argToFloat(Value *arg) {
    return (float)(arg->NumberValue());
  }

  /**
   * Returns a bitmap (of type V8 Array) of the image in memory.
   */
  Local<v8::Array> getBitmap(Isolate* isolate, zint_symbol *symbol) {
    int matrix_size = symbol->bitmap_width * symbol->bitmap_height * 3;
    int i;

    Local<v8::Array> outArr = v8::Array::New(isolate, matrix_size);

    for (i = 0; i < matrix_size; i++) {
      outArr->Set(i, v8::Integer::NewFromUnsigned(isolate, symbol->bitmap[i]));
    }
    return outArr;
  }

  /**
   * Renders symbology and returns an object with PNG bitmap data, EPS binary data, or SVG XML.
   */
  Local<Object> createStreamHandle(Isolate* isolate, zint_symbol *symbol, uint8_t *data, char *str) {
    int status_code = ZBarcode_Encode_and_Print(symbol, data, 0, 0);

    Local<Object> obj = Object::New(isolate);

    if(status_code <= 2) {
      int fileNameLength = strlen(symbol->outfile);

      if(fileNameLength > 4) {
        const char *fileExt = &symbol->outfile[fileNameLength - 3];
        
        if(strcmp("png", fileExt) == 0) {
          obj->Set(String::NewFromUtf8(isolate, "encodedData"), getBitmap(isolate, symbol));
        }

        if(strcmp("svg", fileExt) == 0 || strcmp("eps", fileExt) == 0) {
          obj->Set(String::NewFromUtf8(isolate, "encodedData"), String::NewFromUtf8(isolate, symbol->rendered_data));
        }
      }
      obj->Set(String::NewFromUtf8(isolate, "width"), v8::Integer::New(isolate, symbol->bitmap_width));
      obj->Set(String::NewFromUtf8(isolate, "height"), v8::Integer::New(isolate, symbol->bitmap_height));
    }
    obj->Set(String::NewFromUtf8(isolate, "inputData"), String::NewFromUtf8(isolate, str));
    obj->Set(String::NewFromUtf8(isolate, "message"), String::NewFromUtf8(isolate, symbol->errtxt));
    obj->Set(String::NewFromUtf8(isolate, "code"), v8::Integer::New(isolate, status_code));

    return obj;
  }

  /**
   * Renders symbology and creates a PNG, EPS, or SVG file.
   */
  Local<Object> createFileHandle(Isolate* isolate, zint_symbol *symbol, uint8_t *data, char *str) {
    int status_code = ZBarcode_Encode_and_Print(symbol, data, 0, 0);

    Local<Object> obj = Object::New(isolate);
    if(status_code <= 2) {
      obj->Set(String::NewFromUtf8(isolate, "fileName"), String::NewFromUtf8(isolate, symbol->outfile));
    }
    obj->Set(String::NewFromUtf8(isolate, "inputData"), String::NewFromUtf8(isolate, str));
    obj->Set(String::NewFromUtf8(isolate, "message"), String::NewFromUtf8(isolate, symbol->errtxt));
    obj->Set(String::NewFromUtf8(isolate, "code"), v8::Integer::New(isolate, status_code));

    return obj;
  }

  zint_symbol *getSymbolFromArgs(const FunctionCallbackInfo<Value>& args) {
    struct zint_symbol *symbol;

    symbol = ZBarcode_Create();

    // basic symbology info and render size
    symbol->symbology = argToInt(*args[1]);
    symbol->height = 0;//argToInt(*args[2]);
    symbol->whitespace_width = argToInt(*args[3]);
    symbol->border_width = argToInt(*args[4]);

    // options (-1 indicates not set)
    int option_1, option_2, option_3, output_options;
    float scale;

    scale = argToFloat(*args[9]);
    option_1 = argToInt(*args[10]);
    option_2 = argToInt(*args[11]);
    option_3 = argToInt(*args[12]);
    output_options = argToInt(*args[5]);

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

    // colors
    copyArgStr(*args[6], (char*)&symbol->fgcolour[0], sizeof(symbol->fgcolour));
    copyArgStr(*args[7], (char*)&symbol->bgcolour[0], sizeof(symbol->bgcolour));
    
    // file name to render
    copyArgStr(*args[8], (char*)&symbol->outfile[0], sizeof(symbol->outfile));

    // text to display
    copyArgStr(*args[13], (char*)&symbol->text[0], sizeof(symbol->text));

    return symbol;
  }

  /**
   * Creates a new barcode in the given path and returns an object
   * containing the status code, message, and fileName, and bitmap params.
   */
  void createFile (const FunctionCallbackInfo<Value>& args) {
    struct zint_symbol *symbol = getSymbolFromArgs(args);

    Isolate* isolate = args.GetIsolate();
    Local<Object> obj;
    
    v8::String::Utf8Value data(args[0]->ToString());
    obj = createFileHandle(isolate, symbol, (unsigned char*)*data, (char*)*data);
    ZBarcode_Delete(symbol);
    args.GetReturnValue().Set(obj);
  }

  /**
   * Creates a new barcode stream and returns an object containing the
   * binary data of the bitmap, status code, message, and fileName, and bitmap params.
   */
  void createStream (const FunctionCallbackInfo<Value>& args) {
    struct zint_symbol *symbol = getSymbolFromArgs(args);

    Isolate* isolate = args.GetIsolate();
    Local<Object> obj;

    v8::String::Utf8Value data(args[0]->ToString());
    obj = createStreamHandle(isolate, symbol, (unsigned char*)*data, (char*)*data);
    ZBarcode_Delete(symbol);
    args.GetReturnValue().Set(obj);
  }

  void Init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "createFile", createFile);
    NODE_SET_METHOD(exports, "createStream", createStream);
  }

  NODE_MODULE(barnode, Init);
}

