const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Fetch all patients" });
});

router.post('/', (req, res) => {
    res.json({ message: "Create patient" });
});

module.exports = router;
