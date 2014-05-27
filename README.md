node-addon-example
==================

Sample application of a Node C++ addon packaged with [node-pre-gyp](https://github.com/mapbox/node-pre-gyp).

If you are interested in learning how to write C++ addons see the [official guide](http://nodejs.org/api/addons.html#addons_hello_world).

This repo is intended as starter code for your own C++ module - feel free to copy and modify. The docs below are meant to be a template for how you might document your module once packaged with `node-pre-gyp`.

## Depends

- Node.js 0.10.x or 0.8.x

## Install

Install from binary:

    npm install

Install from source:

    npm install --build-from-source

## Developing

The [node-pre-gyp](https://github.com/mapbox/node-pre-gyp#usage) tool is used to handle building from source and packaging.

To recompile only the C++ files that have changed, first put `node-gyp` and `node-pre-gyp` on your PATH:

    export PATH=`npm explore npm -g -- pwd`/bin/node-gyp-bin:./node_modules/.bin:${PATH}

Then simply run:

    node-pre-gyp build

### Packaging

    node-pre-gyp build package

### Publishing

    npm install aws-sdk
    node-pre-gyp publish
