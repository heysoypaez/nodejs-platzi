const mysql = require('mysql');

const { config } = require("../config/index.js");

HOST = config.mysql.dbHost;
USER = config.mysql.dbUser;
PASSWORD = config.mysql.dbPassword;
DATABASE = config.mysql.dbName;

class MysqlLib {

	connect() {
		const connection = mysql.createConnection({
		  host: HOST,
		  user: USER,
		  password: PASSWORD,
		  database: DATABASE
		})

		connection.connect()

		connection.query('SELECT id_section, section_name FROM sections LIMIT 12;', function (err, rows, fields) {
		  if (err) throw err

		 /* console.log('The result of the query is: ')
			console.log(rows.map(item => {
				return item
			})
			) */
		})

		connection.end();
	}

}

module.exports = MysqlLib;