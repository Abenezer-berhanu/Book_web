import express  from "express";
import { getAllProducts , addProduct, updateProduct, deleteProduct} from '../controlls/productControll.js'

const router = express.Router()

router.get('/', getAllProducts)
router.post('/addProduct', addProduct)
router.patch('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct)

export default router