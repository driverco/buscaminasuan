var express = require ('express');
var Games = require('../models/games');

var router  = express.Router();

router.get('/:gameId', function(req,res){
    var gameId = req.params.gameId;
    Games.retrieveGame(gameId,function(err, game){
        if (err)
            return res.json(err);
        return res.json(game);
    })
});

router.post('/', function(req,res){
    var userId = req.body.userId;
    var size = req.body.size;
    var level = req.body.level;
    var score = req.body.score;
    console.log("userId:"+userId);
    console.log("size:"+size);
    console.log("level:"+level);
    console.log("score:"+score);

    Games.insert(userId, size, level, score,  function(err, games){
        if (err)
            return res.json(err);
        return res.json(games);
    })
});
/*router.put('/', function(req,res){
    var userName = req.body.userName;
    var passwd = req.body.password;
    console.log("Auth UserName:"+userName);
    console.log("passwd:"+passwd);

    Users.authUser(userName, passwd,  function(err, user){
        if (err)
            return res.json(err);
        return res.json(user);
    })
});*/

module.exports = router;