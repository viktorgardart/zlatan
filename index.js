#!/usr/bin/env node

var Zlatan = (function() {
    function Zlatan(args) {
        if (!args.length || args.length <= 1) {
            return 'You need to pass atleast 2 options, eg. `zlatan npm bower`';
        }

        var rand = args[Math.floor(Math.random() * args.length)];
        return rand;
    }

    return Zlatan;
}());

/**
 * export zlatan
 */
function zlatan(args) {
    /**
     * If the first argument is a string, get all the arguments
     * from the 'global' arguments and store override args
     */
    if (typeof args === 'string') {
        args = Array.prototype.slice.call(arguments, 0);
    }
    return Zlatan(args);
}

exports = module.exports = zlatan;

/**
 * If runned from terminal excecute directly
 */
if (process.argv.length > 2) {
    console.log(zlatan(process.argv.slice(2)));
}
