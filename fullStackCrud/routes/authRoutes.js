const express = require('express');
const UserModel = require('../models/userModel');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userRouter.get('/', (req, res) => {
    res.send('Hi from Homepage');
})

userRouter.post('/register', async(req, res) => {
    const {password} = req.body;
    try {
       const newPass = await bcrypt.hash(password, 10);
       const user = await UserModel.create({...req.body, password : newPass}); 
       res.status(200).send({'msg' : 'User registered successfully', user});
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

userRouter.post('/login', async(req, res) => {
    const {email, password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(!user){
            res.status(400).send({'msg' : 'User not found.'});
        }
        else{
            const verify = await bcrypt.compare(password, user.password);
            if(verify){
                const token = jwt.sign({userID : user._id, username : user.username}, process.env.secretKey, {expiresIn : '1h'});
                // const refreshToken = jwt.sign({userID : user._id, username : user.username}, process.env.refreshKey, {expiresIn : '5h'});
                res.status(200).send({'msg' : 'Login Successful', token});
            }
            else{
                res.status(400).send({'msg' : 'Wrong Password!!'});
            }
        }
    } catch (error) {
        res.status(400).send({'msg' : error.message});
    }
})

module.exports = userRouter;