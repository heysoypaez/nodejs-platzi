const express = require("express");
const path = require("path");
const passport = require("passport");

function loginApi(app) {

	app.post("login",
	  passport.authenticate("local", {successFlash: "Welcome !"}),
	  function(req, res) {
	  	res.redirect("/users/" + req.user.username)
	  }
	)

	function callStaticFiles(req, res, next) {
			app.use(express.static( path.join(__dirname,"./public") )  )
			next()
	}

	function view(app) {

		app.get("/login", (req,res) => {
			res.sendFile( path.join(__dirname,"../public/"));
		})
	}

}

module.exports = loginApi;
