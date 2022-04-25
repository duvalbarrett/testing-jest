const {allFunctions} = require('./functions')

test('test should return the number 2', () => {
    expect(allFunctions.returnTwo()).toEqual(2)
})

test('greeting', () => {
    expect(allFunctions.greeting('James')).toEqual('Hello James')
    expect(allFunctions.greeting('Jill')).toEqual('Hello Jill')
})

test('test should return the sum of num1 and num2', () => {
    expect(allFunctions.add(1,2)).toEqual(3)
    expect(allFunctions.add(5,9)).toEqual(14)
})

// Challenge solution

describe("Math Challenge!", () => {
    test("Add", () => {
        expect(allFunctions.add(2, 6)).toBe(8)
        expect(allFunctions.add(4, 6)).toBe(10)
    })
    test("Subtract", () => {
        expect(allFunctions.subtract(3, 2)).toBe(1)
        expect(allFunctions.subtract(19, 10)).toBe(9)
    })
    test("Multiply", () => {
        expect(allFunctions.multiply(2, 2)).toBe(4)
        expect(allFunctions.multiply(3, 3)).toBe(9)
    })
    test("Divide", () => {
        expect(allFunctions.divide(3, 1)).toBe(3)
        expect(allFunctions.divide(4, 2)).toBe(2)
    })
})



