DROP DATABASE IF EXISTS webapp;

CREATE DATABASE webapp;

USE webapp;

DROP TABLE IF EXISTS study_records;

CREATE TABLE study_records (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `date` DATE NOT NULL,
  `hours` INT NOT NULL,
  `lang_id` INT NOT NULL,
  `content_id` INT NOT NULL
);

INSERT INTO
  study_records (`date`, `hours`, `lang_id`, `content_id`)
VALUES
  ('2022/01/14', 10, 6, 3);
  ('2022/01/14', 4, 3, 3);
  ('2022/01/25', 2, 3, 1);

DROP TABLE IF EXISTS langs;

CREATE TABLE langs (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(225) NOT NULL
);

INSERT INTO
  langs (`name`)
VALUES
  ('JavaScript'),
  ('CSS'),
  ('PHP'),
  ('HTML'),
  ('Laravel'),
  ('SQL'),
  ('SHELL'),
  ('情報システム基礎知識(その他)');

DROP TABLE IF EXISTS contents;

CREATE TABLE contents (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `name` VARCHAR(225) NOT NULL
);

INSERT INTO
  contents (`name`)
VALUES
  ('ドットインストール'),
  ('N予備校'),
  ('POSSE課題');
