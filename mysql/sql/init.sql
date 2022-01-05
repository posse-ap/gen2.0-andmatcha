DROP DATABASE IF EXISTS quiz;

CREATE DATABASE quiz;

USE quiz;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` TEXT NOT NULL
);

INSERT INTO
    big_questions (`name`)
VALUES
    ('ガチで東京の人しか解けない！#東京の難読地名クイズ'),
    ('広島県民なら解けて当然？ #広島県の難読地名クイズ');

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `big_question_id` INT NOT NULL,
    `question_id` INT NOT NULL,
    `image` VARCHAR(225) NOT NULL
);

INSERT INTO
    questions (`big_question_id`, `question_id`, `image`)
VALUES
    (1, 1, 'tokyo1.png'),
    (1, 2, 'tokyo2.png'),
    (1, 3, 'tokyo3.png'),
    (1, 4, 'tokyo4.png'),
    (1, 5, 'tokyo5.png'),
    (1, 6, 'tokyo6.png'),
    (1, 7, 'tokyo7.png'),
    (1, 8, 'tokyo8.png'),
    (1, 9, 'tokyo9.png'),
    (1, 10, 'tokyo10.png'),
    (2, 1, 'hiroshima1.png'),
    (2, 2, 'hiroshima2.png'),
    (2, 3, 'hiroshima3.png'),
    (2, 4, 'hiroshima4.png'),
    (2, 5, 'hiroshima5.png'),
    (2, 6, 'hiroshima6.png'),
    (2, 7, 'hiroshima7.png'),
    (2, 8, 'hiroshima8.png'),
    (2, 9, 'hiroshima9.png'),
    (2, 10, 'hiroshima10.png');

DROP TABLE IF EXISTS choices;

CREATE TABLE choices (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `big_question_id` INT NOT NULL,
    `question_id` INT NOT NULL,
    `choice_id` INT NOT NULL,
    `name` VARCHAR(225) NOT NULL,
    `valid` BOOL NOT NULL
);

INSERT INTO
    choices (`big_question_id`, `question_id`, `choice_id`, `name`, `valid`)
VALUES
    (1, 1, 1, 'たかなわ', 1),
    (1, 1, 2, 'たかわ', 0),
    (1, 1, 3, 'こうわ', 0),
    (1, 2, 1, 'かめいど', 1),
    (1, 2, 2, 'かめと', 0),
    (1, 2, 3, 'かめど', 0),
    (1, 3, 1, 'こうじまち', 1),
    (1, 3, 2, 'かゆまち', 0),
    (1, 3, 3, 'おかとまち', 0),
    (1, 4, 1, 'おなりもん', 1),
    (1, 4, 2, 'おかどもん', 0),
    (1, 4, 3, 'ごせいもん', 0),
    (1, 5, 1, 'とどろき', 1),
    (1, 5, 2, 'たたりき', 0),
    (1, 5, 3, 'たたら', 0),
    (1, 6, 1, 'しゃくじい', 1),
    (1, 6, 2, 'せきこうい', 0),
    (1, 6, 3, 'いじい', 0),
    (1, 7, 1, 'ぞうしき', 1),
    (1, 7, 2, 'ざっしょく', 0),
    (1, 7, 3, 'ざっしき', 0),
    (1, 8, 1, 'おかちまち', 1),
    (1, 8, 2, 'みとちょう', 0),
    (1, 8, 3, 'ごしろちょう', 0),
    (1, 9, 1, 'ししぼね', 1),
    (1, 9, 2, 'ろっこつ', 0),
    (1, 9, 3, 'しこね', 0),
    (1, 10, 1, 'こぐれ', 1),
    (1, 10, 2, 'こばく', 0),
    (1, 10, 3, 'こしゃく', 0),
    (2, 1, 1, 'むかいなだ', 1),
    (2, 1, 2, 'むこうひら', 0),
    (2, 1, 3, 'むきひら', 0),
    (2, 2, 1, 'みつぎ', 1),
    (2, 2, 2, 'みよし', 0),
    (2, 2, 3, 'おしらべ', 0),
    (2, 3, 1, 'かなやま', 1),
    (2, 3, 2, 'ぎんざん', 0),
    (2, 3, 3, 'きやま', 0),
    (2, 4, 1, 'とよひ', 1),
    (2, 4, 2, 'としか', 0),
    (2, 4, 3, 'とよか', 0),
    (2, 5, 1, 'いしぐろ', 1),
    (2, 5, 2, 'しゃくぜ', 0),
    (2, 5, 3, 'いしあぜ', 0),
    (2, 6, 1, 'みよし', 1),
    (2, 6, 2, 'みつぎ', 0),
    (2, 6, 3, 'みかた', 0),
    (2, 7, 1, 'うずい', 1),
    (2, 7, 2, 'くもおり', 0),
    (2, 7, 3, 'もみち', 0),
    (2, 8, 1, 'すもも', 1),
    (2, 8, 2, 'でこぽん', 0),
    (2, 8, 3, 'ぽんかん', 0),
    (2, 9, 1, 'おおちごとうげ', 1),
    (2, 9, 2, 'おおちごえとうげ', 0),
    (2, 9, 3, 'おうちごとうげ', 0),
    (2, 10, 1, 'よおろほよばら', 1),
    (2, 10, 2, 'てっぽよばら', 0),
    (2, 10, 3, 'ていぼよはら', 0);