const express = require('express');
const router = express.Router();

const EmployeeDetails = require('../Model/EmployeeDetails.model');

// Get a All Employee's Detail
router.post('/', async (req, res, next) => {
    try {
        const employee = new EmployeeDetails(req.body);
        const result = await employee.save();
        res.send(result);
    } catch (error) {
        res.send(error.message);
    }
});

// Creating a New Employee Details
router.get('/', async(req, res, next) => {
    const id = req.params.id;
    try{
        const employee = await EmployeeDetails.find({}, {__v: 0});
        res.send(employee);
    }catch (error) {
        res.send(error.message);
    }
});

// Update Employee Details
router.patch('/:id', async (req, res, next) => {
    try{
        const id = req.params.id;
        const update = req.body
        const result = await EmployeeDetails.findByIdAndUpdate(id, update);
        res.send(result)
    }catch (error) {
        res.send(error.message);
    }
});

// Delete an Employee
router.delete('/:id',async (req, res, next) => {
    const id = req.params.id;
    try{
        const employee = await EmployeeDetails.findByIdAndDelete(id);
        res.send(employee);
    }catch (error) {
        res.send(error.message);
    }
});


module.exports = router;