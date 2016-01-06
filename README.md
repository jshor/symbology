node-addon-example
==================

[![Build Status](https://travis-ci.org/springmeyer/node-addon-example.svg?branch=master)](https://travis-ci.org/springmeyer/node-addon-example)

Sample application of a Node C++ addon packaged with [node-pre-gyp](https://github.com/mapbox/node-pre-gyp).

If you are interested in learning how to write C++ addons see the [official guide](http://nodejs.org/api/addons.html#addons_hello_world).

This repo is intended as starter code for your own C++ module - feel free to copy and modify. The docs below are meant to be a template for how you might document your module once packaged with `node-pre-gyp`.

## Depends

- Node.js 0.10.x, 0.12.x, 4, or 5

## Install

Install from binary:

    npm install

Install from source:

    npm install --build-from-source

## Developing

The [node-pre-gyp](https://github.com/mapbox/node-pre-gyp#usage) tool is used to handle building from source and packaging.

Simply run:

    ./node_modules/.bin/node-pre-gyp build

### Packaging

    ./node_modules/.bin/node-pre-gyp build package

### Publishing

    ./node_modules/.bin/node-pre-gyp publish
