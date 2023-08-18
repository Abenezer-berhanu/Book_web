import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    min: 10
  },
  category: {
    type: String,
    required: true,
    min: 4
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numLike: {
    type: Number,
    required: true,
    default: 0,
  },
  amount : {
    type : Number,
    required : true,
    default : 0
  }
});

export default mongoose.model("Product", productSchema);
