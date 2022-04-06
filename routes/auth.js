const express = require('express');
const { users } = require('../module/modal');
const bcrypt = require('bcryptjs');
const { createToken, verifyToken } = require('../midleware/jwt');


const route = express.Router()


//GET ALL USERS
route.get('/', (req, res) => {
    users.find({}, (err, result) => {
        if(err) throw err
        res.json(result)
    })
})


//AUTHORIZE TOKEN
route.post('/authorize', verifyToken, (req, res) => {
    res.json(req.user)
})


//GET ALL REGISTER
route.post('/register', async (req, res) => {
    try{
        const hashPass = await bcrypt.hash(req.body.password, 5);
        const data = {...req.body, password:hashPass}
        users.find({email:req.body.email}, async (err, results) => {
            if(err) throw err
            if(results.length > 0) return res.status(403).send('Already  registered!.')
            users.insert(data, (err, user) => {
                if(err) throw err
                res.status(201).json(user)
            })
        })
    }catch(error){
        res.send(error)
    }
})


//GET ALL LOGIN
route.post('/login', (req, res) => {
    const {email, password} = req.body
    users.find({email:email}, async (err, user) => {
        if(err) throw err
        if(user.length == 0) return res.status(403).send(`Not Registered`)
        const verify = await bcrypt.compare(password, user[0].password)
        if(!verify) return res.status(403).send('Wrong password!');

        const token = await createToken({name:user[0].name, email:user[0].email, phone:user[0].phone, _id:user[0]._id})

        res.cookie('SALE-CONEX-KEY', token, {maxAge:10000 * 60 * 60, httpOnly:true})
        res.json({
            name:user[0].name, email:user[0].email, phone:user[0].phone, avatar:user[0].avatar, _id:user[0]._id
        })
    })
})

module.exports = route