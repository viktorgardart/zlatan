#!/usr/bin/env node

var zlatan = function zlatan(args) {
    if (!args.length || args.length <= 1) {
        return 'You need to pass atleast 2 options, eg. `zlatan npm bower`';
    }else {
        var rand = args[Math.floor(Math.random() * args.length)];
        return rand;
    }
}

/**
 * export zlatan
 */
exports = module.exports = zlatan;

/**
 * If runned from terminal excecute directly
 */
if (process.argv.length > 2) {
    console.log(zlatan(process.argv.slice(2)));
}
