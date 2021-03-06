var db = require('./../modules/mysql-connect');

exports.GetAllRooms = function(callback)
{

	db.query("SELECT * FROM rooms WHERE 1",  function(err, result, fields){
		if (err) throw err;
		if (result.length){
			callback({
				status: true,
				message: "Success",
        data: result
			});
		}
    else {
      callback({
				status: false,
				message: "Invalid Account"
			});
    }
	})
}

exports.GetAllRoomsUser = function(callback)
{

	db.query("SELECT * FROM rooms, checked_room WHERE checked_room.room_id != rooms.room_id",  function(err, result, fields){
		if (err) throw err;
		if (result.length){
			callback({
				status: true,
				message: "Success",
        data: result
			});
		}
    else {
      callback({
				status: false,
				message: "Invalid Account"
			});
    }
	})
}



exports.GetRoomsByIdUser = function(cat_id, callback)
{
	db.query("SELECT rooms.*, categories.name as category_name FROM rooms LEFT JOIN categories ON categories.category_id = rooms.category_id LEFT JOIN checked_room ON checked_room.room_id = rooms.room_id WHERE checked_room.room_id IS NULL AND rooms.category_id = ?",cat_id,  function(err, result, fields){
		if (err) throw err;
		if (result.length){
			callback({
				status: true,
				message: "Success",
        data: result
			});
		}
    else {
      callback({
				status: false,
				message: "Invalid Account"
			});
    }
	})
}

exports.GetRoomsByUserID = function(user_id, callback)
{
	db.query("SELECT rooms.*, categories.name as category_name FROM rooms LEFT JOIN categories ON categories.category_id = rooms.category_id LEFT JOIN checked_room ON checked_room.room_id = rooms.room_id WHERE checked_room.user_id = ?",user_id,  function(err, result, fields){
		if (err) throw err;
		if (result.length){
			callback({
				status: true,
				message: "Success",
        data: result
			});
		}
    else {
      callback({
				status: false,
				message: "Invalid Account"
			});
    }
	})
}

exports.GetRoomsById = function(cat_id, callback)
{
	db.query("SELECT rooms.*, categories.name as 	category_name FROM rooms LEFT JOIN categories ON 	categories.category_id = rooms.category_id WHERE rooms.category_id = ?",cat_id,  function(err, result, fields){
		if (err) throw err;
		if (result.length){
			callback({
				status: true,
				message: "Success",
        data: result
			});
		}
    else {
      callback({
				status: false,
				message: "Invalid Account"
			});
    }
	})
}

exports.GetAllCategory = function(callback)
{

	db.query("SELECT * FROM categories WHERE 1",  function(err, result, fields){
		if (err) throw err;
		if (result.length){
			callback({
				status: true,
				message: "Success",
        data: result
			});
		}
    else {
      callback({
				status: false,
				message: "Invalid Account"
			});
    }
	})
}

exports.AddNewRoom = function(newData, callback)
{

  db.query('INSERT INTO rooms SET ?', newData, function(err, result, data) {
        if (err) throw err;
        if (result.affectedRows) {
          callback({status: true});
        }
    });
}

exports.BookRoom = function(newData, callback)
{

  db.query('INSERT INTO checked_room SET ?', newData, function(err, result, data) {
        if (err) throw err;
        if (result.affectedRows) {
          callback({status: true});
        }
    });
}

exports.DeleteRoomsById = function(room_id, callback)
{

  db.query('DELETE FROM rooms WHERE room_id = ?', room_id, function(err, result, data) {
        if (err) throw err;
        if (result.affectedRows) {
          callback({status: true});
        }
        else {
          callback({status: false});
        }
    });
}
