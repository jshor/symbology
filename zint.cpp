// #include <v8.h>
// #include <node.h>
// #include "lib/zint.h"

// using namespace v8;


#include <node.h>

namespace cpphello {

  using v8::FunctionCallbackInfo;
  using v8::Isolate;
  using v8::Local;
  using v8::Object;
  using v8::String;
  using v8::Value;

  void Foo(const FunctionCallbackInfo<Value>& args) {
    Isolate* isolate = args.GetIsolate();
    args.GetReturnValue().Set(String::NewFromUtf8(isolate, "Hello World"));
  }

  void Init(Local<Object> exports) {
    NODE_SET_METHOD(exports, "foo", Foo);
  }

  NODE_MODULE(cpphello, Init)

}





// Handle<Value> foo(const Arguments& args) {
//   HandleScope scope;
//   return scope.Close(String::New("Hello, World!"));
// }

// void init(Handle<Object> exports) {
//           const char* x = "hello";
//           unsigned char* y;
          
//           y = (unsigned char*) x;

//         struct zint_symbol *my_symbol;
//         my_symbol = ZBarcode_Create();
//         ZBarcode_Encode_and_Print(my_symbol, y, 0, 0);
//         ZBarcode_Delete(my_symbol);

//   NODE_SET_METHOD(exports, "foo", foo);
// }

// NODE_MODULE(zint, init)

