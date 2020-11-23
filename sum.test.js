// Import the sum function from sum.js
const sum = require('./sum')

test('Properly adding two numbers', () => {
    // Jest expect Documentation: https://jestjs.io/docs/en/expect
    
    // test that 1 + 2 == 3
    expect(
        sum(1, 3)
    ).toBe(3)
})