import express from 'express'
/////////////////////////////////////importing from file
import { signup , login} from '../controlls/userControll.js'
const router = express.Router()


router.post('/login', login)
router.post('/signup', signup)

export default router