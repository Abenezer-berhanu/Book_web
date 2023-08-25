import CartModel from "../model/CartModel.js";

const getCartItems = async(req, res) => {
        try {
            const res = await CartModel.find({})
            res.status(200).json({response: res})
        } catch (error) {
            console.log(error)
        }
}

// @post cart products
// @/products/chart
// @post req
////////////////////////////////////////////////////////////////////////
const addCartItem = async (req, res) => {
    try {
      const cartItems = await CartModel.create({
        name: req.body.name,
        phone: req.body.phone,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        image: req.body.image,
        rating: req.body.rating,
        numLike: req.body.numLike,
        amount: req.body.amount,
        itemAmount: req.body.itemAmount,
      });
      res.status(200).json({ cartItems });
    } catch (error) {
      console.log(error);
    }
  };

export {addCartItem, getCartItems}