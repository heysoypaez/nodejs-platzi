require("dotenv").config();

const config = {

	dev: process.env.NODE_ENV !== "production",
	cors : process.env.CORS,
	port : process.env.PORT || 3000,
	mongo: {

	dbUser : process.env.DB_USER,
	dbPassword : process.env.DB_PASSWORD,
	dbHost : process.env.DB_HOST,
	dbName : process.env.DB_NAME,
	dbPort: process.env.DB_PORT 
	},
	mysql: {
		
	dbUser : process.env.DB_MYSQL_USER,
	dbPassword : process.env.DB_MYSQL_PASSWORD,
	dbHost : process.env.DB_MYSQL_HOST,
	dbName : process.env.DB_MYSQL_NAME 
	}
}


module.exports =  { config };