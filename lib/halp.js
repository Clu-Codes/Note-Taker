function findById(id, noteData) {
    const result = noteData.filter(note => note.id === id)[0];
    return result;
};

function deleteId(note, noteArray) {
    const index = noteArray.indexOf(note);
    noteArray.splice(index, 1);
};

module.exports = { findById, deleteId };