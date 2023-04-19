const {expect} = require('@jest/globals'); 

const calorieCounter = require('../src/AoC1')
describe('calorie block counter', () => {
    test('only returns numbers', () => {
        input='';
        expect(typeof calorieCounter(input)).toBe('number');
    });
    test('if the input is an empty string, 0 should be returned', () => {
        input = '';
        expect(calorieCounter(input)).toEqual(0);
    });
    test('only returns numbers even when given a string number', () => {
        input='987';
        expect(typeof calorieCounter(input)).toBe('number');
    });
    test('adds a block of numbers', () => {
        input=`1000
        2000
        3000`;
        expect(calorieCounter(input)).toEqual(6000);
    });
});



