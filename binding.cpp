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
   * Conversion from v8::Value to unsigned char*
   */
  unsigned char* argToUnsignedChr(Value *arg) {
    v8::String::Utf8Value str(arg->ToString());
    char* chrArr = *str;

    unsigned char* unsignedChrArr = (unsigned char*) chrArr;

    return unsignedChrArr;
  }

  /**
   * Conversion from v8::Value to char*
   */
  char* argToChr(Value *arg) {
    v8::String::Utf8Value str(arg->ToString());
    char* chrArr = *str;

    return chrArr;
  }

  /**
   * Conversion from v8::Value to char*,
   * then copies char* to outArr.
   */
  void argToChrArr(Value *arg, char* outArr) {
    char* chrArr = argToChr(arg);

    for(int i=0; i<(int)sizeof(outArr); i++) {
      if(i < (int)sizeof(chrArr)) {
        outArr[i] = chrArr[i];
      }
    }
  }

  /**
   * Conversion from v8::Value to uint8_t*,
   * then copies to uint8_t* to outArr.
   */
  void argToUint8Arr(Value *arg, uint8_t* outArr) {
    unsigned char* chrArr = argToUnsignedChr(arg);

    for(int i=0; i<(int)sizeof(outArr); i++) {
      if(i < (int)sizeof(chrArr)) {
        outArr[i] = chrArr[i];
      }
    }
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
  Local<Object> createStreamHandle(Isolate* isolate, zint_symbol *symbol, uint8_t *data) {
    int status_code = ZBarcode_Encode_and_Buffer(symbol, data, 0, 0);

    Local<Object> obj = Object::New(isolate);

    if(status_code <= 2) {
      int fileNameLength = strlen(symbol->outfile);

      if(fileNameLength > 4) {
        const char *fileExt = &symbol->outfile[fileNameLength - 3];
        
        if(strcmp("png", fileExt) == 0) {
          obj->Set(String::NewFromUtf8(isolate, "encodedData"), getBitmap(isolate, symbol));
        }
      }
      obj->Set(String::NewFromUtf8(isolate, "width"), v8::Integer::New(isolate, symbol->bitmap_width));
      obj->Set(String::NewFromUtf8(isolate, "height"), v8::Integer::New(isolate, symbol->bitmap_height));
    }
    obj->Set(String::NewFromUtf8(isolate, "message"), String::NewFromUtf8(isolate, symbol->errtxt));
    obj->Set(String::NewFromUtf8(isolate, "code"), v8::Integer::New(isolate, status_code));

    return obj;
  }

  /**
   * Renders symbology and creates a PNG, EPS, or SVG file.
   */
  Local<Object> createFileHandle(Isolate* isolate, zint_symbol *symbol, uint8_t *data) {
    int status_code = ZBarcode_Encode_and_Print(symbol, data, 0, 0);

    Local<Object> obj = Object::New(isolate);
    if(status_code <= 2) {
      obj->Set(String::NewFromUtf8(isolate, "fileName"), String::NewFromUtf8(isolate, symbol->outfile));
    }
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
    argToChrArr(*args[6], symbol->fgcolour);
    argToChrArr(*args[7], symbol->bgcolour);
    
    // file name to render
    strcpy(symbol->outfile, argToChr(*args[8]));

    // text to display
    argToUint8Arr(*args[13], symbol->text);

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
    
    obj = createFileHandle(isolate, symbol, argToUnsignedChr(*args[0]));
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

    obj = createStreamHandle(isolate, symbol, argToUnsignedChr(*args[0]));
    ZBarcode_Delete(symbol);
    args.GetReturnValue().Set(obj);
  }

  void Init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "createFile", createFile);
    NODE_SET_METHOD(exports, "createStream", createStream);
  }

  NODE_MODULE(barnode, Init);
}

