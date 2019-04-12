create table Users(
	id serial NOT NULL,
	username character VARYING(10) NOT NULL,
	email character VARYING(128) NOT NULL,
	passwd character VARYING(256) NOT NULL,
	age NUMERIC (3) NOT NULL,
	avatar character VARYING(32) NOT NULL,
	primary key(id)
)