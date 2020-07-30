CREATE DATABASE landmark;

-- \c landmark;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  username text
);

CREATE TABLE landmarks (
  id SERIAL PRIMARY KEY,
  user_id INTEGER,
  note TEXT,
  lat DECIMAL,
  lng DECIMAL
);