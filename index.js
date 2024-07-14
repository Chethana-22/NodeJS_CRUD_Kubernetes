const express = require("express")
const mongoose = require("mongoose");
const app = express()
const Product = require('./models/product.model')
const productRoute = require('./routes/product.route.js')

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/api/products', productRoute)

const db = 'mongodb+srv://Chethu:OnDhST33mU6VYFht@projects.5iur9su.mongodb.net/?retryWrites=true&w=majority&appName=projects'
mongoose
    .connect(db)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))


app.listen(3000, () => {
    console.log("Server is running on port 3000")
})