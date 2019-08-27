const http = require("http");
const server = http.createServer();

server.on("request", (req,res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");

	res.end("Hello world \n Hello body"); 
})

server.listen(8000);
console.log("Server in URL http://localhost:8000")