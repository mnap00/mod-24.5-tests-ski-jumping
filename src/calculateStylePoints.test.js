/*eslint-env mocha*/
const assert = require('assert');
const calculateStylePoints = require('./calculateDistancePoints');

describe('stylePoints', () => {
    it('equal notes', () => {
        const styleNotes = [ 17.5, 17.5, 17.5, 17.5, 17.5 ];
        const actual = calculateStylePoints(styleNotes);

        const expected = 52.5;

        assert.equal(actual, expected);
    });
});
