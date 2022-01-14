DROP DATABASE IF EXISTS webapp;

CREATE DATABASE webapp;

USE webapp;

DROP TABLE IF EXISTS study_records;

CREATE TABLE study_records (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `date` DATE NOT NULL ,
    `hours` INT NOT NULL UNSIGNED,
    `lang` VARCHAR(225) NOT NULL,
    `content` VARCHAR(225) NOT NULL
);

INSERT INTO
    big_questions (`date`, `hours`, `lang`, `content`)
VALUES
    ('2022/01/14', 10, 'SQL', `POSSE課題`);