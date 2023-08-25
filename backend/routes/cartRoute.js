import express from 'express'
import { getCartItems,addCartItem } from '../controlls/cartControll.js'

const router = express.Router()

router.get('/', getCartItems)
router.post('/', addCartItem)

export default router
