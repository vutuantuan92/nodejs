const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController'); //Khởi tạo Controller

router.use('/:slug', newsController.show);
//router.use('/home',newsController.show);  //Định tuyến  route
router.use('/', newsController.index); //Định tuyến  route

module.exports = router;
