module.exports = (app) => {
    const notes = require('../controllers/note');

    // Retrieve all Notes
    app.get('/notes', notes.getAllNotes);
}