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


    static guardarPartida(iduser, estado,tiempo, dificultad, tipoTablero, callback){
        console.log('>>>>>> ' + iduser + '  ' +  estado + ' ' + tiempo + ' ' + dificultad + ' ' + tipoTablero);
        
        
        db.query('insert into log_partidas (id_usr, login, estado_partida, tiempo_jugado, dificultad,tipo_tablero,fin_partida,puntuacion) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',[iduser,'si', estado, tiempo, dificultad,tipoTablero,1,10],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }

    static getIdUsuario(username, callback){
        console.log('>>>>>> ' + username);
        db.query('select users."Id" from users where username = $1',[username],function(err,resp){
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }

   


}
module.exports = Users;