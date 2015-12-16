{
  "targets": [
    {
      "target_name": "zint",
      "sources": [ 
        "zint.cpp",
        "lib/2of5.c",
        "lib/auspost.c",
        "lib/aztec.c",
        "lib/code.c",
        "lib/code1.c",
        "lib/code16k.c",
        "lib/code49.c",
        "lib/code128.c",
        "lib/common.c",
        "lib/composite.c",
        "lib/dmatrix.c",
        "lib/gridmtx.c",
        "lib/gs1.c",
        "lib/imail.c",
        "lib/large.c",
        "lib/library.c",
        "lib/maxicode.c",
        "lib/medical.c",
        "lib/pdf417.c",
        "lib/plessey.c",
        "lib/png.c",
        "lib/postal.c",
        "lib/ps.c",
        "lib/qr.c",
        "lib/reedsol.c",
        "lib/render.c",
        "lib/rss.c",
        "lib/svg.c",
        "lib/telepen.c",
        "lib/upcean.c"
      ],
      "libraries": [
        "-lpng", "-L lpng"
      ]
    }
  ]
}
