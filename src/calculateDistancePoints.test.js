/*eslint-env mocha*/
const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('distancePoints', () => {
    describe('normal hill', () => {
        it('should return above 60', () => {
            const actual = calculateDistancePoints(111, 109, 98);

            const expected = 86;

            assert.equal(actual, expected);
        });

        it('should return 60', () => {
            const actual = calculateDistancePoints(95, 90, 95);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('should return below 60', () => {
            const actual = calculateDistancePoints(93.5, 100, 98);

            const expected = 51;

            assert.equal(actual, expected);
        });
    });

    describe('large hill', () => {
        it('should return above 60', () => {
            const actual = calculateDistancePoints(134, 134, 120);

            const expected = 85.2;

            assert.equal(actual, expected);
        });

        it('should return 60', () => {
            const actual = calculateDistancePoints(120, 110, 120);

            const expected = 60;

            assert.equal(actual, expected);
        });

        it('should return below 60', () => {
            const actual = calculateDistancePoints(117.5, 180, 120);

            const expected = 55.5;

            assert.equal(actual, expected);
        });
    });

    describe('ski flying hill', () => {
        it('should return above 120', () => {
            const actual = calculateDistancePoints(227.5, 225, 200);

            const expected = 153;

            assert.equal(actual, expected);
        });

        it('should return 120', () => {
            const actual = calculateDistancePoints(160, 185, 160);

            const expected = 120;

            assert.equal(actual, expected);
        });

        it('should return below 120', () => {
            const actual = calculateDistancePoints(175, 225, 200);

            const expected = 90;

            assert.equal(actual, expected);
        });
    });
});
