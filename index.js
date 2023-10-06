const express = require('express');
const app = express();

const port  = 3000;

app.use(express.json())
const dataSource = require('./connect').dataSource

const postRoute = require('./routes/post.route');
const categoryRoute = require('./routes/category.route');

app.use('/api/post',postRoute);
app.use('/api/categories', categoryRoute);
app.listen(port, ()=>{
    console.log('App listenig on port ', port);
})