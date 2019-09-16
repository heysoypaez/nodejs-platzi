const boom = "@hapi/boom"

function validate(argument) {
	return false;
}

function validationHandler(schema, check = "body") {
	return function(req,res,next) {
		const error = validate(req[check], schema);

		if(error) {
	 		next( boom.badRequest(error) );
		}
		next();
	}
}

module.exports = validationHandler;