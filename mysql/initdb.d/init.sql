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

DROP TABLE IF EXISTS studied_contents;

CREATE TABLE studied_contents (
  `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `study_record_id` INT NOT NULL,
  `content_id` INT
);

-- ダミーデータ 15,27日は0時間
INSERT INTO
  study_records (`date`, `hours`)
VALUES
  ('2022-01-01', 8),
  ('2022-01-02', 6),
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
  (2, 2),
  (2, 3),
  (2, 1),
  (3, 4),
  (4, 8),
  (4, 2),
  (5, 1),
  (6, 3),
  (7, 7),
  (7, 4),
  (8, 6),
  (9, 6),
  (9, 1),
  (10, 6),
  (10, 2),
  (11, 5),
  (12, 3),
  (13, 3),
  (14, 4),
  (15, 7),
  (16, 3),
  (17, 2),
  (18, 6),
  (19, 4),
  (20, 3),
  (21, 2),
  (22, 5),
  (23, 5),
  (24, 1),
  (25, 3),
  (26, 8),
  (27, 3),
  (28, 3),
  (29, 1),
  (29, 2);
INSERT INTO
  studied_contents (`study_record_id`, `content_id`)
VALUES
  (1, 3),
  (1, 1),
  (2, 1),
  (2, 2),
  (2, 3),
  (3, 1),
  (4, 2),
  (5, 2),
  (6, 1),
  (7, 2),
  (8, 1),
  (9, 1),
  (10, 3),
  (11, 1),
  (12, 2),
  (13, 3),
  (14, 3),
  (15, 1),
  (16, 3),
  (17, 2),
  (18, 2),
  (19, 3),
  (20, 2),
  (21, 1),
  (22, 3),
  (23, 1),
  (24, 1),
  (25, 3),
  (26, 2),
  (27, 2),
  (28, 3),
  (28, 2),
  (29, 1);
