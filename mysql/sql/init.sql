DROP DATABASE IF EXISTS quiz;

CREATE DATABASE quiz;

USE quiz;

DROP TABLE IF EXISTS big_questions;

CREATE TABLE big_questions (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` TEXT NOT NULL,
    `tag` VARCHAR(225) NOT NULL,
    `tag_link` VARCHAR(225) NOT NULL
);

INSERT INTO
    big_questions (`title`, `tag`, `tag_link`)
VALUES
    ('ガチで東京の人しか解けない！#東京の難読地名クイズ', '東京', 'https://kuizy.net/tag/tokyo'),
    ('広島県民なら解けて当然？ #広島県の難読地名クイズ', '広島', 'https://kuizy.net/tag/hiroshima');

DROP TABLE IF EXISTS questions;

CREATE TABLE questions (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `big_question_id` INT NOT NULL,
    `quiz_number` INT NOT NULL,
    `image` VARCHAR(225) NOT NULL,
    `text` VARCHAR(225) NOT NULL
);

INSERT INTO
    questions (`big_question_id`, `quiz_number`, `image`, `text`)
VALUES
    (1, 1, 'tokyo1.png', '正解は「たかなわ」です！'),
    (1, 2, 'tokyo2.png', '正解は「かめいど」です！'),
    (1, 3, 'tokyo3.png', '正解は「こうじまち」です！'),
    (1, 4, 'tokyo4.png', '正解は「おなりもん」です！'),
    (1, 5, 'tokyo5.png', '正解は「とどろき」です！'),
    (1, 6, 'tokyo6.png', '正解は「しゃくじい」です！'),
    (1, 7, 'tokyo7.png', '正解は「ぞうしき」です！'),
    (1, 8, 'tokyo8.png', '正解は「おかちまち」です！'),
    (1, 9, 'tokyo9.png', '江戸川区にあります。'),
    (1, 10, 'tokyo10.png', '正解は「こぐれ」です！'),
    (2, 1, 'hiroshima1.png', '広島市南区。'),
    (2, 2, 'hiroshima2.png', '尾道市。'),
    (2, 3, 'hiroshima3.png', '広島市中区'),
    (2, 4, 'hiroshima4.png', '尾道市。'),
    (2, 5, 'hiroshima5.png', '尾道市。'),
    (2, 6, 'hiroshima6.png', '三次市。'),
    (2, 7, 'hiroshima7.png', '三次市。'),
    (2, 8, 'hiroshima8.png', '神石郡神石高原町。'),
    (2, 9, 'hiroshima9.png', '広島市東区。'),
    (2, 10, 'hiroshima10.png', '山県郡北広島町。');

DROP TABLE IF EXISTS choices;

CREATE TABLE choices (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `big_question_id` INT NOT NULL,
    `quiz_number` INT NOT NULL,
    `name` VARCHAR(225) NOT NULL,
    `valid` BOOL NOT NULL
);

INSERT INTO
    choices (`big_question_id`, `quiz_number`, `name`, `valid`)
VALUES
    (1, 1, 'たかなわ', 1),
    (1, 1, 'たかわ', 0),
    (1, 1, 'こうわ', 0),
    (1, 2, 'かめいど', 1),
    (1, 2, 'かめと', 0),
    (1, 2, 'かめど', 0),
    (1, 3, 'こうじまち', 1),
    (1, 3, 'かゆまち', 0),
    (1, 3, 'おかとまち', 0),
    (1, 4, 'おなりもん', 1),
    (1, 4, 'おかどもん', 0),
    (1, 4, 'ごせいもん', 0),
    (1, 5, 'とどろき', 1),
    (1, 5, 'たたりき', 0),
    (1, 5, 'たたら', 0),
    (1, 6, 'しゃくじい', 1),
    (1, 6, 'せきこうい', 0),
    (1, 6, 'いじい', 0),
    (1, 7, 'ぞうしき', 1),
    (1, 7, 'ざっしょく', 0),
    (1, 7, 'ざっしき', 0),
    (1, 8, 'おかちまち', 1),
    (1, 8, 'みとちょう', 0),
    (1, 8, 'ごしろちょう', 0),
    (1, 9, 'ししぼね', 1),
    (1, 9, 'ろっこつ', 0),
    (1, 9, 'しこね', 0),
    (1, 10, 'こぐれ', 1),
    (1, 10, 'こばく', 0),
    (1, 10, 'こしゃく', 0),
    (2, 1, 'むかいなだ', 1),
    (2, 1, 'むこうひら', 0),
    (2, 1, 'むきひら', 0),
    (2, 2, 'みつぎ', 1),
    (2, 2, 'みよし', 0),
    (2, 2, 'おしらべ', 0),
    (2, 3, 'かなやま', 1),
    (2, 3, 'ぎんざん', 0),
    (2, 3, 'きやま', 0),
    (2, 4, 'とよひ', 1),
    (2, 4, 'としか', 0),
    (2, 4, 'とよか', 0),
    (2, 5, 'いしぐろ', 1),
    (2, 5, 'しゃくぜ', 0),
    (2, 5, 'いしあぜ', 0),
    (2, 6, 'みよし', 1),
    (2, 6, 'みつぎ', 0),
    (2, 6, 'みかた', 0),
    (2, 7, 'うずい', 1),
    (2, 7, 'くもおり', 0),
    (2, 7, 'もみち', 0),
    (2, 8, 'すもも', 1),
    (2, 8, 'でこぽん', 0),
    (2, 8, 'ぽんかん', 0),
    (2, 9, 'おおちごとうげ', 1),
    (2, 9, 'おおちごえとうげ', 0),
    (2, 9, 'おうちごとうげ', 0),
    (2, 10, 'よおろほよばら', 1),
    (2, 10, 'てっぽよばら', 0),
    (2, 10, 'ていぼよはら', 0);