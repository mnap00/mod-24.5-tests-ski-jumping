/*eslint-env mocha*/
const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('stylePoints', () => {
    it('tests equal notes', () => {
        const styleNotes = [ 17.5, 17.5, 17.5, 17.5, 17.5 ];
        const actual = calculateStylePoints(styleNotes);

        const expected = 52.5;

        assert.equal(actual, expected);
    });

    it('tests border notes', () => {
        const styleNotes = [ 0.0, 5.5, 11.0, 17.5, 20.0 ];
        const actual = calculateStylePoints(styleNotes);

        const expected = 34;

        assert.equal(actual, expected);
    });

    it('tests balanced notes', () => {
        const styleNotes = [ 16.5, 17.0, 16.0, 16.5, 17.0 ];
        const actual = calculateStylePoints(styleNotes);

        const expected = 50;

        assert.equal(actual, expected);
    });
});
