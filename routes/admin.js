var express = require('express');
var router = express.Router();
var AM = require('./../models/account');
var GM = require('./../models/general');


router.use(function(req, res, next){
  if (typeof req.session.user == 'undefined') {
    res.redirect('/account/login');
  }
  else {
    if (req.session.user.role === 1) {
    next();
    }
    else {
      res.redirect('/account/login');
    }
  }
})

router.get('/home', function(req, res, next) {
  GM.GetAllCategory(function(category){
      res.render('admin/home',category);
  })
});

router.get('/rooms', function(req, res, next) {
  // GM.GetAllCategory(function(data){
    res.render('admin/home');
  // })
});

router.get('/get-rooms/:category_id', function(req, res) {
  GM.GetRoomsById(req.params.category_id, function(data){
    res.render('admin/get_rooms',data);
  })
});

router.get('/add-room', function(req, res) {
  GM.GetAllCategory(function(data){
    res.render('admin/add_rooms',data);
  })
});

router.get('/delete-rooms/:room_id', function(req, res) {
  GM.DeleteRoomsById(req.params.room_id, function(data){
    if (data.status) {
        res.send({status: true});
    }
    else {
        res.send({status: false});
    }
  })
});



router.post('/add-room', function(req, res, next) {
  GM.AddNewRoom({
      name: req.body.room_name,
      category_id: req.body.category_id,
      },
    function(data){
    res.send(data);
  })
});

module.exports = router;
