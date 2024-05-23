const assert = require("assert");
const Calculate = require("../index.js");

describe("Calculate", () => {
    describe(".factorial", () => {
        it("returns the factorial of n", () => {

            // Setup
            
            // exercise

            // verification
            assert.strictEqual(Calculate.factorial(5), 120);
        })

    })
})
