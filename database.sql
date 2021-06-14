CREATE TABLE usuarios(
name TEXT,
email TEXT,
password TEXT,
);
--
-- CREATE TABLE movies(
--   id SERIAL PRIMARY KEY,
--   image BYTEA,
--   title TEXT,
--   creation DATE,
--   qualification INTEGER
-- )
--
-- CREATE TABLE character(
--   image BYTEA,
--   name TEXT,
--   age INTEGER,
--   weight FLOAT,
--   history TEXT,
--   moviesId_char INTEGER REFERENCES movies(id),
-- )
--
-- CREATE TABLE gender(
--   name TEXT,
--   image BYTEA,
--   moviesId_gen INTEGER REFERENCES movies(id),
-- )
