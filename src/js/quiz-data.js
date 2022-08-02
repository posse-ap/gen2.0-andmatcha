'use strict';

/**
 * @typedef{{ num: number, title: string, img: string, choices: {num: number, value: string}[] ans: number, src: string }} Quiz
 * @type {Quiz[]} クイズデータを格納します
 */
const LIST_QUIZ_DATA = [];

LIST_QUIZ_DATA.push(
    {
        quizNumber: 1,
        sentence: '日本のIT人材が2030年には最大どれくらい不足すると言われているでしょうか？',
        imageFileName: 'img-quiz01.png',
        choices: [
            { choiceNumber: 1, choiceContent: '約28万人' },
            { choiceNumber: 2, choiceContent: '約79万人' },
            { choiceNumber: 3, choiceContent: '約183万人' },
        ],
        correctChoiceNumber: 2,
        reference: '経済産業省 2019年3月 － IT 人材需給に関する調査'
    },
    {
        quizNumber: 2,
        sentence: '既存業界のビジネスと、先進的なテクノロジーを結びつけて生まれた、新しいビジネスのことをなんと言うでしょう？',
        imageFileName: 'img-quiz02.png',
        choices: [
            { choiceNumber: 1, choiceContent: 'INTECH' },
            { choiceNumber: 2, choiceContent: 'BIZZTECH' },
            { choiceNumber: 3, choiceContent: 'X-TECH' },
        ],
        correctChoiceNumber: 3,
        reference: ''
    },
    {
        quizNumber: 3,
        sentence: 'IoTとは何の略でしょう？',
        imageFileName: 'img-quiz03.png',
        choices: [
            { choiceNumber: 1, choiceContent: 'Internet of Things' },
            { choiceNumber: 2, choiceContent: 'Integrate into Technology' },
            { choiceNumber: 3, choiceContent: 'Information  on Tool' },
        ],
        correctChoiceNumber: 1,
        reference: ''
    },
    {
        quizNumber: 4,
        sentence: '日本が目指すサイバー空間とフィジカル空間を高度に融合させたシステムによって開かれる未来社会のことをなんと言うでしょうか？',
        imageFileName: 'img-quiz04.png',
        choices: [
            { choiceNumber: 1, choiceContent: 'Society 5.0' },
            { choiceNumber: 2, choiceContent: 'CyPhy' },
            { choiceNumber: 3, choiceContent: 'SDGs' },
        ],
        correctChoiceNumber: 1,
        reference: 'Society5.0 - 科学技術政策 - 内閣府'
    },
    {
        quizNumber: 5,
        sentence: 'イギリスのコンピューター科学者であるギャビン・ウッド氏が提唱した、ブロックチェーン技術を活用した「次世代分散型インターネット」のことをなんと言うでしょう？',
        imageFileName: 'img-quiz05.png',
        choices: [
            { choiceNumber: 1, choiceContent: 'Web3.0' },
            { choiceNumber: 2, choiceContent: 'NFT' },
            { choiceNumber: 3, choiceContent: 'メタバース' },
        ],
        correctChoiceNumber: 1,
        reference: ''
    },
    {
        quizNumber: 6,
        sentence: '先進テクノロジー活用企業と出遅れた企業の収益性の差はどれくらいあると言われているでしょうか？',
        imageFileName: 'img-quiz06.png',
        choices: [
            { choiceNumber: 1, choiceContent: '約2倍' },
            { choiceNumber: 2, choiceContent: '約5倍' },
            { choiceNumber: 3, choiceContent: '約11倍' },
        ],
        correctChoiceNumber: 2,
        reference: 'Accenture Technology Vision 2021'
    },
);
