DROP DATABASE alcohol;
CREATE DATABASE alcohol;

USE alcohol;

CREATE TABLE drinks (
    id int AUTO_INCREMENT PRIMARY KEY,
    drink varchar(40) NOT NULL,
    alcContent int NOT NULL
);