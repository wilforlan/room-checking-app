var express = require('express');
var router = express.Router();
var AM = require('./../models/account');
var GM = require('./../models/general');



/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('account/login', { title: 'Login' });
});

// router.post('/login', function(req, res, next) {
//   res.render('account/login', { title: 'Login' });
// });
router.post('/login', function(req, res){
    AM.manualLogin(req.body.username, req.body.password, function(e, o){
      if (e.status) {
        var result = e.data;
        res.cookie('username', result.username, { maxAge: 900000 });
        res.cookie('password', result.password, { maxAge: 900000 });
        res.cookie('name', result.name, { maxAge: 900000 });
        req.session.user = result;
        res.send({status: true, role: result.role});
      }
      else {
        res.send({status: false})
      }
    });
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
