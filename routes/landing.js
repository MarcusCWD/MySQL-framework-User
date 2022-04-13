const express = require("express");
const router = express.Router(); 


router.get('/', (req,res)=>{
    res.render('landing/index.hbs')
})
router.get('/about-us', (req,res)=>{
    res.render('landing/about-us.hbs')
})
router.get('/contact-us', (req,res)=>{
    res.render('landing/contact-us.hbs')
})

module.exports = router; 