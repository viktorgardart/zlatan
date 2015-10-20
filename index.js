#!/usr/bin/env node

var args = process.argv.slice(2);

if (!args.length) {
    console.log('You need to pass atleast 2 options, eg. `zlatan npm bower`');
}else if (args.length <= 1) {
    console.log('Well just pick', args[0]);
}else {
    var rand = args[Math.floor(Math.random() * args.length)];
    console.log(rand);
}
