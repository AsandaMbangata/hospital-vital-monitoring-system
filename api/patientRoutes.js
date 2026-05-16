const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Fetch all patients" });
});

router.post('/', (req, res) => {
    res.json({ message: "Create patient" });
});

router.put('/:id', (req, res) => {
    res.json({ message: `Update patient ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
    res.json({ message: `Delete patient ${req.params.id}` });
});

module.exports = router;
