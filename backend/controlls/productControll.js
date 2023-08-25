import ProductModel from "../model/ProductModel.js";
import productModel from "../model/ProductModel.js";
import UserModel from "../model/UserModel.js";
import jwt from "jsonwebtoken";
import validator from 'validator'




// @get products
// @/products
// @get req
////////////////////////////////////////////////////////////////////////
const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.find({});
    if (!products) {
      res.status(404).json({ message: "No product found" });
    }
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};

// @get top products
// @/topProducts
// @get req
////////////////////////////////////////////////////////////////////////
const getTopProducts = async (req, res) => {
  try {
    const products = await productModel.find({category : 'electronics'}).sort({ rating : -1}).limit(3);
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};


// @get single product
// @/:id
// @get req
////////////////////////////////////////////////////////////////////////
const getRelatedItem = async (req, res) => {
  const {name} = req.params
  try {
    const products = await productModel.find({category : name})
    res.status(200).json({ products });
  } catch (error) {
    console.log(error);
  }
};


// @get single product
// @/:id
// @get req
////////////////////////////////////////////////////////////////////////
const getProductById = async (req, res) => {
  const {id} = req.params
  try {
    const products = await productModel.findById(id)
    res.status(200).json({ product: products });
  } catch (error) {
    console.log(error);
  }
};

// @adding product
// @/user/addProducts
// @post req
////////////////////////////////////////////////////////////////////////


const addProduct = async(req, res) => {
  const {id} = req.params
  let {
    name,
    price,
    description,
    category,
    rating,
    numLike,
    amount,
    phone
  } = req.body
  let image = req.file.filename
  if (
    !name ||
    !price ||
    !description ||
    !category ||
    !image ||
    !rating ||
    !amount ||
    !phone
  )
  {
    res.status(400).json({ message: "all fields are required" });
  }

  let user = id
  try {
    const product = await productModel.create({
      name,
      price,
      description,
      category,
      image,
      rating,
      numLike,
      amount,
      user,
      phone
    });
    res.status(201).json({ product });
  } catch (error) {
    console.log(error)
  }
};


// @get user products
// @/products/userProducts/:id
// @get req
////////////////////////////////////////////////////////////////////////

const getUserProducts = async(req, res) => {
  const {id} = req.params
  try {
    const userProduct = await ProductModel.find({user : id}).sort({price : -1})
    if(!userProduct){
      res.status(404).json({message : "user has no product"})
    }
    res.status(200).json(userProduct)
  } catch (error) {
    console.log(error.message)
  }
}


// @update product
// @/products/updateProduct/:id
// @patch req
////////////////////////////////////////////////////////////////////////

const updateProduct = async(req, res) => {
  const {
    name,
    price,
    description,
    category,
    amount,
    phone
  } = req.body;
  const {id}= req.params
  
  const updatedProduct = await productModel.findByIdAndUpdate(id, {
    name,
    price,
    description,
    category,
    amount,
    phone
  })
  res.status(200).json({updatedProduct})
};

const deleteProduct = async (req, res) => {
    const { cookie } = req.headers;
    const id = req.params.id
    if (!cookie) {
        res.send(404).json({ error: "Authentication token not found" });
      }
     const tooken = cookie.split("=")[1];
    const { id : user_id} = jwt.verify(tooken, process.env.TOKEN_KEY);
    let deletedItem;
    try {
        const user = await UserModel.findById(user_id)
        if(user){
            if(user.isAdmin){
            deletedItem = await productModel.findByIdAndDelete(id)
            res.status(204).json({deletedItem8})
            }
        res.status(404).json({error : 'Access denied no Author'})
        }
    } catch (error) {
        console.log(error.message)
    }
}

export { getAllProducts, addProduct , updateProduct, deleteProduct, getTopProducts, getProductById, getRelatedItem, getUserProducts};
