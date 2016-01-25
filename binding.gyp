{
  # NOTE: 'module_name' and 'module_path' come from the 'binary' property in package.json
  # node-pre-gyp handles passing them down to node-gyp when you build from source
  "targets": [
    {
      "target_name": "<(module_name)",
      "sources": [
        "zint/2of5.c",
        "zint/auspost.c",
        "zint/aztec.c",
        "zint/code.c",
        "zint/code1.c",
        "zint/code16k.c",
        "zint/code49.c",
        "zint/code128.c",
        "zint/common.c",
        "zint/composite.c",
        "zint/dmatrix.c",
        "zint/gridmtx.c",
        "zint/gs1.c",
        "zint/imail.c",
        "zint/large.c",
        "zint/library.c",
        "zint/maxicode.c",
        "zint/medical.c",
        "zint/pdf417.c",
        "zint/plessey.c",
        "zint/png.c",
        "zint/postal.c",
        "zint/ps.c",
        "zint/qr.c",
        "zint/reedsol.c",
        "zint/render.c",
        "zint/rss.c",
        "zint/svg.c",
        "zint/telepen.c",
        "zint/upcean.c",
        "binding.cpp"
      ],
      "libraries": ["-lpng"],
      "include_dirs": [
        "<!(node -e \"require('nan')\")"
      ]
    },
    {
      "target_name": "action_after_build",
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
