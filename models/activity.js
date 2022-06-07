const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    type: String,
    name: String,
    desc: String,
    price: Number,
    imgFull: String,
    imgThumb: String,
    url: String,
})
const Activity = mongoose.model('Activity', activitySchema)
module.exports = Activity