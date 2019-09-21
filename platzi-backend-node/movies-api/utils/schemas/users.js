const joi = require("@hapi/joi");

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const userNameSchema = joi.string().max(80);
const userPasswordSchema = joi.string().min(10).max(100);
const userEmailSchema = joi.string().regex(/^\w+@\w+\.\D{2,5}$/);

const createUserSchema = {
	name: userNameSchema.required(),
	password: userPasswordSchema.required(),
	email: userEmailSchema.required()
}

const updateUserSchema = {
	name: userNameSchema,
	password: userPasswordSchema,
	email: userEmailSchema
}


module.exports = {
	userIdSchema,
	createUserSchema,
	updateUserSchema
}

/*
https://medium.com/gomycode/authentication-with-passport-js-73ca65b25feb
http://www.passportjs.org/docs/username-password/
*/