const express = require("express");
const app = express();

const { config } = require("./config/index.js");

const moviesApi = require("./routes/movies.js");

moviesApi(app);


app.listen(config, () => {
	console.log(`Listening http://localhost:${config.port}`)
})