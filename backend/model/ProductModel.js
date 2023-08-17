import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  rating: [
    {
      rate: {
        type: Number,
        required: true,
        default: 0,
      },
      count: {
        type: Number,
        required: true,
        default: 0,
      },
    },
  ],
  numLike: {
    type: Number,
    required: true,
    default: 0,
  },
  comment: {
    type: String,
    required: true,
  },
});

export default mongoose.model('Product', productSchema)