const express = require('express');
const { adverts } = require('../module/modal');
const multer = require('multer');

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'public/uploads')

    },
    filename:function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage:storage})


const route = express.Router()

route.get('/', (req, res) => {
    adverts.find({}, (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

//UPLOAD ITEM   
route.post('/upload', upload.single('image'), (req, res) => {
    const image =  `/uploads/${req.file.originalname}`
    adverts.insert({...req.body, image}, (err, result) => {
        if(err) throw err
        res.json(result);
    })
})


module.exports = route