const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: false,
            unique: true
        }
    }, 
    { timestamps: true}
);

module.exports = mongoose.model("Category", CategorySchema);