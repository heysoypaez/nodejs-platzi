const express = require("express");
const MoviesService = require("../services/movies.js");
const cacheResponse = require("../utils/cacheResponse.js");
const {
	FIVE_MINUTES_IN_SECONDS, 
	SIXTY_MINUTES_IN_SECONDS
} = require("../utils/time.js");

const {
	movieIdSchema,
	createMovieSchema,
	updateMovieSchema
} = require("../utils/schemas/movies.js");

const validationHandler = require("../utils/middleware/validationHandler.js");

function moviesApi(app) {
	const router = express.Router();
	app.use("/api/movies", router);

	const moviesService = new MoviesService();

	router.get("/", async function(req,res,next) {
		
		cacheResponse(res, FIVE_MINUTES_IN_SECONDS)
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

	router.get("/:movieId", validationHandler({movieId:movieIdSchema}, "params") , async function(req,res,next) {
		
		cacheResponse(res, FIVE_MINUTES_IN_SECONDS)
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

	router.post( "/", validationHandler({movieId:movieIdSchema}, "params") , 
	   validationHandler(createMovieSchema, "body") , 

	   async function(req,res,next) {
					
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
			}
	);

	router.put("/:movieId", validationHandler({movieId:movieIdSchema}, "params") , validationHandler(updateMovieSchema, "body") ,  
	   async function(req,res,next) {
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

	router.delete("/:movieId", validationHandler({movieId:movieIdSchema}, "params") , async function(req,res,next) {
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