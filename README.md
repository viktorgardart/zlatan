# Zlatan

You always wanted a way to make the computer pick something for you in an easy way. With Zlatan you can! 
Pass one or more arguments (see example below) to let him pick. Be amazed!

## Install

```sh
$ npm install -g zlatan
```

## Usage
```sh
$ zlatan npm bower
$ zlatan 'first option' 'second option' 'third option'
```

```js
var zlatan = require('zlatan');
console.log(zlatan('npm', 'bower'))
console.log(zlatan(['npm', 'bower']))
```

## License

Licensed under the MIT License
