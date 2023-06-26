const express = require('express');
const router = express.Router();

const formDataController = require('../Controllers/formDataController');

//處理表單提交路由
router.post('/api/submit-form', formDataController.submitForm);

module.exports = router;
