const sum = require('./sum')
const equal = require('./sum')

test('adds 2 nums', ()=>{
    (expect(sum(1 ,2)).toBe(3))
})

test('checks if 2 objects are equal', ()=>{
    (expect(equal({'1': 1}, {'1': 1})).toBeTruthy())
})