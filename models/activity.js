const mongoose = require('mongoose')

const activitySchema = new mongoose.Schema({
    type: String,
    name: String,
    desc: String,
    price: { type: Number, multipleOf: 0.01 },
    imgFull: String,
    imgThumb: String,
    url: String,
})
const Activity = mongoose.model('Activity', activitySchema)
module.exports = Activity