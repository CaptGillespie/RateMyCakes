const mongoose = require("mongoose");

const RateSchema = new mongoose.Schema({
    stars: {type: Number, required: [true, "*Rating is required"]},
    comment: {type: String, minlength: 2, required: [true, "Tell em what you think, everyone else on the internet does."]}
})

const CakeSchema = new mongoose.Schema({
    bakerName: {type: String, required: true, minlength:2},
    imgUrl: {type:String, required: true},
    reviews:[RateSchema]
})


const cakes = mongoose.model("Cake", CakeSchema);
const Rate = mongoose.model("Rate", RateSchema);

module.exports = cakes, Rate;
