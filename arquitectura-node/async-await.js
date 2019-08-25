const promiseFunction = () =>  new Promise((resolve, reject) => {
  	setTimeout( () => {
  		if(Math.random() < 0.5) {
  			resolve("Haz que algo suceda")
  		} else {
  			reject(new Error("There is an Error"))
  		}
  	}, 1000);	 	
});

 const fetchData = async () => {

	try {
		const msg = await promiseFunction();
		console.log(msg);
		console.log(msg);
	}

	catch(err) {
		console.log(err)
	}
}

fetchData();