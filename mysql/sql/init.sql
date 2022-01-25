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
    `image` VARCHAR(225) NOT NULL,
    `text` VARCHAR(225) NOT NULL
);

INSERT INTO
    questions (`big_question_id`, `image`, `text`)
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
    `big_question_id` INT NOT NULL,
    `choice_id` INT NOT NULL,
    `name` VARCHAR(225) NOT NULL,
    `valid` BOOL NOT NULL
);

INSERT INTO
    choices (`big_question_id`, `choice_id`, `name`, `valid`)
VALUES
    (1, 1, 'たかなわ', 1),
    (1, 2, 'たかわ', 0),
    (1, 3, 'こうわ', 0),
    (1, 1, 'かめいど', 1),
    (1, 2, 'かめと', 0),
    (1, 3, 'かめど', 0),
    (1, 1, 'こうじまち', 1),
    (1, 2, 'かゆまち', 0),
    (1, 3, 'おかとまち', 0),
    (1, 1, 'おなりもん', 1),
    (1, 2, 'おかどもん', 0),
    (1, 3, 'ごせいもん', 0),
    (1, 1, 'とどろき', 1),
    (1, 2, 'たたりき', 0),
    (1, 3, 'たたら', 0),
    (1, 1, 'しゃくじい', 1),
    (1, 2, 'せきこうい', 0),
    (1, 3, 'いじい', 0),
    (1, 1, 'ぞうしき', 1),
    (1, 2, 'ざっしょく', 0),
    (1, 3, 'ざっしき', 0),
    (1, 1, 'おかちまち', 1),
    (1, 2, 'みとちょう', 0),
    (1, 3, 'ごしろちょう', 0),
    (1, 1, 'ししぼね', 1),
    (1, 2, 'ろっこつ', 0),
    (1, 3, 'しこね', 0),
    (1, 1, 'こぐれ', 1),
    (1, 2, 'こばく', 0),
    (1, 3, 'こしゃく', 0),
    (2, 1, 'むかいなだ', 1),
    (2, 2, 'むこうひら', 0),
    (2, 3, 'むきひら', 0),
    (2, 1, 'みつぎ', 1),
    (2, 2, 'みよし', 0),
    (2, 3, 'おしらべ', 0),
    (2, 1, 'かなやま', 1),
    (2, 2, 'ぎんざん', 0),
    (2, 3, 'きやま', 0),
    (2, 1, 'とよひ', 1),
    (2, 2, 'としか', 0),
    (2, 3, 'とよか', 0),
    (2, 1, 'いしぐろ', 1),
    (2, 2, 'しゃくぜ', 0),
    (2, 3, 'いしあぜ', 0),
    (2, 1, 'みよし', 1),
    (2, 2, 'みつぎ', 0),
    (2, 3, 'みかた', 0),
    (2, 1, 'うずい', 1),
    (2, 2, 'くもおり', 0),
    (2, 3, 'もみち', 0),
    (2, 1, 'すもも', 1),
    (2, 2, 'でこぽん', 0),
    (2, 3, 'ぽんかん', 0),
    (2, 1, 'おおちごとうげ', 1),
    (2, 2, 'おおちごえとうげ', 0),
    (2, 3, 'おうちごとうげ', 0),
    (2, 1, 'よおろほよばら', 1),
    (2, 2, 'てっぽよばら', 0),
    (2, 3, 'ていぼよはら', 0);