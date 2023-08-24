import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 5,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    min:9
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
    default: 1,
  },
  numLike: {
    type: Number,
    default: 1,
  },
  amount : {
    type : Number,
    required : true,
    default : 1
  }
},{ timestamps: true});

export default mongoose.model("Product", productSchema);
