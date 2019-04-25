//require express
//Allows to set up middlewares to respond to HTTP Requests,
// helps to manage everythings,from routes, to handeling requests and views
var express = require('express');

//instance of app
var myapp = express();
var path = require('path'); //provide path of the directory

//body-parser simplifies the request i.e. raw request,body and headers
var bodyParser = require('body-parser');
var multer = require('multer');
//multer is middleware for handling multipart/form-data , which is primarily used for uploading files

myapp.use(bodyParser.urlencoded({extended:true}))
myapp.use(bodyParser.json());
myapp.use(express.static(
	path.join(__dirname,'resources')
	));

myapp.set('views',__dirname+'/views');
myapp.set('view engine','ejs');

var mystorage = multer.diskStorage({
	destination : function(req,file,cb){
		cb(null,'resources/uploads') //location for image upload
	},
	filename : function(req,file,cb){
		cb(null,'userimage') //name of image
	}
})
var upload = multer({storage: mystorage})

// myapp.get('/admin/registration',function(req,res){
// 	res.render('backend/registration');
// })

myapp.post('/admin/registration',upload.single('usrphoto'),function(req,res,next){
	console.log('test');
	console.log(req.file);
})

  myapp.get('/admin/registration',function(req,res)
 {
 	res.render('backend/registration',{message:''});
 	res.send({"test": "sdadf"})
 })

   myapp.get('/admin/userpage',function(req,res)
 {
 	res.render('backend/userpage',{message:''});

 })

 myapp.listen(process.env.PORT);