
/*
	ESTABLISH DATABASE CONNECTION
*/

var db = require('./../modules/mysql-connect');

exports.manualLogin = function(email, pass, callback)
{

	db.query("SELECT * FROM users WHERE email = ? AND password = ?", [email, pass] , function(err, result, fields){
		if (err) throw err;
		if (result.length){
			callback({
				status: true,
				message: "Success"
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
