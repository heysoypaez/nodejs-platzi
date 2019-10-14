

const {config} = require("../config/index.js");

function cacheResponse(res,seconds) {
	if(!config.dev) {
		res.set("Cache-Control", `public, max-age=${seconds}`)
	}
}

module.exports = cacheResponse