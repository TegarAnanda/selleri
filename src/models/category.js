const mongoose = require("mongoose");
const {Schema}= mongoose;

const category = new Schema({
    title: { type: String },
    status: { type: String },
    createdBy: { type: String },
    updatedBy: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("category", category);