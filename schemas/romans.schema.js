const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const romanSchema = new Schema({
    roman: { type: String, required: true },
    value: { type: String, required: true },
    repeat: { type: String, required: true }
})

// crear Schema
const Romans = mongoose.model('Romans', romanSchema);

module.exports = Romans