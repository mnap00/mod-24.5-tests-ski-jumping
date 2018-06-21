const calculateStylePoints = (styleNotes) => {
    const lowestNote = Math.min(...styleNotes);
    const highestNote = Math.max(...styleNotes);
    const notesSum = styleNotes.reduce((a, b) => a + b, 0);

    const stylePoints = notesSum - lowestNote - highestNote;
    console.log(isNaN(stylePoints));
    console.log(isNaN(highestNote));
    console.log(isNaN(lowestNote));
    console.log(isNaN(notesSum));

    return stylePoints;
};

var points = calculateStylePoints([17.5, 17.5, 17.5, 17.5, 17.5]);
console.log(points);

module.exports = calculateStylePoints;
