const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    email: String,
    activityId: String,
    text: String,
    rating: Number
})
const Review = mongoose.model('Review', reviewSchema)
module.exports = Review