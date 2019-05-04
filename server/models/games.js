const db = require ('../database');

class Games {
    static retrieveGame(gameId, callback){
        db.query('select id, user_id, status, size, level ,start_time, seconds_played, score  from games where id = $1', [gameId],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
    static insert(userId, size, level, score, callback){
        db.query('insert into games (user_id, status, size, level ,start_time, seconds_played, score) VALUES ($1, 0,$2, $3, current_date, 0, $4) RETURNING id',[userId, size, level, score],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
    /*id             serial                NOT NULL,
	user_id        integer               NOT NULL,
    status         integer               NOT NULL,                                  
    size           character VARYING(10) NOT NULL,
    level          character VARYING(10) NOT NULL,                                  
    start_time     date                  NOT NULL,                                  
    seconds_played integer               NOT NULL,                                  
    score          integer               NOT NULL,
*/
}
module.exports = Games;