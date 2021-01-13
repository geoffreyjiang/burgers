const express = require('express');
const router = express.Router();
const burger = require("../model/burger.js")

router.get('/', (req,res) => {
    burger.selectAll((data) => {
        res.render('index', {burgers: data})
    })
});

