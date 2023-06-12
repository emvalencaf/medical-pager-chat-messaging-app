const express = require('express');

// controller
const { notificate } = require('../../controllers/notifications');

const router = express.Router();

router.post('/notifications', notificate);

module.exports = router;