import e from "express";
import express from "express";
import { getProducts, getProductById } from '../../backend/controllers/productController.js';

const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

export default router;
