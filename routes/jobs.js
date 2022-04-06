const express = require('express');
const { jobs } = require('../module/modal');


const route = express.Router()

route.get('/', (req, res) => {
    jobs.find({}, (err, result) => {
        if(err) throw err
        res.json(result)
    })
})

module.exports = route