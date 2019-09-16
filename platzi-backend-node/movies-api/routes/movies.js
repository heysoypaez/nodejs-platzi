const express = require("express");
const MoviesService = require("../services/movies.js");

function moviesApi(app) {
	const router = express.Router();
	app.use("/api/movies", router);

	const moviesService = new MoviesService();

	router.get("/", async function(req,res,next) {
			
		const {tags} = req.query;

		try {
			//throw new Error("Error getting movies");
			const movies = await moviesService.getMovies({
				tags
			});

			res.status(200).json({
				data:movies,
				message: "movies listed"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.get("/:movieId", async function(req,res,next) {
		
		const {movieId} = req.params;

		try {
			const movie = await moviesService.getMovie({ movieId });

			res.status(200).json({
				data:movie,
				message: "movie retrieve"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.post("/", async function(req,res,next) {
			
		const {body: movie} = req;

		try {
			const createdMovieId = await moviesService.createMovie({movie});

			res.status(201).json({
				data:createdMovieId,
				message: "movie created"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.put("/:movieId", async function(req,res,next) {
		const {movieId} = req.params;
		const {body: movie} = req;		
		try {
			const updatedMovieId = await moviesService.updateMovie({movieId,movie});

			res.status(200).json({
				data:updatedMovieId,
				message: "movie updated "
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.patch("/:movieId", async function(req,res,next) {
		const {movieId} = req.params;
		const {body: movie} = req;		
		try {
			const updatedMovieId = await moviesService.partialUpdateMovie({movieId,movie});

			res.status(200).json({
				data:updatedMovieId,
				message: "movie updated partially"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.delete("/:movieId", async function(req,res,next) {
		const {movieId} = req.params;		
		try {
			const deletedMovieId = await moviesService.deleteMovie({movieId});

			res.status(200).json({
				data: deletedMovieId,
				message: "movie deleted"
			});
		}
		catch(error) {
			next(error);
		}
	});
}

 module.exports = moviesApi;