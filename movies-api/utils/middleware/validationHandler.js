const boom = require("@hapi/boom");
const joi = require("@hapi/joi");

function validate(data, schema) {

  if (!schema.isJoi) {
    schema = joi.object({ ...schema });
  }
  
	const { error } = schema.validate(data);
	return error;
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