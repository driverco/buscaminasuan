const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

var db = require("./database");

const ENV = process.env.NODE_ENV;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/users', require('./api/users'));
app.use('/api/stats', require('./api/stats'));


const crearUsuariosSQL = 'CREATE TABLE IF NOT EXISTS "users" ("Id" serial NOT NULL,  "username" character varying NOT NULL,  "email" character varying NOT NULL,  "passwd" character varying(256) NOT NULL,  "age" numeric NOT NULL,  "avatar" character varying(32) NOT NULL,  CONSTRAINT "users_pkey" PRIMARY KEY ("Id"))WITH (  OIDS=TRUE);ALTER TABLE "users" OWNER TO mmghqjqteuawyt;';
const crearlogPartidasSQL = 'CREATE TABLE IF NOT EXISTS "log_partidas" ("Id_log" serial NOT NULL, id_usr serial NOT NULL, "login" character varying(20) NOT NULL, estado_partida integer NOT NULL, tiempo_jugado bigint, dificultad integer NOT NULL, tipo_tablero integer, fecha date NOT NULL, fin_partida integer NOT NULL DEFAULT 0, "puntuacion" bigint NOT NULL, CONSTRAINT "Log_partidas_pkey" PRIMARY KEY ("Id_log"), CONSTRAINT "log_partidas_id_usr_fkey" FOREIGN KEY (id_usr) REFERENCES "users" ("Id") MATCH FULL  ON UPDATE NO ACTION ON DELETE NO ACTION) WITH (OIDS=TRUE);ALTER TABLE "log_partidas" OWNER TO mmghqjqteuawyt;';


if (ENV === 'production') {
    console.log("Starting server in Production Mode");
    app.use(express.static(path.join(__dirname, '../client/build')));
    app.use((req, res) => {
       res.sendFile(path.join(__dirname, '../client/build/index.html'));
    });
}

app.listen(PORT, () => {
    console.log("Buscaminas UAN");
    console.log("---------------------------------");
    console.log("Server listening on port "+PORT+"!");
    console.log("powered by Driverco");
    console.log("Starting Mode:"+process.env.NODE_ENV);
  });


db.query(crearUsuariosSQL, (err, res) =>{
    if (err.error)
        return console.log(err.error);
    console.log('Tabla users procesada');
});

db.query(crearlogPartidasSQL , (err, res) =>{
    if (err.error)
        return console.log(err.error);
    else
        console.log('Tabla logs_partida procesada');
    });



db.query('select * from now()', (err, res) =>{
    if (err.error)
        return console.log(err.error);
    else
        console.log("PostgreSQL connected:"+res[0].now);

});



module.exports = app;