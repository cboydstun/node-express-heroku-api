const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now },
}, { timeStamp: true });

module.exports = mongoose.model('Note', NoteSchema);