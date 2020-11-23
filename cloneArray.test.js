// Import the sum function from cloneArray.js
const cloneArray = require('./cloneArray')

test('Properly clones array', () => {
    // Jest expect Documentation: https://jestjs.io/docs/en/expect
    
    const array = [1,2,3]
    // make a copy of the array and compare objects are the same but in two different places in memory
    expect(cloneArray(array)).toEqual(array)
    // validate a clone was created but not the same array it was copied
    expect(cloneArray(array)).not.toBe(array)
})