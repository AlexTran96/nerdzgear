const express = require('express');
const offersRoute = express.Router();
const { Offer,Part } = require('../models');

offersRoute.use(express.json());

// Create offer
offersRoute.post('/sendOffer',async(req,res)=>{
    let {fname,lname,email,phone,device,model,condition,price} = req.body;
    email = email.toLowerCase();

    const Offered = await  Offer.findOne({where: {email:email}});

    if (Offered === null) {
        const offerCreated = Offer.create({
            fname,
            lname,
            email,
            phone,
            device,
            model, 
            condition,
            price
        });

        if(Offered != null) {
            res.status(200).end();
        }
        else{
            res.status(500);
            console.log("Can't create offers");
        }
    }
})


module.exports = offersRoute;