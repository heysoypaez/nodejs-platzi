const fileSystem = require("fs");

const server = require("http").createServer();

server.on("request", (req,res) => {
	fileSystem.readFile("./big", (err,data) => {
		if(err) {
			console.log("error: ", err);
		}
		res.end(data);
	});
});

server.listen(3000);
console.log("Server is running in 3000 port");