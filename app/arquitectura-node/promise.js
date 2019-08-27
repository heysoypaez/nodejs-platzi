
 const promise = new Promise((resolve, reject) => {
 	setTimeout( () => {
 		if(Math.random() < 0.5) {
 			resolve("Haz que algo suceda")
 		} else {
 			reject(new Error("There is an Error"))
 		}
 	}, 1000);	 	
  });

 promise
 	.then(msg => msg.toUpperCase())
 	.then(msg => console.log("message for you: ", msg))
 	.catch(err => console.log("message for you: ", err) )