## [3.0.18](https://github.com/jshor/symbology/compare/v3.0.17...v3.0.18) (2023-05-25)



## [3.0.17](https://github.com/jshor/symbology/compare/v3.0.16...v3.0.17) (2023-05-25)



## [3.0.16](https://github.com/jshor/symbology/compare/v3.0.15...v3.0.16) (2023-05-25)



## [3.0.15](https://github.com/jshor/symbology/compare/v3.0.14...v3.0.15) (2023-05-25)



## [3.0.14](https://github.com/jshor/symbology/compare/1e362532b77b9667b41eca4ea6e9b8b3cdc63afc...v3.0.14) (2023-05-25)


### Bug Fixes

* adds patch system to apply stdout fixes ([d0ac5bc](https://github.com/jshor/symbology/commit/d0ac5bcab4be9d18dcb32ca71f9e30174d44f46d))
* adds support for Node v12+ ([bffc800](https://github.com/jshor/symbology/commit/bffc800e0bd57e4cf48913bf0d79c33517ab1fd3))
* **appveyor:** update script to include debug msg and wrap conditionals ([#26](https://github.com/jshor/symbology/issues/26)) ([2859265](https://github.com/jshor/symbology/commit/285926561bc0d9b7e62e26b7c1d188b0fef0567e))
* **binding:** updates lib to properly convert bitmap chars ([51c0990](https://github.com/jshor/symbology/commit/51c0990b08bcb5aff2b38dd45113fc5a6e1ae365))
* **bin:** updates binary to install as-needed ([86ba08c](https://github.com/jshor/symbology/commit/86ba08c29dbd0c3933637dc4f825ec4cd6a737f5))
* **build:** fixes compatibility of module exports and npm ([45ebe3b](https://github.com/jshor/symbology/commit/45ebe3b57fd7e187d5ba624525063938f5cc490a))
* corrects syntax error [#71](https://github.com/jshor/symbology/issues/71) ([bcf48d2](https://github.com/jshor/symbology/commit/bcf48d25230a4eacd72ed3356adfdc7aa6e9273a))
* **deps:** corrects nan dependency ([45b17cd](https://github.com/jshor/symbology/commit/45b17cdedc0b385b5e939bb67ceba0894037884b))
* **lib:** fixes EOF and npmignore issues [#55](https://github.com/jshor/symbology/issues/55) ([085d33b](https://github.com/jshor/symbology/commit/085d33bfdf0540cb5138c3b3bf6f983ae0ba5a16))
* powershell bug ([#27](https://github.com/jshor/symbology/issues/27)) ([c8e6fdf](https://github.com/jshor/symbology/commit/c8e6fdf3f70a04384dc97f471e042220dddc7afc))
* **svg:** adds fix for SVG/EPS crashes [#96](https://github.com/jshor/symbology/issues/96) ([300a007](https://github.com/jshor/symbology/commit/300a007e0073f32b933a1ced89653dbb40a10ed2))
* **unix:** removes remaining png.c refs; enables pipe() for non-Win32 ([7131d1c](https://github.com/jshor/symbology/commit/7131d1c173a2dff7f86a8d7a07cb4dee8b4dee0b))
* **version:** adds missing C file ref, version mgmt ([#37](https://github.com/jshor/symbology/issues/37)) ([0903303](https://github.com/jshor/symbology/commit/090330333cdefdedd9e72eccf0e94c4524daf6ec))


### Features

* **alpha:** implements alpha channel support [#35](https://github.com/jshor/symbology/issues/35) ([993699b](https://github.com/jshor/symbology/commit/993699b9468d0d00ac413fdba8e1f02da1f7318a))
* **encoding:** adds encoding support for ECI and input modes ([#30](https://github.com/jshor/symbology/issues/30)) ([e9ff0d0](https://github.com/jshor/symbology/commit/e9ff0d086f5abd5c2c1cfa85c463909b870d2566))
* implements ability to alter dot size [#32](https://github.com/jshor/symbology/issues/32) ([32b9b42](https://github.com/jshor/symbology/commit/32b9b42775b7943e54d6586d4aaf1ec8895c29d5))
* **rotation:** implements rotations [#31](https://github.com/jshor/symbology/issues/31) ([11b69e6](https://github.com/jshor/symbology/commit/11b69e6844a85c8bb6170c0476ccb8633d5a0e9f))
* **ts:** updates package to use TS ([2c4740a](https://github.com/jshor/symbology/commit/2c4740a2dbc47ab79864a451cfaf8d049129d128))
* v3 ([6571397](https://github.com/jshor/symbology/commit/6571397b529e25207da8aa131083beed17c02b20))
* **windows:** adds Node 11+ support ([#23](https://github.com/jshor/symbology/issues/23)) ([915f15c](https://github.com/jshor/symbology/commit/915f15c46ce677b866b9af983ee429a57d082fd9))
* **zint:** upgrades to v2.9.1 ([3bd4855](https://github.com/jshor/symbology/commit/3bd48551dc9c2a908ba07990c33980c8ff955699))


### BREAKING CHANGES

* drops support for node v12 and v13.
* **zint:** drops support for Node 10 and 11.



