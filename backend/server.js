import express from 'express';
import dotevn from 'dotenv';
import connectDB from './config/db.js';
import cookieParser from 'cookie-parser';
import productRoutes from '../backend/routes/productRoutes.js'
import userRoutes from '../backend/routes/userRoutes.js';
import orderRoutes from '../backend/routes/orderRoutes.js';
import { notFound, errorHandler } from '../backend/middleware/ErrorMiddleware.js';

dotevn.config();
const PORT = process.env.PORT || 5000;

connectDB();
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => { 
    res.send('Server is ready');
});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});