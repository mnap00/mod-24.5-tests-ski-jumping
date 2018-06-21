/*eslint-env mocha*/
const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

// variables: distance, hillSize, kPoint, styleNotes, windFactor, gateFactor
describe('totalPoints', () => {
    it('tests negative wind, positive gate factor', () => {
        const actual = calculateTotalPoints(
            111,
            109,
            98,
            [19.0, 19.5, 19.0, 19.0, 19.0],
            -14.4,
            3.2
        );

        const expected = 131.8;

        assert.equal(actual, expected);
    });

    it('tests positive wind, negative gate factor', () => {
        const actual = calculateTotalPoints(
            113,
            134,
            120,
            [16.0, 16.0, 16.0, 15.5, 16.5],
            0.4,
            -0.8
        );

        const expected = 95;

        assert.equal(actual, expected);
    });

    it('tests no wind, no gate factor', () => {
        const actual = calculateTotalPoints(
            200.5,
            225,
            200,
            [17.0, 17.0, 16.5, 17.0, 17.0],
            0.0,
            0.0
        );

        const expected = 171.6;

        assert.equal(actual, expected);
    });

    it('tests empty gate factor', () => {
        const actual = calculateTotalPoints(
            200.5,
            225,
            200,
            [17.0, 17.0, 16.5, 17.0, 17.0],
            0.0,
            ''
        );

        const expected = 171.6;

        assert.equal(actual, expected);
    });
});
