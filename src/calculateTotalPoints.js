const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (
    distance, hillSize, kPoint, styleNotes, windFactor, gateFactor
) => {
    if (!gateFactor) {
        gateFactor = 0.0;
    }

    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);

    const totalPoints = distancePoints + stylePoints + windFactor + gateFactor;

    return totalPoints.toFixed(1);
};

module.exports = calculateTotalPoints;
