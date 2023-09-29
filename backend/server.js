import express from 'express';
import dotevn from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from '../backend/routes/productRoutes.js'

dotevn.config();
const PORT = process.env.PORT || 5000;

connectDB();
const app = express();

app.get('/', (req, res) => { 
    res.send('Server is ready');
});

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});