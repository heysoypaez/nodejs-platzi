const express = require("express");
const path = require("path");
const passport = require("passport");
const UsersService = require("../services/users.js");
const usersService = new UsersService();

function callStaticFiles(req, res, next) {
	app.use(express.static(path.join(__dirname, "./public")));
	next();
}

function view(app) {
	app.get("/login", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/views/login/"));
	});
}

function postLogin(app) {
	app.post(
		"login",
		passport.authenticate("local", { successFlash: "Welcome !" }),
		function(req, res) {
			res.redirect("/users/" + req.user.username);
		}
	);
}

function loginApi(app) {
	view(app);
}

function authRoute(passport) {
	app.post("/", function(req, res, next) {
		const body = req.body;
		const { username, password } = body;
		usersService.getUser();
		usersService.findOne({ name: username }, (err, doc) => {
			if (err) {
				res.status(500).send("Error occured");
			} else {
				if (doc) {
					res.status(500).send("Username already exists");
				} else {
					const record = new User({
						username: username,
						password: password
					});
				}
			}
		});
	});
}

module.exports = loginApi;
