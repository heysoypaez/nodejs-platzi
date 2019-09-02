const cluster = require("cluster");
const http = require("http");

//Require the quantity of CPUs the machine has.
const numCPUs = require("os").cpus().length;

if(cluster.isMaster) {
	console.log(`Master ${process.pid} is running`);

	for(let i = 0; i <numCPUs; i++) {
		//Create a worker.
		cluster.fork();
	}

	//If the cluster finish we make a log.
	cluster.on("exit", (worker,code,signal) => {
		console.log(`worker ${worker,code,signal}`)
	});

}
else {
	//Workers shares connection TCP, in this case is a server HTTP
	http
		.createServer((req,res) => {
			res.writeHead(200);
			res.end("Hello people\n");
		})
		.listen(8080);

	console.log(`Worker ${process.pid} started.`)
}