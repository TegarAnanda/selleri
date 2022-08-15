const mongoose = require("mongoose");
const {Schema}= mongoose;

const product = new Schema({
    title: { type: String },
    price: { 
        stickerPrice: { type: Number },
        discountedPrice: { type: Number }
    },
    imageUrl: { type: String },
    location: {
        province: { type: String },
        city: { type: String }
    },
    categoryId: { type: String },
    userId: { type: String },
    published: { type: Boolean },
    updatedBy: { type: String },
    recommended: { type: Boolean }
}, { timestamps: true });

module.exports = mongoose.model("product", product);