User = require('../models/orden');


module.exports = function(app){
	app.post('/ordenes',(req,res) =>{
		var userData = {
	      idUsuario: req.body.idUsuario
	    };
		User.getOrden(userData,(err,data) =>{
			res.json(data);
		});
	});
}