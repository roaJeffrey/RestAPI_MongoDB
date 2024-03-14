const express = require('express');
const router = express.Router();

const OwnerDetails = require('../Model/OwnerDetails');

// Get a All Owner Details
router.post('/', async (req, res, next) => {
    try {
        const owner = new OwnerDetails(req.body);
        const result = await owner.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

// Creating a New Owner Details
router.get('/', async(req, res, next) => {
    const id = req.params.id;
    try{
        const owner = await OwnerDetails.find({}, {__v: 0});
        res.send(owner);
    }catch (error) {
        res.send(error.message);
    }
});

// Update an Owner Detail
router.patch('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const update = req.body
        const result = await OwnerDetails.findByIdAndUpdate(id, update);
        res.send(result)
    }catch (error) {
        res.send(error.message);
    }
});

// Delete an Owner Detail
router.delete('/:id',async (req, res, next) => {
    const id = req.params.id;
    try{
        const owner = await OwnerDetails.findByIdAndDelete(id);
        res.send(owner);
    }catch (error) {
        res.send(error.message);
    }
});


module.exports = router;