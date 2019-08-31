const fileSystem = require("fs");

const out = fileSystem.createWriteStream("./out.log");
const err = fileSystem.createWriteStream("./error.log");


const consoleFile = new console.Console(out, err);
// arguments: std_ouput , st_error

setInterval( () => {

	consoleFile.log( new Date() );
	consoleFile.error( new Error("Sorry, :|") );
}, 10 * 1000);

console.log("Server started");