#include <v8.h>
#include "zint/zint.h"
#include <string>
#include <iostream>
#include <node.h>
#include <node_buffer.h>
#include <typeinfo>

namespace zint {

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
   * Creates a new barcode in the temp directory and returns an object
   * containing the status of the symbology creation.
   */
  void createSymbology (const FunctionCallbackInfo<Value>& args) {
    struct zint_symbol *symbol;

    symbol = ZBarcode_Create();

    // basic symbology info and render size
    symbol->symbology = argToInt(*args[1]);
    symbol->height = argToInt(*args[2]);
    symbol->whitespace_width = argToInt(*args[3]);
    symbol->border_width = argToInt(*args[4]);
    symbol->scale = argToFloat(*args[9]);

    // options (-1 indicates not set)
    int option_1, option_2, option_3, output_options;

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
    
    // colors
    argToChrArr(*args[6], symbol->fgcolour);
    argToChrArr(*args[7], symbol->bgcolour);
    
    // file name to render
    strcpy(symbol->outfile, argToChr(*args[8]));

    // text to display
    argToUint8Arr(*args[3], symbol->text);

    // copy error message to return in object
    char* errorMessage;
    errorMessage = symbol->errtxt;

    // create barcode
    ZBarcode_Encode_and_Print(symbol, argToUnsignedChr(*args[0]), 0, 0);
    ZBarcode_Delete(symbol);

    // return an object containing status and error message (if any)
    Isolate* isolate = args.GetIsolate();

    Local<Object> obj = Object::New(isolate);
    obj->Set(String::NewFromUtf8(isolate, "msg"), String::NewFromUtf8(isolate, errorMessage));

    args.GetReturnValue().Set(obj);
  }

  void Init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "createSymbology", createSymbology);
  }

  NODE_MODULE(zint, Init);
}