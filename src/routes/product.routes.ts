import { Router } from "express";
import { addNewProduct, deleteOldProduct, getProducts, getProductById, updateProduct } from "../controllers/product.controller";
export const router = Router()


router.get("/",getProducts);
router.get("/:id",getProductById);
router.post("/",addNewProduct);
router.delete("/:id",deleteOldProduct);
router.patch("/:id",updateProduct);
