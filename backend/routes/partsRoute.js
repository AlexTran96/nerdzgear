const express = require('express');
const partsRoute = express.Router();
const {Part } = require('../models');
const Sequalize = requre('sequelize');
const Op = Sequalize.Op;

partsRoute.use(express.json());

partsRoute.get('/stores',async(req,res)=>{
    const {term } = req.query;

    term = term.toLowerCase();

    const parts = Part.findAll({where: {model: {[Op.like] : '%' + term + '%' }}})
    if(parts != null ){
        res.status(200).json(parts);
    }
    else{
        res.status(404);
    }

});


module.exports = partsRoute;