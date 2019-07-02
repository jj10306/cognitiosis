const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log(1);
    res.send('yo')
});
router.post('/', (req, res) => {
    debugger;
    console.log(req.body);
    res.send('ho')
});

module.exports = router;