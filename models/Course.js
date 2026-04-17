const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: String,
    provider: String, 
    type: { type: String, enum: ['paid', 'free'] },
    stream: String, 
    semester: String, 
    price: Number,
    discountPrice: Number,
    link: String, 
    isPanicMode: Boolean 
});

module.exports = mongoose.model('Course', courseSchema);