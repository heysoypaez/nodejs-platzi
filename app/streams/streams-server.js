const fileSystem = require("fs");

const server = require("http").createServer();

server.on("request", (req,res) => {
	const src = fileSystem.createReadStream("./big");
	src.pipe(res);
});

server.listen(3000);
console.log("Server is running in 3000 port");