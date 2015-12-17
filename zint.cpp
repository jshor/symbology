#include <v8.h>
// #include <node.h>
#include "lib/zint.h"

// using namespace v8;

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

    for(int i=0; i<sizeof(outArr); i++) {
      if(i < sizeof(chrArr)) {
        outArr[i] = chrArr[i];
      }
    }
  }

  void argToUint8Arr(Value *arg, uint8_t* outArr) {
    // uint8_t* 
  }

  /**
   * Conversion from v8::Value to int
   */
  int argToInt(Value *arg) {
    return (int)(arg->Int32Value());
  }

  void Foo (const FunctionCallbackInfo<Value>& args) {

    struct zint_symbol *my_symbol;

    my_symbol = ZBarcode_Create();




    // my_symbol->text = param1;
    my_symbol->symbology = argToInt(*args[2]);


    unsigned char* thing;

    thing = argToUnsignedChr(*args[0]);

    char bgcolor[10];

    argToChrArr(*args[1], my_symbol->fgcolour);

    // strcpy(bgcolor, argToChrT(*args[1])); // assume input is exactly 6 characters

    // strcpy(my_symbol->fgcolour, bgcolor);

    ZBarcode_Encode_and_Print(my_symbol, thing, 0, 0);
    ZBarcode_Delete(my_symbol);
  }

  void Init(Local<Object> exports) {
    // const char* x = "hello";
    // unsigned char* y;

    // y = (unsigned char*) x;

    // struct zint_symbol *my_symbol;

    // my_symbol = ZBarcode_Create();

    // // my_symbol->text = param1;
    // my_symbol->symbology = 142;

    // ZBarcode_Encode_and_Print(my_symbol, y, 0, 0);
    // ZBarcode_Delete(my_symbol);  
//   int symbology;
//   int height;
//   int whitespace_width;
//   int border_width;
//   int output_options;
//   char fgcolour[10];
//   char bgcolour[10];
//   char outfile[FILENAME_MAX];
//   float scale;
//   int option_1;
//   int option_2;
//   int option_3;
//   int show_hrt;
//   int input_mode;
//   uint8_t text[128];
//   int rows;
//   int width;
//   char primary[128];
//   char errtxt[100];
// #define ZINT_ROWS_MAX  178
// #define ZINT_COLS_MAX  178
//   uint8_t encoded_data[ZINT_ROWS_MAX][ZINT_COLS_MAX];
//   int row_height[ZINT_ROWS_MAX]; /* Largest symbol is 177x177 QR Code */
//   char *bitmap;
//   int bitmap_width;
//   int bitmap_height;
    // my_symbol->height



  // m_zintSymbol->output_options=m_border;
  // m_zintSymbol->symbology=m_symbol;
  // m_zintSymbol->height=m_height;
  // m_zintSymbol->whitespace_width=m_whitespace;
  // m_zintSymbol->border_width=m_borderWidth;
  // m_zintSymbol->option_1=m_securityLevel;
  // m_zintSymbol->input_mode = m_input_mode;
  // m_zintSymbol->option_2=m_width;

    // ZBarcode_Encode_and_Print(my_symbol, y, 0, 0);
    // ZBarcode_Delete(my_symbol);

    NODE_SET_METHOD(exports, "foo", Foo);
  }

  NODE_MODULE(zint, Init)

}