const db = require ('../database');

class Users {
    static retrieveAll(callback){
        db.query('select  id, userName, email, age, avatar,( select coalesce(sum (score), 0) from Games where user_id = users.id) as score from users',function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
    static retrieveUser(userName, callback){
        db.query('select id, userName, email, age, avatar,( select coalesce(sum (score), 0) from Games where user_id = users.id) as score  from users where userName = $1', [userName],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
    static authUser(userName, passwd, callback){
        db.query('select id, userName, email, age, avatar, ( select coalesce(sum (score), 0) from Games where user_id = users.id) as score from users where userName = $1 and passwd = $2', [userName, passwd],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
    static insert(userName, email, passwd, age, avatar, callback){
        db.query('insert into users (username, email, passwd, age, avatar) VALUES ($1,$2,$3,$4,$5)',[userName, email, passwd, age, avatar],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
}
module.exports = Users;