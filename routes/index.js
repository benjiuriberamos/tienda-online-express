const express = require('express')
const productsRouter = require('./products.router')
const usersRouter = require('./users.router')
const categoriesRouter = require('./categories.router')

function routerApi(app) {
  const router = express.Router();

  //aquí inicia la versión 1
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter)
  router.use('/users', usersRouter)

  //aquí inicia la versión 2
  app.use('/api/v2', router);
  router.use('/products', productsRouter);
}

module.exports = routerApi;
