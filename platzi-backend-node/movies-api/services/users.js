const MongoLib = require("../lib/mongodb.js");	

class UsersService {

	constructor() {
		this.mongoDB = new MongoLib();
		this.collection = "users"; }

	async getUsers() {
		const query = {};
		const users = await this.mongoDB.getAll(this.collection, query) ;
		return users || [];
	}


	async getUser({userId}) {
		const user = await this.mongoDB.get(this.collection, userId) ;
		return user || {};
	}

	async createUser({user}) {
		const createdUserId = await this.mongoDB.create(this.collection, user);
		return createdUserId;
	}


	async updateUser({userId,user} = {}) {
		const updatedUserId = await this.mongoDB.update(this.collection, userId, user);
		return updatedUserId;
	}

	async partialUpdateUser() {
		const updatedUserId = await Promise.resolve(usersMock[0].id);
		return updatedUserId;
	}

	async deleteUser({userId}) {
		const deletedUserId = await this.mongoDB.delete(this.collection, userId);
		return deletedUserId;
	}
}

module.exports = UsersService;	