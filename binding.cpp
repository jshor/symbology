#include <nan.h>

NAN_METHOD(get_hello) {
    info.GetReturnValue().Set(Nan::New("hello").ToLocalChecked());
}

extern "C" {
    static void start(v8::Handle<v8::Object> target) {
        Nan::SetMethod(target, "hello", get_hello);
    }
}

NODE_MODULE(node_addon_example, start)

