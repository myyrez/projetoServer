CREATE DATABASE todo_db;

-- \c (entrar) na database
CREATE TABLE todo(
    id_todo SERIAL primary key
    , descricao VARCHAR(250) 
);