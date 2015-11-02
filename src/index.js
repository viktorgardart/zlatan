#!/usr/bin/env node
var quotes = require('./quotes.js');

var Zlatan = (function() {
    function Zlatan(args) {
        return args[Math.floor(Math.random() * args.length)];
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
    if (typeof args === 'undefined' || !args.length) {
        /**
         * Set args to zlatan quoutes if there are no
         * arguments passed
         */
        args = quotes;
    }
    return Zlatan(args);
}

exports = module.exports = zlatan;

/**
 * If runned from terminal excecute directly
 */
if (process.argv.length >= 2) {
    console.log(zlatan(process.argv.slice(2)));
}

