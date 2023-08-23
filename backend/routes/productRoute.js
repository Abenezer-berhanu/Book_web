import express  from "express";
import { getAllProducts , addProduct, updateProduct, deleteProduct, getTopProducts, getProductById, getRelatedItem} from '../controlls/productControll.js'

const router = express.Router()

router.get('/', getAllProducts)
router.get('/relatedItem/:name', getRelatedItem)
router.get('/topProducts', getTopProducts)
router.get('/:id' , getProductById)
router.post('/addProduct/:id', addProduct)
router.patch('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct)

export default router