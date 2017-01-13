var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '',
  //password : 'baamp123',
  database : 'baamp',
  // socketPath:'/Applications/MAMP/tmp/mysql/mysql.sock'
})
connection.connect(function(err){
  if (err) {
  	console.log('Error is ',err);
    throw err;
  }
  console.log('MySQL Connection Started. Thread: %s', connection.threadId);
});

module.exports = connection;
