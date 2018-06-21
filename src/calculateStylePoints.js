const calculateStylePoints = (styleNotes) => {
    const lowestNote = Math.min(...styleNotes);
    const highestNote = Math.max(...styleNotes);
    const notesSum = styleNotes.reduce((a, b) => a + b, 0);

    const stylePoints = notesSum - lowestNote - highestNote;

    return stylePoints;
};

module.exports = calculateStylePoints;
