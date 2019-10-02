function buildMessage(entity, action) {
	// body...
	if (action === "list") {
		const message = `${entity}s ${action}ed`;
		return message;
	}

	const message = `${entity} ${action}d`;
	return message;
}

module.exports = buildMessage;
