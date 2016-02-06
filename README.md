insert-hover-class [![npm version](https://badge.fury.io/js/insert-hover-class.svg)](http://badge.fury.io/js/insert-hover-class) [![Build Status](https://travis-ci.org/chinedufn/insert-hover-class.svg?branch=master)](https://travis-ci.org/chinedufn/insert-hover-class)
===============

> Create and insert a :hover class into the DOM and return the classname

## To Install

```
$ npm install --save insert-hover-class
```

## Usage

```js
var insertHC = require('insert-hover-class')

var hoverClassname = insertHC({
  color: 'red',
  'font-weight': '700'
})

console.log(hoverClassname)
// 'cih3lymsf0000wly8uizhbo6d'
```

virtual-dom example

```js
var insertHC = require('insert-hover-class')
var h = require('virtual-dom/h')

var redBoldHoverClass = insertHC({/* hover object */})

h('label', {
  className: redBoldHoverClass
}, 'I get big and red when you hover over me!')
```

## API

#### `insertHC(hoverObject[, classname])` -> `string`

##### hoverObject

See [create-hover-class](https://github.com/chinedufn/create-hover-class#hoverobject)'s definition'

##### [classname]

See [create-hover-class](https://github.com/chinedufn/create-hover-class#classname)'s definition

## See Also

- [create-hover-class](https://github.com/chinedufn/create-hover-class)
- [insert-css](https://github.com/substack/insert-css)

## License

MIT
