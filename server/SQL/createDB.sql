create table Users(
	id       serial                 NOT NULL,
	username character VARYING(10)  NOT NULL,
	email    character VARYING(128) NOT NULL,
	passwd   character VARYING(256) NOT NULL,
	age      NUMERIC (3)            NOT NULL,
	avatar   character VARYING(32)  NOT NULL,
	primary key(id)
)
create table Games(
	id             serial                NOT NULL,
	user_id        integer               NOT NULL,
    status         integer               NOT NULL,                                  
    size           character VARYING(10) NOT NULL,
    level          character VARYING(10) NOT NULL,                                  
    start_time     date                  NOT NULL,                                  
    seconds_played integer               NOT NULL,                                  
    score          integer               NOT NULL,
	primary key(id),
    CONSTRAINT Log_partidas_id_usr_fkey FOREIGN KEY (user_id)
      REFERENCES Users (Id) MATCH FULL
      ON UPDATE NO ACTION ON DELETE NO ACTION
)