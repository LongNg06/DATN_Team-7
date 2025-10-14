import express from "express";
import { getProducts, addProduct, getOneProducts } from "../controllers/productController.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getOneProducts);
router.post("/", addProduct);

export default router;
