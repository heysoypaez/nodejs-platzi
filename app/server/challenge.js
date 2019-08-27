/*
Crear un servidor que reciba mi fecha de cumpleaños
y devuelva el dia de la semana en que naci.
*/

const http = require("http");
const server = http.createServer();


function getStringDayFromDate(dateInput) {
	const date = new Date(dateInput);
	const weekDay = date.getDay();
	const options = { weekday: 'long'}
	let weekDayFormatted = new Intl.DateTimeFormat('es-CL',options).format(weekDay);
	console.log(date, weekDay, weekDayFormatted);
	return weekDayFormatted;
}


server.on("request", (req,res) => {

	if(req.method === "POST" && req.url === "/birthday" || req.url === "/cumpleanos"  ) {

		let body = [];
		req.on("data", chunk => {

			//December 25, 1995 23:15:30
			chunk = chunk.toString();
			const weekDayFormatted = getStringDayFromDate(chunk);
			body.push(`Amigo mío, cumpliste año un ${weekDayFormatted}`);
		})
		.on("end", () => {
			res.writeHead(200,{
				"Content-Type": "text/plain"
			});
			res.end(body[0]); 			
		});
	}
});

server.listen(8001);
console.log("Server in URL http://localhost:8001");