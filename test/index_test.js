const assert = require("assert");
const Calculate = require("../index.js");

describe("Calculate", () => {
    describe(".factorial", () => {
        it("returns the factorial of n", () => {
            // Setup
            const expected = 120;
            const input = 5;

            // exercise
            const result = Calculate.factorial(input);

            // verification
            assert.strictEqual(result, expected);
        });
        it("returns the factorial of n", () => {
            // Setup
            const expected = 5040;
            const input = 7;

            // exercise
            const result = Calculate.factorial(input);

            // verification
            assert.strictEqual(result, expected);
        });

    })
})
