const assert = require("assert");
const proxyquire = require("proxyquire");

const {
	getAllStub,
	createStub,
	MongoLibMock
} = require("../utils/mocks/mongoLib.js");

const { moviesMock, filteredMoviesMock } = require("../utils/mocks/movies.js");
describe("Services - Movies", () => {
	const MoviesServices = proxyquire("../services/movies.js", {
		"../lib/mongodb.js": MongoLibMock
	});

	const moviesService = new MoviesServices();

	describe("When getMovies method is called", async () => {
		it("Should call the getAll MongoLib method", async () => {
			await moviesService.getMovies({});
			assert.strictEqual(getAllStub.called, true);
		});

		it("Should return an Array of movies", async () => {
			const result = await moviesService.getMovies({});
			const expected = moviesMock;
			assert.deepEqual(result, expected);
		});
	});
});
