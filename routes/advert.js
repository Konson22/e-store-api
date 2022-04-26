const express = require('express');
const { adverts } = require('../module/modal');
const multer = require('multer');
const { verifyToken } = require('../midleware/jwt');

const storage = multer.diskStorage({
    destination:function(req, file, cb){
        cb(null, 'public/uploads')

    },
    filename:function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage:storage});

const route = express.Router()

route.get('/', (req, res) => {
    adverts.find({}, (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

//UPLOAD ITEM   
route.post('/upload', verifyToken, upload.single('image'), async (req, res) => {
    try {
        const image =  `http://localhost:3001/uploads/${req.file.originalname}`
        const adsData = {...req.body, image, sallerId:req.user._id}
        adverts.insert(adsData, (err, result) => {
            if(err) throw err
            res.status(201).json(result);
        })
    } catch (error) {
        res.status(500).send(error);
    }
})


module.exports = route