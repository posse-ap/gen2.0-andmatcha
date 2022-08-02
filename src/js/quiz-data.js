'use strict';

/**
 * @typedef{{ num: number, title: string, img: string, choices: {num: number, value: string}[] ans: number, src: string }} Quiz
 * @type {Quiz[]} クイズデータを格納します
 */
const quizzes = [];

quizzes.push(
    {
        num: 1,
        title: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
        img: 'img-quiz01.png',
        choices: [
            { num: 1, value: '約28万人' },
            { num: 2, value: '約79万人' },
            { num: 3, value: '約183万人' },
        ],
        ans: 2,
        src: '経済産業省 2019年3月 － IT 人材需給に関する調査'
    },
    {
        num: 2,
        title: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
        img: 'img-quiz02.png',
        choices: [
            { num: 1, value: 'INTECH' },
            { num: 2, value: 'BIZZTECH' },
            { num: 3, value: 'X-TECH' },
        ],
        ans: 3,
        src: ''
    },
    {
        num: 3,
        title: 'IoTとは何の略でしょう？',
        img: 'img-quiz03.png',
        choices: [
            { num: 1, value: 'Internet of Things' },
            { num: 2, value: 'Integrate into Technology' },
            { num: 3, value: 'Information  on Tool' },
        ],
        ans: 1,
        src: ''
    },
    {
        num: 4,
        title: '日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',
        img: 'img-quiz04.png',
        choices: [
            { num: 1, value: 'Society 5.0' },
            { num: 2, value: 'CyPhy' },
            { num: 3, value: 'SDGs' },
        ],
        ans: 1,
        src: 'Society5.0 - 科学技術政策 - 内閣府'
    },
    {
        num: 5,
        title: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
        img: 'img-quiz05.png',
        choices: [
            { num: 1, value: 'Web3.0' },
            { num: 2, value: 'NFT' },
            { num: 3, value: 'メタバース' },
        ],
        ans: 1,
        src: ''
    },
    {
        num: 6,
        title: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
        img: 'img-quiz06.png',
        choices: [
            { num: 1, value: '約2倍' },
            { num: 2, value: '約5倍' },
            { num: 3, value: '約11倍' },
        ],
        ans: 2,
        src: 'Accenture Technology Vision 2021'
    },
);
