import path from 'path'
import express from 'express'
import multer from 'multer'

const router = express.Router()

const storage = multer.diskStorage({
    destination : (req , file , cb) => {
        cb(null, 'uploads/')
    },
    filename : (req , file , cb) => {
        cb(null , file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})

function checkFileType(file, cb) {
    const fileTypes = /jpeg|jpg|png/
    const extname = fileTypes.test(path.extname(file.originalname).toLowerCase())
    const mimtype = fileTypes.test(file.mimtype);
    if(extname && mimtype){
        return cb(null , true)
    }else{
        cb('Image only')    
    }
}


const upload = multer({storage})

router.post('/', upload.single("image"),(req, res) => {
    console.log(req, 16)
})

export default router;