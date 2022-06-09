const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    email: String,
    name: String,
    details: String,
    recommend: Boolean,
    rating: Number
})
const Review = mongoose.model('Review', reviewSchema)
module.exports = Review