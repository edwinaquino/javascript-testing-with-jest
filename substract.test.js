// Import the sum function from substract.js
const substract = require('./substract')

test('Properly substracting two numbers', () => {
    // Jest expect Documentation: https://jestjs.io/docs/en/expect
    
    // test that 1 - 2 == -1
    expect(
        substract(1, 2)
    ).toBe(-1)
})