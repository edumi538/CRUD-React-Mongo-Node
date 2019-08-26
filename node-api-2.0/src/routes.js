const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');
// Rota 1

routes.get('/product', ProductController.index);
routes.post('/salvar', ProductController.store);
routes.get('/product/:id', ProductController.show);
routes.put('/updatedata/:id', ProductController.update);
routes.delete('/deletebyid/:id', ProductController.delete);

module.exports = routes;
