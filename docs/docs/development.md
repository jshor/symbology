# Development

This module is a C++ wrapper around the [Zint barcode library](https://github.com/zint/zint). The version of zint that will be used will be determined by the git reference stored in the `zintVersion` field of `package.json`.

## Source code management

Upon installation of dependencies (`yarn install`), a copy of the Zint source repo will be cloned in the Git-ignored `.zint` directory, and its relevant C source files are referenced in [`binding.gyp`](https://github.com/jshor/symbology/blob/master/binding.gyp), along with [`src/binding/main.cpp`](https://github.com/jshor/symbology/blob/master/src/binding/main.cpp). The compiled `.node` module is then available for use by the JavaScript source, in [`src/index.js`](https://github.com/jshor/symbology/blob/master/src/index.js).

Once `.zint` is created, the same install script will then apply a small number of patches to some Zint source files to adapt it to the following needs:

* Add `rendered_data` as a char array to be populated with raw string output.
* Update `svg.c` and `ps.c` to write to the `rendered_data` buffer instead of `stdout`.
* Replace `malloc.h` references with `stdlib.h` for cross-compatibility.

See [`scripts/install.js`](https://github.com/jshor/symbology/blob/master/scripts/install.js) and [`scripts/patches.js`](https://github.com/jshor/symbology/blob/master/scripts/patches.js) for more info.

## Utilization of Nan

This project utilizes [Nan](https://github.com/nodejs/nan) to make the project backwards-compatible and make bindings future-proof.

## Building the project

Builds are created using [`node-pre-gyp`](https://github.com/mapbox/node-pre-gyp).

Upon installation of dependencies, `node-pre-gyp build` will be run, which will compile the project from source.

### Building on Windows

If you're using Windows (excluding [WSL](https://docs.microsoft.com/en-us/windows/wsl/)), then you'll need to install [windows-build-tools](https://github.com/felixrieseberg/windows-build-tools#windows-build-tools) to compile the native Node module.

```sh
npm install --global --production windows-build-tools --vs2017
npm config set msvs_version 2017 –global
```

This install takes a while, but once it's complete, you can move on to [Creating a build](#creating-a-build) below.

### Creating a build

To create a packaged build, run:

```sh
yarn package:binary
```

### Running tests

Tests are written as `*.spec.js` and utilize [mocha](https://mochajs.org/) and [chai](https://www.chaijs.com/).

To run tests:

```sh
yarn test
```

To run tests with coverage reporting:

```sh
yarn test:coverage
```

In Travis CI, test coverage results are sent to [Coveralls](https://coveralls.io/github/jshor/symbology?branch=master).

## Committing

Commit message standards abide by [`standard-changelog`](https://github.com/conventional-changelog/conventional-changelog). This module utilizes [`commitizen`](https://github.com/commitizen/cz-cli) as a devDependency to help developers write their commits, and commit messages are enforced using [`commitlint`](https://github.com/conventional-changelog/commitlint).

## Versioning

This package abides by the [semver standard](https://semver.org/). [`standard-version`](https://github.com/conventional-changelog/standard-version) will automatically update [`CHANGELOG.md`](https://github.com/jshor/symbology/blob/master/CHANGELOG.md) and bump the version.

## Automated builds and CI

GitHub Actions will automatically build and test pull requests. At least one admin PR approval and all status checks are required to merge a PR.

The following status checks are implemented:

* Successful Windows builds (AppVeyor)
* Successful Linux and macOS builds (Travis)
* Sufficient code coverage (threshold >90%)

Upon the successful merge of a PR, CI will create an automated release of the binaries on GitHub (via [`node-pre-gyp-github`](https://github.com/bchr02/node-pre-gyp-github)), publish to npm, and push the updated changelog and version bump changes to GitHub.

:::warning Important
The package version is automatically updated. **Do not change any version references in this project.**
:::

## Contributing

All constructive feedback and pull request changes are welcome. For more information on contributing to this project, please see the [Contributing Guidelines](https://github.com/jshor/symbology/blob/master/CONTRIBUTING.md).
