const fileSystem = require("fs");

try {
	
	const file = process.argv[2];
	const content = fileSystem.readFileSync(file).toString();
	const lines = content.split("\n").length;
	console.log(lines);

} 
catch(err) {
	return console.log(err);
}