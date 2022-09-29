const express = require('express');
const router = express.Router();

const sitesController = require('../app/controllers/SitesController'); //Khởi tạo Controller

router.use('/search', sitesController.search);
//router.use('/home',newsController.show);  //Định tuyến  route
router.use('/', sitesController.index); //Định tuyến  route

module.exports = router;
