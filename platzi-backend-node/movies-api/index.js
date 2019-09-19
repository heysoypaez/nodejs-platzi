const express = require("express");
const app = express();
const login = require("./routes/login.js");
const { config } = require("./config/index.js");
const moviesApi = require("./routes/movies.js");
const usersApi = require("./routes/users.js");
const MysqlLib = require("./lib/mysql.js");

const { logErrors, wrapErrors,  errorHandler } = require("./utils/middleware/errorHandlers.js");
const notFoundHandler = require("./utils/middleware/notFoundHandler.js");


//body parser
app.use(express.json());
moviesApi(app);
usersApi(app);
login(app);

const mysql = new MysqlLib()
mysql.connect();

//Catch 404
app.use(notFoundHandler);

//error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);	



app.listen(config, () => {
	console.log(`Listening http://localhost:${config.port}`)
})