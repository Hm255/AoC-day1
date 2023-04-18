const {expect} = require('@jest/globals'); 

const calorieCounter = require('../src/Aoc1')
describe('calorie block counter', () => {
    test('only returns numbers', () => {
        input='';
        expect(typeof calorieCounter(input)).toBe('number');
    });
    test('if the input is an empty string, 0 should be returned', () => {
        input = '';
        expect(calorieCounter(input)).toEqual(0);
    });
});



