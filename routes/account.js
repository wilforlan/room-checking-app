var express = require('express');
var router = express.Router();
var AM = require('./../models/account');


router.use(function(req, res, next){
  if (req.cookies.user == undefined || req.cookies.pass == undefined){
    res.json({
      status: false,
      message: 'Please Login First'
    });
  }
  else {
    next();
  }
})

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
