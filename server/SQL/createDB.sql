create table Users(
	id serial NOT NULL,
	username character VARYING(10) NOT NULL,
	email character VARYING(128) NOT NULL,
	passwd character VARYING(256) NOT NULL,
	age NUMERIC (3) NOT NULL,
	avatar character VARYING(32) NOT NULL,
	primary key(id)
)
CREATE DATABASE buscaminas
  WITH OWNER = postgres
       ENCODING = 'UTF8'
       TABLESPACE = pg_default
       LC_COLLATE = 'Spanish_Colombia.1252'
       LC_CTYPE = 'Spanish_Colombia.1252'
       CONNECTION LIMIT = -1; 

CREATE TABLE "Users"
(
  "Id" serial NOT NULL,
  username character varying NOT NULL,
  email character varying NOT NULL,
  passwd character varying(256) NOT NULL,
  age numeric NOT NULL,
  avatar character varying(32) NOT NULL,
  CONSTRAINT "Users_pkey" PRIMARY KEY ("Id")
)
WITH (
  OIDS=TRUE
);
ALTER TABLE "Users" OWNER TO postgres;

CREATE TABLE "Log_partidas"
(
  "Id_log" serial NOT NULL,
  id_usr serial NOT NULL,
  "login" character varying(20) NOT NULL,
  estado_partida integer NOT NULL,
  tiempo_jugado bigint,
  dificultad integer NOT NULL,
  tipo_tablero integer,
  fecha date NOT NULL,
  fin_partida integer NOT NULL DEFAULT 0,
  CONSTRAINT "Log_partidas_pkey" PRIMARY KEY ("Id_log"),
  CONSTRAINT "Log_partidas_id_usr_fkey" FOREIGN KEY (id_usr)
      REFERENCES "Users" ("Id") MATCH FULL
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=TRUE
);
ALTER TABLE "Log_partidas" OWNER TO postgres;


CREATE TABLE resumen_usr
(
  "Id_usr" integer NOT NULL,
  "login" character varying(20) NOT NULL,
  puntuacion bigint NOT NULL,
  tiempo_jugado bigint NOT NULL,
  CONSTRAINT "resumen_usr_Id_usr_fkey" FOREIGN KEY ("Id_usr")
      REFERENCES "Users" ("Id") MATCH SIMPLE
      ON UPDATE NO ACTION ON DELETE NO ACTION
)
WITH (
  OIDS=TRUE
);
ALTER TABLE resumen_usr OWNER TO postgres;

CREATE INDEX fki_
  ON resumen_usr
  USING btree
  ("Id_usr");

  /*
*
*
CONSULTAS ESTADISTICAS
*
*
*/
--
select *  from resumen_usr order by puntuacion desc;
--
select count (*) from Log_partidas group by 1;

/*
0 = abandonar partida
1 = ganara partida
2 = perder partida
*/
--
select tiempo_jugado from resumen_usr where login = 'ABC';
--
select avg(tiempo_jugado) from Log_partidas where dificultad = 1 AND login = 'ABC'
/*
1 = facil
2 = medio
3 = dificil
*/
--
select avg(tiempo_jugado) from Log_partidas where tipo_tablero = 1 AND login = 'ABC'
/*
1 = pequeño
2 = mediano
3 = grande
*/
--
