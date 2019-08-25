const asyncCallback = function (callback) {
	setTimeout( () => {
		if(Math.random() < 0.5) {
			return callback(null,  "Haz que algo suceda")
		} else {
			return callback(new Error("There is an Error"))
		}
	}, 1000);
} 

asyncCallback( (err,msg) => {
	if (err) {
		console.log(err)
	} else {
		console.log(msg)
	}
});