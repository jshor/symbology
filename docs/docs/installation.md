# Installation

```sh
yarn add symbology
```

## Binary download failures

If you run into issues downloading the binary, the library will attempt to compile the module from source.

## Manual compilation

You may also compile from source by running `npm rebuild`. See below for OS-specific details.

### Compiling on Windows

Ensure you have [`windows-build-tools`](http://npmjs.com/package/windows-build-tools) globally installed, which bundles Visual C++ Build Tools.

```sh
yarn global add windows-build-tools
```

Then you can compile the module by running `npm rebuild` in your project directory.

### Compiling on Linux or macOS

Simply run `npm rebuild` in your project directory. `node-gyp` will utilize the OS's bundled GCC compiler.
