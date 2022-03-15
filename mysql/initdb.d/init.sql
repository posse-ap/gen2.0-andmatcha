DROP DATABASE IF EXISTS webapp;

CREATE DATABASE webapp;

USE webapp;

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

DROP TABLE IF EXISTS study_records;

CREATE TABLE study_records (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `date` DATE NOT NULL,
  `hours` INT NOT NULL
);

DROP TABLE IF EXISTS studied_langs;

CREATE TABLE studied_langs (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `study_record_id` INT NOT NULL,
  `lang_id` INT
);

-- ダミーデータ 15,27日は0時間
INSERT INTO
  study_records (`date`, `hours`)
VALUES
  ('2022-01-01', 6),
  ('2022-01-02', 2),
  ('2022-01-03', 1),
  ('2022-01-04', 3),
  ('2022-01-05', 1),
  ('2022-01-06', 2),
  ('2022-01-07', 4),
  ('2022-01-08', 3),
  ('2022-01-09', 6),
  ('2022-01-10', 8),
  ('2022-01-11', 6),
  ('2022-01-12', 5),
  ('2022-01-13', 1),
  ('2022-01-14', 2),
  ('2022-01-16', 1),
  ('2022-01-17', 4),
  ('2022-01-18', 3),
  ('2022-01-19', 2),
  ('2022-01-20', 1),
  ('2022-01-21', 2),
  ('2022-01-22', 3),
  ('2022-01-23', 6),
  ('2022-01-24', 4),
  ('2022-01-25', 3),
  ('2022-01-26', 1),
  ('2022-01-28', 6),
  ('2022-01-29', 3),
  ('2022-01-30', 4),
  ('2022-01-31', 5);

INSERT INTO
  studied_langs (`study_record_id`, `lang_id`)
VALUES
  (1, 3),
  (1, 5),
  (2, 1);

DROP TABLE IF EXISTS studied_contents;

CREATE TABLE studied_contents (
  `id ` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `study_record_id` INT NOT NULL,
  `content_id` INT
);

INSERT INTO
  studied_contents (`study_record_id`, `content_id`)
VALUES
  (1, 3),
  (1, 1),
  (2, 3);
