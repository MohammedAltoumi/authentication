const express = require('express');
const userRouter = require('./routes/userRoutes');
const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({ extended : true }))
app.use('/', userRouter);

module.exports = app