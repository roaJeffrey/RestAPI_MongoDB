const express = require('express');
const router = express.Router();

const Inventory = require('../Model/Inventory.model');

// Get a All Inventory
router.post('/', async (req, res, next) => {
    try {
        const inventory = new Inventory(req.body);
        const result = await inventory.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

// Creating a New Inventory
router.get('/', async(req, res, next) => {
    const id = req.params.id;
    try{
        const inventory = await Inventory.find({}, {__v: 0});
        res.send(inventory);
    }catch (error) {
        res.send(error.message);
    }
});

// Update an Inventory
router.patch('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const update = req.body
        const result = await Inventory.findByIdAndUpdate(id, update);
        res.send(result)
    }catch (error) {
        res.send(error.message);
    }
});

// Delete an Inventory
router.delete('/:id',async (req, res, next) => {
    const id = req.params.id;
    try{
        const inventory = await Inventory.findByIdAndDelete(id);
        res.send(inventory);
    }catch (error) {
        res.send(error.message);
    }
});


module.exports = router;