var express = require('express');
var router = express.Router();
var AM = require('./../models/account');
var GM = require('./../models/general');


router.get('/home', function(req, res, next) {
  GM.GetAllCategory(function(category){
    res.render('admin/home',category);

    // GM.GetAllRooms(function(rooms){
    //   // var data = {rooms,category}
    //   res.render('admin/home',rooms);
    // });
  })
});

router.get('/rooms', function(req, res, next) {
  // GM.GetAllCategory(function(data){
    res.render('admin/home');
  // })
});

router.post('/get-rooms', function(req, res, next) {
  GM.GetRoomsById(req.body.category_id, function(data){
    res.render('admin/rooms', data);
  })
});

router.get('/add-rooms', function(req, res, next) {
  // GM.GetRoomsById(req.body.category_id, function(data){
    res.render('admin/rooms');
  // })
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
