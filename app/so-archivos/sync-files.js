const fileSystem = require("fs");

try {
	
	const file = process.argv[2];
	let content;

	if(!file) {
		console.log("I introduce a file for you, by default but you need to add it.");
		content = fileSystem.readFileSync("./virtudes.txt").toString();
	}

	if(file) {
		 content = fileSystem.readFileSync(file).toString();
	}
	const response = (content,seconds) => setTimeout( () => console.log(content) , seconds * 1000)
	const lines = content.split("\n").length;
	 
	(
	 async() => {
			await response(`Let me count...`,1)
			await response("1",2)
			await response("2",3)
			await response("3",4)		
			await response(`There is ${lines} lines in your file.`,5)
	})();
} 
catch(err) {
	return console.log(err);
}