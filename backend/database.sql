CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE DATABASE jwtdb;

CREATE TABLE users(
  user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_name TEXT NOT NULL UNIQUE,
  user_email TEXT NOT NULL UNIQUE,
  user_password TEXT NOT NULL UNIQUE,
  user_birthdate DATE NOT NULL,
  user_country TEXT NOT NULL,
  user_isagreed BOOLEAN NOT NULL
);

SELECT * FROM users;

INSERT INTO users (user_name,user_email,user_password, user_birthdate, user_country, user_isagreed) VALUES ('Bob','petro@petro.com','petro', '1996-12-02', 'ukraine', TRUE);


--psql -U postgres
--\c jwtdb
--\dt
--heroku pg:psql
