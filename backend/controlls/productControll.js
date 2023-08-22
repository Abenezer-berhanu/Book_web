import productModel from "../model/ProductModel.js";
import UserModel from "../model/UserModel.js";
import jwt from "jsonwebtoken";




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

const addProduct = async (req, res) => {
    const { cookie } = req.headers;
  if (!cookie) {
    res.send(404).json({ error: "Authentication token not found" });
  }

  let {
    name,
    price,
    description,
    category,
    image,
    rating,
    user,
    numLike,
    amount,
  } = req.body;
  if (
    !name ||
    !price ||
    !description ||
    !category ||
    !image ||
    !rating ||
    !numLike ||
    !amount
  ) {
    res.status(400).json({ message: "all fields are required" });
  }

  const tooken = cookie.split("=")[1];
  const { id } = jwt.verify(tooken, process.env.TOKEN_KEY);

  user = id;
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
    });
    res.status(201).json({ product });
  } catch (error) {
    console.log(error.message);
  }
};

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
    image,
    rating,
    amount,
  } = req.body;
  const id = req.params.id
  
  const updatedProduct = await productModel.findByIdAndUpdate(id, {
    name,
    price,
    description,
    category,
    image,
    rating,
    amount,
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

export { getAllProducts, addProduct , updateProduct, deleteProduct, getTopProducts, getProductById, getRelatedItem};
