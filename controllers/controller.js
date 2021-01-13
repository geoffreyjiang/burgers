const express = require('express');
const router = express.Router();
const burger = require("../model/burger.js")

router.get('/', (req,res) => {
    burger.selectAll((data) => {
        res.render('index', {burgers: data})
    })
});

router.post("/api/burgers", (req, res) => {
	burger.insertOne(["burger_name"], [req.body.burger_name], (results) => {
		res.json({ id: results.insertId });
	});
});
