{
  # NOTE: 'module_name' and 'module_path' come from the 'binary' property in package.json
  # node-pre-gyp handles passing them down to node-gyp when you build from source
  "targets": [
    {
      "target_name": "<(module_name)",
      "defines": ["NO_PNG"],
      "cflags": ["-Wno-sign-compare"],
      "xcode_settings": {
        "OTHER_CFLAGS": ["-Wno-sign-compare"]
      },
      "sources": [
        "src/lib/zint/2of5.c",
        "src/lib/zint/auspost.c",
        "src/lib/zint/aztec.c",
        "src/lib/zint/code.c",
        "src/lib/zint/code1.c",
        "src/lib/zint/code16k.c",
        "src/lib/zint/code49.c",
        "src/lib/zint/code128.c",
        "src/lib/zint/common.c",
        "src/lib/zint/composite.c",
        "src/lib/zint/dmatrix.c",
        "src/lib/zint/gridmtx.c",
        "src/lib/zint/gs1.c",
        "src/lib/zint/imail.c",
        "src/lib/zint/large.c",
        "src/lib/zint/library.c",
        "src/lib/zint/maxicode.c",
        "src/lib/zint/medical.c",
        "src/lib/zint/pdf417.c",
        "src/lib/zint/plessey.c",
        "src/lib/zint/png.c",
        "src/lib/zint/postal.c",
        "src/lib/zint/ps.c",
        "src/lib/zint/qr.c",
        "src/lib/zint/reedsol.c",
        "src/lib/zint/render.c",
        "src/lib/zint/rss.c",
        "src/lib/zint/svg.c",
        "src/lib/zint/telepen.c",
        "src/lib/zint/upcean.c",
        "src/lib/zint/bmp.c",
        "src/lib/zint/codablock.c",
        "src/lib/zint/dotcode.c",
        "src/lib/zint/eci.c",
        "src/lib/zint/emf.c",
        "src/lib/zint/gb2312.c",
        "src/lib/zint/general_field.c",
        "src/lib/zint/gif.c",
        "src/lib/zint/hanxin.c",
        "src/lib/zint/mailmark.c",
        "src/lib/zint/pcx.c",
        "src/lib/zint/raster.c",
        "src/lib/zint/sjis.c",
        "src/lib/zint/tif.c",
        "src/lib/zint/ultra.c",
        "src/lib/zint/vector.c",
        "src/lib/binding.cpp"
      ],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ],
      "msvs_settings": {
        "VCCLCompilerTool": {
          "AdditionalOptions": [
            "/w"
          ]
        }
      }
    },
    {
      "target_name": "action_after_build",
      "cflags": ["-Wno-sign-compare"],
      "type": "none",
      "dependencies": [ "<(module_name)" ],
      "copies": [
        {
          "files": [ "<(PRODUCT_DIR)/<(module_name).node" ],
          "destination": "<(module_path)"
        }
      ]
    }
  ]
}
