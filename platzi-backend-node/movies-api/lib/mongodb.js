const { MongoClient, ObjectId } = require("mongodb");
const { config } = require("../config/index.js");

const USER = encodeURIComponent(config.mongo.dbUser);
const PASSWORD = encodeURIComponent(config.mongo.dbPassword);
const DB_NAME = config.mongo.dbName;
const HOST = config.mongo.dbHost;


console.log( USER, PASSWORD, DB_NAME)

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${HOST}/${DB_NAME}?retryWrites=true&w=majority`;
	

class MongoLib {

	constructor() {
		this.dbName = DB_NAME;
		this.client = new MongoClient(MONGO_URI, { useNewUrlParser: true , useUnifiedTopology: true  });
	}

	connect() {
		if(!MongoLib.connection) {
			MongoLib.connection = new Promise( (resolve, reject) => {
				this.client.connect(err => {
					if(err) {		
						return reject(err);
					}
					console.log("Connected succesfully to mongodb");
					return resolve(this.client.db(this.dbName));
				});
			});
		}
		return MongoLib.connection;
	}

	getAll(collection,query) {
		return this.connect().then( db => {
			return db.collection(collection).find(query).toArray();
		});
	}

	get(collection,id) {
		return this.connect().then( db => {
			return db.collection(collection).findOne({ _id: ObjectId(id) });	
		});
	}

	create(collection,data) {
		return this.connect().then( db => {
			return db.collection(collection).insertOne(data);			
		}).then(result => result.insertedId)
	}

	update(collection,id,data) {
		return this.connect().then( db => {
			return db.collection(collection).updateOne({ _id: ObjectId(id) }, {$set: data}, {upsert: true});	
		}).then(result => result.upsertedId || id);
	}

	delete(collection,id) {
		return this.connect().then( db => {
			return db.collection(collection).deleteOne({ _id: ObjectId(id) });
		}).then(() => id);
	}
}

module.exports = MongoLib;