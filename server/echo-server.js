const http = require("http");
const server = http.createServer();

server.on("request", (req,res) => {

	if(req.method === "POST" && req.url === "/echo") {
			
		let body = [];

		req.on("data", chunk => {
			body.push(chunk);
		})	
		.on("end", () => {
			res.writeHead(200,{
				"Content-Type": "text/plain"
			});
			body = Buffer.concat(body).toString();
			res.end(body); 			
		});


	} 
	else {
		res.statusCode = 404;
		res.setHeader("Content-Type", "text/plain");
		res.end("Sorry, there is an error :(");
	}
})

server.listen(8080);
console.log("Server in URL http://localhost:8080");