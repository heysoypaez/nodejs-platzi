const {Transform} = require("stream");


transformStream = new Transform({
	transform(chunk,encoding,callback) {
		this.push(chunk.toString().toUpperCase().repeat(2));
		callback();
	}
})

process.stdin.pipe(transformStream).pipe(process.stdout);

//In the transform method i can use properties of the read and the write stream.