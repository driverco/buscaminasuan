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
        //console.log('Dentro de la consulta Auth >>>>> ' + userName);
        db.query('select userName, email, age, avatar from users where userName = $1 and passwd = $2', [userName, passwd],function(err,resp){
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

    static getPuntajes(iduser, callback){
        console.log('Dentro de la consulta SQL >>>>> ');
        db.query('select id_user,puntuacion,tiempo_jugado from resumen_usr where id_usr = $1 order by puntuacion desc ', [iduser],function(err,resp){
    
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }
}
module.exports = Users;