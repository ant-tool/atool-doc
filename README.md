# atool-doc

[![NPM version](https://img.shields.io/npm/v/atool-doc.svg?style=flat)](https://npmjs.org/package/atool-doc)
[![Build Status](https://img.shields.io/travis/ant-tool/atool-doc.svg?style=flat)](https://travis-ci.org/ant-tool/atool-doc)
[![Coverage Status](https://img.shields.io/coveralls/ant-tool/atool-doc.svg?style=flat)](https://coveralls.io/r/ant-tool/atool-doc)
[![NPM downloads](http://img.shields.io/npm/dm/atool-doc.svg?style=flat)](https://npmjs.org/package/atool-doc)
[![Dependency Status](https://david-dm.org/ant-tool/atool-doc.svg)](https://david-dm.org/ant-tool/atool-doc)

Static demo generator based on [atool-build](https://github.com/ant-tool/atool-build) and [dora](https://github.com/dora-js/dora)

**before**
```
./
├── README.md
└── examples
    ├── a.js
    ├── a.html
    └── b.md
```

**after**
```
./
├── README.md
├── __site
│   ├── common.js
│   ├── examples
│   │   ├── a.html
│   │   ├── a.js
│   │   ├── b.html
│   │   ├── b.js
│   └── index.html
└── examples
    ├── a.js
    ├── a.html
    └── b.md
```

## Setup

```bash
$ npm i atool-doc -g
```

### Run examples

```bash
$ git clone git@github.com:ant-tool/atool-doc.git
$ cd atool-doc && npm i
$ npm run demo
```
Then, visit http://127.0.0.1:8002/

## Usage

```bash

  Usage: atool-doc [options]

  Options:

    -h, --help       output usage information
    -v, --version    output the version number
    --dest <dir>     config path of output dir, default __site
    --source <dir>   config path of demo files dir, default examples
    --tpl <path>     config path of tpl file
    --config <path>  config path of webpack.config, default webpack.config.js
    --build          only build
    -w, --watch      using with --build, watch mode

```

## How to write demo file

You can using a `.js` or `.md`(more powerful) to write your demo file.

### `.md`

- customize dom
- customize css(supported only currently)

[how-to-write](https://github.com/ant-tool/atool-doc/blob/master/examples/customDomAndStyle.md)


### `.js`

Work with the hook dom `div#__exampleDom` in default [template file](https://github.com/ant-tool/atool-doc/blob/master/tpl/element.ejs)

[how-to-write](https://github.com/ant-tool/atool-doc/blob/master/examples/insertToHtml.md)


## Customize template

You can using `atool-doc --tpl somewhere` to specify your template file.

The follow variables are available on the context of `file` in a template file.

You can use them by the syntax of `ejs`(supported only currently).

- `title`: filename

- `script`: array of script to load in the html file

- `html`: html element

- `style`: style by css

- `desc`: other things using by markdown
