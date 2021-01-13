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

router.put('/api/burgers/:id', (req, res) => {
    const condition = `id = ${req.params.id}`;

    burger.updateOne(
        condition, (result) => {
            if (result.changedRows === 0) {
                return res.status(404).end()
            }
            res.status(200).end()
        }
    );
});

router.delete("/api/burgers/:id", (req, res) => {
    const condition = `id = ${req.params.id}`;

    burger.deleteOne(condition, (results) => {
        
        if (results.changeRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end()
    })
})

module.exports = router;

