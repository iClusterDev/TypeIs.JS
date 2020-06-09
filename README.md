# TypeIs.js

The fast and reliable JS type-checking toolbox!

![npm](https://img.shields.io/npm/v/typeis.js) ![npm](https://img.shields.io/npm/dw/typeis.js) ![Twitter Follow](https://img.shields.io/twitter/follow/iClusterDev?style=social)

## Installation

Using [npm](https://www.npmjs.com/package/typeis.js)

```console
npm i typeis.js
```

## Usage

In Node (CommonJS)

```js
const {
  isArray,
  isArrayLike,
  isBoolean,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isObjectLike,
  isPlainObject,
  isString,
  isSymbol,
  isUndefined,
  isArguments,
} = require("typeis.js");

// on "undefined" -> false
console.log(isPlainObject());

// on "null" -> false
console.log(isPlainObject(null));

// on "number" -> false
console.log(isPlainObject(100));

// on "string" -> false
console.log(isPlainObject("foo"));

// on "boolean" -> false
console.log(isPlainObject(true));

// on "plain object" -> true
console.log(isPlainObject({ a: 100, b: 200 }));

// on "array" -> false
console.log(isPlainObject([1, 2, 3]));

// on "function" -> false
console.log(
  isPlainObject(function () {
    return "bar";
  })
);
```

In the Browser (ES6 modules):

```js
import { isArray, isArrayLike } from "typeis.js";
```

...Or include the distributed minified file in the script tag:

```html
<script src="./path/to/typeis.min.js"></script>
<script>
  console.log(typeis.isNumber(100));
</script>
```

## Contributing

If you find any issues, feel free to submit a pull request

## Author

[iClusterDev](https://github.com/iClusterDev)

## License

This project is under the [MIT](LICENSE) License
