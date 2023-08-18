import express from 'express'
/////////////////////////////////////importing from file
import { signup , login, logout} from '../controlls/userControll.js'
const router = express.Router()


router.post('/login', login)
router.post('/signup', signup)
router.post('/logout', logout)

export default router