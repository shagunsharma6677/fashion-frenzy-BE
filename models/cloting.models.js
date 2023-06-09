const mongoose = require("mongoose");

const clotingSchema = mongoose.Schema(
  {
    name: String,
    img: String,
    price: Number,
    Spise: Number,
    brand: String,
    rating: Number
  },
  {
    versionKey: false,
  }
);

const ClotingModel = mongoose.model("clothing", clotingSchema);

module.exports = { 
  ClotingModel,
};
