const express = require('express');
// const cors = require('cors');
const router = express.Router();

// router.use(cors());

router.get('/', (req, res) => {
    res.send('yo')
});
router.post('/', (req, res) => {
    console.log(req.body);
    res.send('ho')
});

module.exports = router;