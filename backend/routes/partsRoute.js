const express = require('express');
const partsRoute = express.Router();
const {Part} = require('../models');

partsRoute.use(express.json());

partsRoute.get('/stores',async(req,res)=>{
    Part.findAll().then(function(result){
        res.json(result);
    });
});

partsRoute.get('/estimate/:condition',async(req,res)=>{
    Part.
})

module.exports = partsRoute;