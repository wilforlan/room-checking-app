var express = require('express');
var router = express.Router();
var AM = require('./../models/account');
var GM = require('./../models/general');


router.use(function(req, res, next){
  if (typeof req.session.user == 'undefined') {
    res.redirect('/account/login');
  }
  else {
    if (req.session.user.role === 0) {
    next();
    }
    else {
      res.redirect('/account/login');
    }
  }
})

router.get('/home', function(req, res, next) {
  GM.GetAllCategory(function(category){
      res.render('user/dashboard',category);
  })
});

router.get('/my-rooms', function(req, res, next) {
  GM.GetRoomsByUserID(req.session.user.user_id, function(category){
      res.render('user/my_rooms',category);
  })
});


router.get('/book-rooms/:room_id', function(req, res) {
  GM.BookRoom({room_id: req.params.room_id, user_id: req.session.user.user_id}, function(data){
    res.send({status: true});
  })
});

router.get('/get-rooms/:category_id', function(req, res) {
  GM.GetRoomsByIdUser(req.params.category_id, function(data){
    res.render('user/get_rooms',data);
  })
});







module.exports = router;
