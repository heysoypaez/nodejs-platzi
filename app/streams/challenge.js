const {Writable} = require("stream");

function stringToCamelCase(string) {

	//"Hola-soy-una-persona-chevere"
	const whiteSpaceAndLetter = /(?<=[\-. ])\w/g;
	const separatorString = /[\-. ]/g;

	const upperCaseCharacterFound = (characterFound) => characterFound.toUpperCase();

	let stringTransformed = string.replace(whiteSpaceAndLetter, upperCaseCharacterFound);
	stringTransformed = stringTransformed.replace(separatorString, "");
	
	return stringTransformed
}


const writableStream = new Writable({
	write(chunk,encoding, callback) {
		const stringChunk = chunk.toString()
		console.log( stringToCamelCase(stringChunk) );
		callback();
	}
});

process.stdin.pipe(writableStream);