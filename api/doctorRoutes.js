
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Fetch all doctors" });
});

router.post('/', (req, res) => {
    res.json({ message: "Create doctor" });
});

module.exports = router;