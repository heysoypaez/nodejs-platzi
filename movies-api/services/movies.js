const { moviesMock } = require("../utils/mocks/movies.js");
const MongoLib = require("../lib/mongodb.js");	

class MoviesService {

	constructor() {
		this.mongoDB = new MongoLib();
		this.collection = "movies";
	}

	async getMovies({tags}) {
		const query = tags && {tags: { $in: tags} };
		const movies = await this.mongoDB.getAll(this.collection, query) ;
		return movies || [];
	}


	async getMovie({movieId}) {
		const movie = await this.mongoDB.get(this.collection, movieId) ;
		return movie || {};
	}

	async createMovie({movie}) {
		const createdMovieId = await this.mongoDB.create(this.collection, movie);
		return createdMovieId;
	}


	async updateMovie({movieId,movie} = {}) {
		const updatedMovieId = await this.mongoDB.update(this.collection, movieId, movie);
		return updatedMovieId;
	}

	async partialUpdateMovie() {
		const updatedMovieId = await Promise.resolve(moviesMock[0].id);
		return updatedMovieId;
	}

	async deleteMovie({movieId}) {
		const deletedMovieId = await this.mongoDB.delete(this.collection, movieId);
		return deletedMovieId;
	}
}

module.exports = MoviesService;	