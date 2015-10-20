var args = process.argv.slice(2);

var rand = args[Math.floor(Math.random() * args.length)];

console.log(rand);
