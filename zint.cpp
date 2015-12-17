#include <v8.h>
#include "lib/zint.h"
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

  void Foo (const FunctionCallbackInfo<Value>& args) {
    struct zint_symbol *symbol;

    symbol = ZBarcode_Create();

    // basic symbology info and render size
    symbol->symbology = argToInt(*args[1]);
    symbol->height = argToInt(*args[2]);
    symbol->whitespace_width = argToInt(*args[3]);
    symbol->border_width = argToInt(*args[4]);
    // symbol->output_options = argToInt(*args[5]);
    symbol->scale = argToFloat(*args[9]);
    
    // colors
    argToChrArr(*args[6], symbol->fgcolour);
    argToChrArr(*args[7], symbol->bgcolour);
    
    // file name to render
    // argToChrArr(*args[8], symbol->outfile); // doesn't work for some reason

    // options (-1 indicates not set)
    if(symbol->option_1 > -1) {
      symbol->option_1 = argToInt(*args[10]);
    }
    if(symbol->option_2 > -1) {
      symbol->option_2 = argToInt(*args[11]);
    }
    if(symbol->option_3 > -1) {
      symbol->option_3 = argToInt(*args[12]);
    }

    // text to display
    argToUint8Arr(*args[3], symbol->text);

    // create barcode
    ZBarcode_Encode_and_Print(symbol, argToUnsignedChr(*args[0]), 0, 0);
    ZBarcode_Delete(symbol);
  }

  void Init(Local<Object> exports) {
    // int show_hrt;
    // int input_mode;
    // uint8_t text[128];
    // int rows;
    // int width;
    // char primary[128];
    // char errtxt[100];
    // #define ZINT_ROWS_MAX  178
    // #define ZINT_COLS_MAX  178
    // uint8_t encoded_data[ZINT_ROWS_MAX][ZINT_COLS_MAX];
    // int row_height[ZINT_ROWS_MAX]; /* Largest symbol is 177x177 QR Code */
    // char *bitmap;
    // int bitmap_width;
    // int bitmap_height;

    NODE_SET_METHOD(exports, "foo", Foo);
  }

  NODE_MODULE(zint, Init)

}