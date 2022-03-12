DROP DATABASE IF EXISTS quiz;

CREATE DATABASE quiz;

USE quiz;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` TEXT NOT NULL
);

INSERT INTO
    big_questions (`title`)
VALUES
    ('ガチで東京の人しか解けない！#東京の難読地名クイズ'),
    ('広島県民なら解けて当然？ #広島県の難読地名クイズ');

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `big_question_id` INT NOT NULL,
    `image` VARCHAR(225) NOT NULL,
    `comment` VARCHAR(225) NOT NULL
);

INSERT INTO
    questions (`big_question_id`, `image`, `comment`)
VALUES
    (1, 'tokyo1.png', '正解は「たかなわ」です！'),
    (1, 'tokyo2.png', '正解は「かめいど」です！'),
    (1, 'tokyo3.png', '正解は「こうじまち」です！'),
    (1, 'tokyo4.png', '正解は「おなりもん」です！'),
    (1, 'tokyo5.png', '正解は「とどろき」です！'),
    (1, 'tokyo6.png', '正解は「しゃくじい」です！'),
    (1, 'tokyo7.png', '正解は「ぞうしき」です！'),
    (1, 'tokyo8.png', '正解は「おかちまち」です！'),
    (1, 'tokyo9.png', '江戸川区にあります。'),
    (1, 'tokyo10.png', '正解は「こぐれ」です！'),
    (2, 'hiroshima1.png', '広島市南区。'),
    (2, 'hiroshima2.png', '尾道市。'),
    (2, 'hiroshima3.png', '広島市中区'),
    (2, 'hiroshima4.png', '尾道市。'),
    (2, 'hiroshima5.png', '尾道市。'),
    (2, 'hiroshima6.png', '三次市。'),
    (2, 'hiroshima7.png', '三次市。'),
    (2, 'hiroshima8.png', '神石郡神石高原町。'),
    (2, 'hiroshima9.png', '広島市東区。'),
    (2, 'hiroshima10.png', '山県郡北広島町。');

DROP TABLE IF EXISTS choices;

CREATE TABLE choices (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `question_id` INT NOT NULL,
    `name` VARCHAR(225) NOT NULL,
    `valid` BOOL NOT NULL
);

INSERT INTO
    choices (`question_id`, `name`, `valid`)
VALUES
    (1, 'たかなわ', 1),
    (1, 'たかわ', 0),
    (1, 'こうわ', 0),
    (2, 'かめいど', 1),
    (2, 'かめと', 0),
    (2, 'かめど', 0),
    (3, 'こうじまち', 1),
    (3, 'かゆまち', 0),
    (3, 'おかとまち', 0),
    (4, 'おなりもん', 1),
    (4, 'おかどもん', 0),
    (4, 'ごせいもん', 0),
    (5, 'とどろき', 1),
    (5, 'たたりき', 0),
    (5, 'たたら', 0),
    (6, 'しゃくじい', 1),
    (6, 'せきこうい', 0),
    (6, 'いじい', 0),
    (7, 'ぞうしき', 1),
    (7, 'ざっしょく', 0),
    (7, 'ざっしき', 0),
    (8, 'おかちまち', 1),
    (8, 'みとちょう', 0),
    (8, 'ごしろちょう', 0),
    (9, 'ししぼね', 1),
    (9, 'ろっこつ', 0),
    (9, 'しこね', 0),
    (10, 'こぐれ', 1),
    (10, 'こばく', 0),
    (10, 'こしゃく', 0),
    (11, 'むかいなだ', 1),
    (11, 'むこうひら', 0),
    (11, 'むきひら', 0),
    (12, 'みつぎ', 1),
    (12, 'みよし', 0),
    (12, 'おしらべ', 0),
    (13, 'かなやま', 1),
    (13, 'ぎんざん', 0),
    (13, 'きやま', 0),
    (14, 'とよひ', 1),
    (14, 'としか', 0),
    (14, 'とよか', 0),
    (15, 'いしぐろ', 1),
    (15, 'しゃくぜ', 0),
    (15, 'いしあぜ', 0),
    (16, 'みよし', 1),
    (16, 'みつぎ', 0),
    (16, 'みかた', 0),
    (17, 'うずい', 1),
    (17, 'くもおり', 0),
    (17, 'もみち', 0),
    (18, 'すもも', 1),
    (18, 'でこぽん', 0),
    (18, 'ぽんかん', 0),
    (19, 'おおちごとうげ', 1),
    (19, 'おおちごえとうげ', 0),
    (19, 'おうちごとうげ', 0),
    (20, 'よおろほよばら', 1),
    (20, 'てっぽよばら', 0),
    (20, 'ていぼよはら', 0);