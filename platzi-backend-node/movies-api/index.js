const express = require("express");
const app = express();
const loginApi = require("./routes/login.js");
const { config } = require("./config/index.js");
const moviesApi = require("./routes/movies.js");
const usersApi = require("./routes/users.js");
const signUpApi = require("./routes/signup.js");
const MysqlLib = require("./lib/mysql.js");
const passport = require("passport");
const notFoundHandler = require("./utils/middleware/notFoundHandler.js");
const session = require("express-session");
const {
	logErrors,
	wrapErrors,
	errorHandler
} = require("./utils/middleware/errorHandlers.js");

//body parser
app.use(express.json());
moviesApi(app);
usersApi(app);
loginApi(app);
signUpApi(app);

const mysql = new MysqlLib();
mysql.connect();

//Catch 404
app.use(notFoundHandler);

//error handlers
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);
app.use(
	session({
		secret: "secretsession",
		saveUninitialized: false,
		resave: false
	})
);

app.listen(config, () => {
	console.log(`Listening http://localhost:${config.port}`);
});
