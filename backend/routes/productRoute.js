import multer from 'multer'
import express  from "express";
import path from 'path'
import { getAllProducts , addProduct, updateProduct, deleteProduct, getTopProducts, getProductById, getRelatedItem} from '../controlls/productControll.js'

const router = express.Router()

const storage = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null, 'uploads')
    },
    filename : (req , file , cb) => {
        cb(null , file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

function checkFileType(req,file, cb) {
    const fileTypes = /jpeg|jpg|png/
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimtype = fileTypes.test(file.mimtype);
    if(extname && mimtype){
        return cb(null , true)
    }else{
        cb('Image only')
    }
}


const upload = multer({storage, checkFileType})

router.get('/', getAllProducts)
router.get('/relatedItem/:name', getRelatedItem)
router.get('/topProducts', getTopProducts)
router.get('/:id' , getProductById)
router.post('/addProduct/:id', upload.single('image'), addProduct)
// router.post('/addProduct/:id', upload.single('image'), 
// (req, res) => {
//    console.log(req)
// }
// )
router.patch('/updateProduct/:id', updateProduct)
router.delete('/deleteProduct/:id', deleteProduct)

export default router