const db = require ('../database');

class Users {
    static retrieveAll(callback){
        db.query('select  userName, email, age, avatar from users',function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
    static retrieveUser(userName, callback){
        db.query('select userName, email, age, avatar from users where userName = $1', [userName],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
    static authUser(userName, passwd, callback){
        db.query('select userName, email, age, avatar from users where userName = $1 and password = $2', [userName, passwd],function(err,resp){
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