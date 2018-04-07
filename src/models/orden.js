mysql = require('mysql');
connection = require('./csql')

let userModel = {};

userModel.getOrden= (userData,callback) =>{
	if (connection) {
		connection.query("Select * from orden where id_cliente ="+userData.idUsuario,
		(err,rows)=>{
			if (rows) {
				callback(null,rows);
			}else{
				callback(null, {
		          "status": false
		        });
			}
		});
		}else{
			callback(null, {
		          "msg": "bad things"
		        });
		}
	}
module.exports = userModel;