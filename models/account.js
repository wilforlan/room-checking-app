
/*
	ESTABLISH DATABASE CONNECTION
*/

var db = require('./../modules/mysql-connect');

exports.manualLogin = function(username, pass, callback)
{

	db.query("SELECT * FROM users WHERE username = ? AND password = ?", [username, pass] , function(err, result, fields){
		if (err) throw err;
		if (result.length){
			callback({
				status: true,
				message: "Success",
        data: result[0]
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
