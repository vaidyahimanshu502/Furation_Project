const express = require('express');
const router = express.Router();

router.use('/user', require('./api/user'));
router.use('/api', require('./api/item'))

module.exports = router;