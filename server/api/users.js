var express = require ('express');
var Users = require('../models/users');


var router  = express.Router();


router.get('/', function(req,res){
    Users.retrieveAll(function(err, users){
        if (err)
            return res.json(err);
        return res.json(users);
    })
});

router.get('/:userName', function(req,res){
    var userName = req.params.userName;
    Users.retrieveUser(userName,function(err, user){
        if (err)
            return res.json(err);
        return res.json(user);
    })
});



router.post('/', function(req,res){
    var userName = req.body.userName;
    var email = req.body.email;
    var passwd = req.body.password;
    var age = req.body.age;
    var avatar = req.body.avatar;
    console.log("userName:"+userName);
    console.log("email:"+email);
    console.log("passwd:"+passwd);
    console.log("age:"+age);
    console.log("avatar:"+avatar);

    Users.insert(userName, email, passwd, age, avatar,  function(err, users){
        if (err)
            return res.json(err);
        return res.json(users);
    })
});
router.post('/Auth', function(req,res){
    var userName = req.body.userName;
    var passwd = req.body.password;

    Users.authUser(userName, passwd,  function(err, user){
        if (err)
            return res.json(err);
        return res.json(user);
    })
});

router.post('/guardarPartida', function(req,res){
    var iduser = req.body.iduser;
    var estado = req.body.estado;
    var tiempo = req.body.tiempo;
    var dificultad = req.body.dificultad;
    var tipoTablero = req.body.tipoTablero;

    Users.guardarPartida(iduser, estado,tiempo, dificultad, tipoTablero,  function(err, user){
        if (err)
            return res.json(err);
        return res.json(user);
    })
});







module.exports = router;
