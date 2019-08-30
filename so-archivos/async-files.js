const fileSystem = require("fs");


const file = process.argv[2];

if(!file) {
	throw new Error("Body, you need to introduce the file you will read!")
}

const content = fileSystem.readFile(file, (err,content) => {
	if(err) {
		return console.log(err);
	}
	else {
		const lines = content.toString().split("\n").length;
		console.log(lines);
	}
});

