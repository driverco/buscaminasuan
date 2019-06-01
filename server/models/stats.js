const db = require ('../database');

class Stats {
    
       

    static getPuntajes(iduser, callback){
          db.query('select us."Id",	us.username,pt.tiempo_jugado,pt.dificultad,	pt.tipo_tablero,puntuacion from	users us join log_partidas pt on(us."Id" = pt.id_usr) where username = $1 order by puntuacion desc ', [iduser],function(err,resp){
   
            if (err.error)
                return callback(err);
            callback (resp);
        });
    }

    static getPartidas(iduser, callback){
        db.query('select us."Id",us.username,pt.puntuacion,pt.tiempo_jugado from users us join log_partidas pt on(us."Id" = pt.id_usr) where username = $1 order by puntuacion desc ', [iduser],function(err,resp){
 
          if (err.error)
              return callback(err);
          callback (resp);
      });
  }

  static getJugadores(iduser, callback){
    db.query('select us."Id", us.username,sum(pt.puntuacion) as total from users us join log_partidas pt on(us."Id" = pt.id_usr)  group by us."Id", us.username order by sum(pt.puntuacion) desc ',function(err,resp){
      if (err.error)
          return callback(err);
      callback (resp);
  });
}
  

}
module.exports = Stats;