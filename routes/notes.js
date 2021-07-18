module.exports = (app) => {
    const notes = require('../controllers/note');

    // Create a new Note
    app.post('/notes', notes.createNote);

    // Retrieve all Notes
    app.get('/notes', notes.getAllNotes);

    // Retrieve a single Note with noteId
    app.get('/notes/:id', notes.getSingleNote)

    // Update a Note with noteId
    app.put('/notes/:id', notes.updateSingleNote);

    // Delete a Note with noteId
    app.delete('/notes/:id', notes.deleteSingleNote);
}