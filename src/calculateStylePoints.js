const calculateStylePoints = (styleNotes) => {
    const lowestNote = Math.min(...styleNotes);
    const highestNote = Math.max(...styleNotes);
    const notesSum = styleNotes.reduce((a, b) => a + b, 0);

    return notesSum - lowestNote - highestNote;
};

module.exports = calculateStylePoints;
