# Installation

```sh
yarn add symbology
```

## Non-Ubuntu Linux distributions

The default Linux pre-built binaries are designed to run on Ubuntu. Running Symbology on some non-Ubuntu Linux distros may result in segmentation faults or strange behavior. These problems can be circumvented by building Symbology from the source instead of using the default binary.

**Using Yarn:**

```sh
npm_config_build_from_source=true yarn add symbology
```

**Using npm:**

```sh
npm i symbology --build-from-source=true
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
