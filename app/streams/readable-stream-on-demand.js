const {Readable} = require("stream");

const readableStream = new Readable({
	read(size) {
		setTimeout(() => {

			const endAlphabetCharCode = 90;

			if(this.currentCharCode > endAlphabetCharCode) {
				this.push(null);
				return;
			}

			this.push(String.fromCharCode(this.currentCharCode++))
		},300)
	}
});

readableStream.currentCharCode = 65;
readableStream.pipe(process.stdout);