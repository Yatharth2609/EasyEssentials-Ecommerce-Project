import express from 'express';
import products from '../backend/data/products.js';
import dotevn from 'dotenv';

dotevn.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => { 
    res.send('Server is ready');
});

app.get('/api/products', (req, res) => {
   res.json(products);
});

app.get('/api/products/:id', (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});