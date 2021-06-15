CREATE TABLE usuarios(
id SERIAL PRIMARY KEY,
name TEXT,
email TEXT,
password TEXT,
);

CREATE TABLE movies(
  id SERIAL PRIMARY KEY,
  image longblob,
  title varchar(200),
  creation date,
  qualification integer
  asoc_character text REFERENCES character(name)
)


create table character(
  image longblob,
  name varchar(200),
  age integer,
  weight float,
  history text,
);

asoc_movies INTEGER REFERENCES movies(title),


-- {
--     "image":"hola.jpg",
--     "name":"alan",
--     "age": 20,
--     "weight": 55,
--     "history":"lorem ipsum",
--     "asoc_movie":"Saving private Ryan"
-- }

-- CREATE TABLE gender(
--   name TEXT,
--   image BYTEA,
--   asoc_movies INTEGER REFERENCES movies(id),
-- )
