const assert = require("assert");
const buildMessage = require("../utils/buildMessage.js");

describe.only("Utils - buildMessage", () => {
	describe("When receives an entity and a action", () => {
		it("Should return the respective message", () => {
			const result = buildMessage("movie", "create");
			const expected = "movie created";
			assert.strictEqual(result, expected);
		});

		describe("When receives an entity and a action and is a list", () => {
			it("Should return the respective message with the entity in plural", () => {
				const result = buildMessage("movie", "list");
				const expected = "movies listed";
				assert.strictEqual(result, expected);
			});
		});
	});
});
