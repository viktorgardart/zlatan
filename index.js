#!/usr/bin/env node

var args = process.argv.slice(2);

if (args.length <= 1) {
    console.log('Well just pick', args[0]);
}else {
    var rand = args[Math.floor(Math.random() * args.length)];
    console.log(rand);
}
