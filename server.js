const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/productModel')
const Asset = require('./models/assetModel')
const User = require('./models/userModel')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes

//Get All Product
app.get('/product', async(req,res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get Product by ID
app.get('/product/:id',async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Add new Product
app.post('/product', async(req,res) =>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Update a product
app.put('/product/:id',async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        //cannot find product in database
        if(!product){
            return res.status(404).json({message: 'Cannot find any product with ID ${id}'})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Delete a Product
app.delete('/product/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id);
        if(!product){
            return res.status(404).json({message: 'cannot find any product with id ${id}'})
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})
///////////////////////////////////////////////////////////////////// ASSET //////////////////////////////////////////////////////////

//Get All Asset
app.get('/asset', async(req,res) => {
    try {
        const asset = await Asset.find({});
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get Asset by ID
app.get('/asset/:id',async(req,res) =>{
    try {
        const {id} = req.params;
        const asset = await Asset.findById(id);
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Add new Asset
app.post('/asset', async(req,res) =>{
    try {
        const asset = await Asset.create(req.body)
        res.status(200).json(asset);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Update an Asset
app.put('/asset/:id',async(req,res) =>{
    try {
        const {id} = req.params;
        const asset = await Asset.findByIdAndUpdate(id, req.body);
        //cannot find product in database
        if(!asset){
            return res.status(404).json({message: 'Cannot find any asset with ID ${id}'})
        }
        const updatedAsset = await Asset.findById(id);
        res.status(200).json(asset);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Delete an Asset
app.delete('/asset/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const asset = await Asset.findByIdAndDelete(id);
        if(!asset){
            return res.status(404).json({message: 'cannot find any asset with id ${id}'})
        }
        res.status(200).json(asset);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

///////////////////////////////////////////////////////////// USER /////////////////////////////////////////////////////////////

//Get All User
app.get('/users', async(req,res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Get User by ID
app.get('/users/:id',async(req,res) =>{
    try {
        const {id} = req.params;
        const users = await User.findById(id);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Create new User
app.post('/users', async(req,res) =>{
    try {
        const users = await User.create(req.body)
        res.status(200).json(users);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Update User
app.put('/users/:id',async(req,res) =>{
    try {
        const {id} = req.params;
        const users = await User.findByIdAndUpdate(id, req.body);
        //cannot find product in database
        if(!users){
            return res.status(404).json({message: 'Cannot find any user with ID ${id}'})
        }
        const updatedUser = await User.findById(id);
        res.status(200).json(asset);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Delete a User
app.delete('/users/:id', async(req,res) =>{
    try {
        const {id} = req.params;
        const users = await User.findByIdAndDelete(id);
        if(!users){
            return res.status(404).json({message: 'cannot find any user with id ${id}'})
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



mongoose.
connect('mongodb://idkgibran:gibran123@ac-pdvnqlh-shard-00-00.jgh4dix.mongodb.net:27017,ac-pdvnqlh-shard-00-01.jgh4dix.mongodb.net:27017,ac-pdvnqlh-shard-00-02.jgh4dix.mongodb.net:27017/?ssl=true&replicaSet=atlas-b1blu1-shard-0&authSource=admin&retryWrites=true&w=majority&appName=DevtaminAPI')
.then(() => {
    console.log('Connected to MongoDB')
    app.listen(3000, ()=> {
        console.log('Node API app is running on port 3000')
    })
}).catch((error) => {
    console.log(error)
})