const {Duplex} = require("stream");

const duplexStream = new Duplex({

	write(chunk,encoding,callback) {
		//Chunk comes in type buffer
		console.log(chunk.toString());
		callback();
	},
	read(size) {
		const lastAlphabetCharCode = 90;
		if(this.currentCharCode > lastAlphabetCharCode) {
			this.push(null);
			return;
		}

		setTimeout( () => {
			this.push(String.fromCharCode(this.currentCharCode++));
		},100)
	}
});

duplexStream.currentCharCode = 65; //Letter A ASCII
process.stdin.pipe(duplexStream).pipe(process.stdout);