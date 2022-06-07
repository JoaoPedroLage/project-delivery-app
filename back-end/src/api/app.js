const express = require('express');
const errorMiddleware = require('./middlewares/errorHandler');
const loginRouter = require('./routes/loginRouter');
const userRouter = require('./routes/userRouter');
const productsRouter = require('./routes/productsRouter');

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
    this.errorHandler();
  }

  startServer(PORT = 3001) {
    this.app.listen(
      PORT,
      () => console.log(`Server running here 👉 http://localhost:${PORT}`),
    );
  }

  config() {
    const accessControl = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(accessControl);
    this.app.use(express.json());
  }

  routes() {
    this.app.use('/login', loginRouter);
    this.app.use('/user', userRouter);
    this.app.use('/products', productsRouter);
  }

  getApp() {
    return this.app;
  }
    
  errorHandler() {
    this.app.use(errorMiddleware);
  }
}

module.exports = App;