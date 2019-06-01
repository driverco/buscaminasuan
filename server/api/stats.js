var express = require ('express');
var Stast = require('../models/stats');

var router  = express.Router();


router.get('/', function(req,res){
    return res.send('Nodo raiz!');
});

router.get('/:idUser', function(req,res){
    var pidUser = req.params.idUser;

    Stast.getPuntajes(pidUser,function(err, user){
        if (err)
            return res.json(err);
        return res.json(user);
    })
});

router.get('/puntajes/:idUser', function(req,res){
    
    var pidUser = req.params.idUser;

    Stast.getPuntajes(pidUser,function(err, user){
        if (err)
            return res.json(err);
        return res.json(user);
    })
});

router.get('/partidas/:idUser', function(req,res){
    
    var pidUser = req.params.idUser;
    
    Stast.getPartidas(pidUser,function(err, user){
        if (err)
            return res.json(err);
        return res.json(user);
    })
});

router.get('/jugadores/:idUser', function(req,res){
    
    var pidUser = req.params.idUser;
    
    Stast.getJugadores(pidUser,function(err, user){
        if (err)
            return res.json(err);
        return res.json(user);
    })
});



router.get('/puntos', function(req,res){
    return res.send('Todos los puntos!');
});



module.exports = router;

