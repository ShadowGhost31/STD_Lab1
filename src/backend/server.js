const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const app = express();
app.use(cors());
app.use(express.json());

const products = [
    { id: 1, name: 'Smartphone X200', price: '$799' },
    { id: 2, name: '4K Ultra TV', price: '$1499' },
    { id: 3, name: 'Wireless Headphones', price: '$299' },
    { id: 4, name: 'Gaming Laptop Z5', price: '$1899' },
    { id: 5, name: 'Smartwatch Elite', price: '$399' },
    { id: 6, name: 'Bluetooth Speaker Pro', price: '$199' },
];

const orders = [];

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Hi-Tech Shop API',
            version: '1.0.0',
            description: 'API for product listings and orders'
        },
    },
    apis: ['./server.js']
};
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get list of products
 *     responses:
 *       200:
 *         description: Success
 */
app.get('/products', (req, res) => {
    res.json(products);
});

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Place a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               productId:
 *                 type: integer
 *               customer:
 *                 type: string
 *     responses:
 *       201:
 *         description: Order placed
 */
app.post('/orders', (req, res) => {
    const order = req.body;
    orders.push(order);
    res.status(201).send('Order placed');
});

app.listen(5000, () => console.log('Backend running at http://localhost:5000'));