const Note = require('../models/note');

// Retrieve all notes from the database.
exports.getAllNotes = async(req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json({ 
            success: true, 
            count: notes.lenght, 
            data: notes });
    } catch (err) {
        res.status(400).json({ 
            success: false,
            message: err.message || "Some error occurred while retrieving notes."
        });
    }
};

