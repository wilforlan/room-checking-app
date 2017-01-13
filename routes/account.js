var express = require('express');
var router = express.Router();
var AM = require('./../models/account');
var GM = require('./../models/general');


// router.use(function(req, res, next){
//   if (req.cookies.user == undefined || req.cookies.pass == undefined){
//     res.json({
//       status: false,
//       message: 'Please Login First'
//     });
//   }
//   else {
//     next();
//   }
// })

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('account/login', { title: 'Login' });
});

router.get('/home', function(req, res, next) {
  res.render('user/dashboard', { title: 'Login' });
});

router.get('/rooms', function(req, res, next) {
  GM.GetAllRooms(function(data){
    res.render('test',data);
  })
});

router.get('/categories', function(req, res, next) {
  GM.GetAllCategory(function(data){
    res.render('test',data);
  })
});

module.exports = router;
