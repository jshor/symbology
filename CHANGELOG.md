v1.2.3

- eliminates libpng dependency

v1.2.2

- adds option to show/hide human-readable text
- adds targeted build names back to CI

v1.2.1

- fixes travis config
- updates S3 region host

v1.2.0

- Reorganizes project to have separate source directory.
- Fixes missing `outputType` parameter in `createStream()`.
- Adds `Output` enum.
- Updates documentation.
- Fixes #5 and #9.

v1.0.8

- updates tests to latest sinon reqs
- updates dependencies
- updates docs with yarn info

v1.0.7

- updates dependencies
- adds note about libpng prereq for building/installing
- updates fallback binary

v1.0.6

- adds keywords to package.json

v1.0.5

- fixes all int types for comparisons in zint lib
- removes unnecessary files for smaller installation

v1.0.4

- moves enums to separate objects in library
- updates docs to contain `Symbol` props, enum changes

v1.0.3

- updates docs
- fixes enums

v1.0.2

- creates C++ wrapper for zint library
- creates wrapper for C++ wrapper
- adds `createStream`, `createFile` functions
- adds enumerated types for error handling, barcode types
- creates initial version of tests
- adds documentation for library
- adds coverage, dependency, and continuous integration checking
- publishes package to npm
