const express = require("express");
const UsersService = require("../services/users.js");

const {
	userIdSchema,
	createUserSchema,
	updateUserSchema
} = require("../utils/schemas/users.js");

const validationHandler = require("../utils/middleware/validationHandler.js");

function usersApi(app) {
	const router = express.Router();
	app.use("/api/users", router);

	const usersService = new UsersService();

	router.get("/", async function(req,res,next) {
			

		try {
			//throw new Error("Error getting users");
			const users = await usersService.getUsers();

			res.status(200).json({
				data:users,
				message: "users listed"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.get("/:userId", validationHandler({userId:userIdSchema}, "params") , async function(req,res,next) {
		
		const {userId} = req.params;

		try {
			const user = await usersService.getUser({ userId });

			res.status(200).json({
				data:user,
				message: "user retrieve"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.post( "/", validationHandler({userId:userIdSchema}, "params") , 
	   validationHandler(createUserSchema, "body") , 

	   async function(req,res,next) {
					
				const {body: user} = req;

				try {
					const createdUserId = await usersService.createUser({user});

					res.status(201).json({
						data:createdUserId,
						message: "user created"
					});
				}
				catch(error) {
					next(error);
				}
			}
	);

	router.put("/:userId", validationHandler({userId:userIdSchema}, "params") , validationHandler(updateUserSchema, "body") ,  
	   async function(req,res,next) {
		const {userId} = req.params;
		const {body: user} = req;		
		try {
			const updatedUserId = await usersService.updateUser({userId,user});

			res.status(200).json({
				data:updatedUserId,
				message: "user updated "
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.patch("/:userId", async function(req,res,next) {
		const {userId} = req.params;
		const {body: user} = req;		
		try {
			const updatedUserId = await usersService.partialUpdateUser({userId,user});

			res.status(200).json({
				data:updatedUserId,
				message: "user updated partially"
			});
		}
		catch(error) {
			next(error);
		}
	});

	router.delete("/:userId", validationHandler({userId:userIdSchema}, "params") , async function(req,res,next) {
		const {userId} = req.params;		
		try {
			const deletedUserId = await usersService.deleteUser({userId});

			res.status(200).json({
				data: deletedUserId,
				message: "user deleted"
			});
		}
		catch(error) {
			next(error);
		}
	});
}

 module.exports = usersApi;