import express from "express";
import { createCart, addToCart } from "../controllers/cartController.js";

const router = express.Router();

// Tạo giỏ hàng cho user
router.post("/", createCart);

// Thêm sản phẩm vào giỏ
router.post("/add", addToCart);

export default router;
