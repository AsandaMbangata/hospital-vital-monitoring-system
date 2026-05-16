const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: "Fetch all vital signs" });
});

router.post('/', (req, res) => {
    res.json({ message: "Add vital sign" });
});

module.exports = router;
