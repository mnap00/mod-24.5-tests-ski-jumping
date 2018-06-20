const calculateDistancePoints = (distance, hillSize, kPoint) => {
    const distancePoints = distance - kPoint;

    if (hillSize < 110) {
        return distancePoints * 2 + 60;
    } else if (hillSize >= 110 && hillSize < 185) {
        return distancePoints * 1.8 + 60;
    } else {
        return distancePoints * 1.2 + 120;
    }
};

module.exports = calculateDistancePoints;
