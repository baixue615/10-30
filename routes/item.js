var express = require('express');
var router = express.Router();
var mysql      = require('mysql');
var connection = mysql.createPool({//创建连接
  host     : 'localhost',
  user     : 'root',// administrator 电脑中最大的
  password : '123456',
  database:'new'
});
router.get('/list', function(req, res, next) {   
	res.header('Access-Control-Allow-Origin',"*")
	connection.query('SELECT text FROM list', function(err, rows, fields) {
	    res.send(rows)
});
})
// router.post('/list', function(req, res, next){
// 	res.header('Access-Control-Allow-Origin',"*")
// 	var abc=req.body.abc;
//   connection.query('SELECT * FROM list WHERE id='+abc,function(err, rows, fields){
  	
//   	res.send(rows)
//   })

// });
module.exports = router;