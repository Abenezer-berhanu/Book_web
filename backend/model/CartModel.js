import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    trim: true,
  },
  phone: {
    type: String,
    default: "12345",
    min: 9,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
    min: 5,
  },
  category: {
    type: String,
    required: true,
    min: 4,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 1,
  },
  numLike: {
    type: Number,
    default: 1,
  },
  amount: {
    type: Number,
    required: true,
    default: 1,
  },
  itemAmount: {
    type: Number,
  },
});

export default mongoose.model("Cart", cartSchema);
