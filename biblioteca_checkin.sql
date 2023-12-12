create database biblioteca_checkin;
use biblioteca_checkin;

create table livro(
    id int AUTO_INCREMENT PRIMARY KEY,
    titulo varchar(80) not null,
    ano int not null,
    autor varchar(120) not null,
    editora varchar(120) not null,
    isbn int
);

DROP TABLE livro;

select*from livro;

