const express = require("express");
const path = require("path");
const passport = require("passport");

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

module.exports = loginApi;
