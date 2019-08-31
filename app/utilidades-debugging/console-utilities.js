/*
%s string
%d digit
%j json

*/

const info = ["dog", "cat", "frog"];

//console.log("A %s and a %s and a %s FLYING", info[0], info[1], info[2] );

//util.format("A %s and a %s.", "man", "woman" );

// info is an alias for log
//console.info("hello world")

//console.warn("An error my friend")

//console.assert(42 === "42");


//console.trace("hello");

const util = require("util");
const debuglog = util.debuglog("problem");


debuglog("hi from problem");