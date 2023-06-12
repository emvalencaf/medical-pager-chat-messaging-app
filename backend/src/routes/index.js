const express = require('express');
const router = express();

// auth routes
router.use('/api/auth', require('./auth'));

// notifications routes
router.use('/api/notifications', require('./notifications'));

router.get('/api',(req, res) => {
   res.send('API working!') 
});

module.exports = router;