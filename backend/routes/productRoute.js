import multer from "multer";
import express from "express";
import path from "path";
import {
  getAllProducts,
  addProduct,
  updateProduct,
  deleteProduct,
  getTopProducts,
  getProductById,
  getRelatedItem,
  getUserProducts
} from "../controlls/productControll.js";

const router = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/uploads");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      file.fieldname + "_" + Date.now() + path.extname(file.originalname)
    );
  },
});

function checkFileType(req, file, cb) {
  const fileTypes = /jpeg|jpg|png/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if (extname && mimetype) {
    return cb(null, true);
  } else {
    cb("Image only");
  }
}

const upload = multer({ storage, checkFileType });

router.get("/", getAllProducts);
router.get("/relatedItem/:name", getRelatedItem);
router.get("/topProducts", getTopProducts);
router.get("/:id", getProductById)
router.get("/userProducts/:id", getUserProducts)
router.post("/addProduct/:id", upload.single("image"), addProduct);
router.patch("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);

export default router;
