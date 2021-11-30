var barCtx = document.getElementById('barChart');
var langsCtx = document.getElementById('languagesChart');
var contentsCtx = document.getElementById('contentsChart');

var barChart = new Chart(barCtx, {
    type: 'bar',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
        datasets: [{label: '学習時間',
        data: [2, 1, 4, 3, 1, 5, 3, 2, 6, 3, 3, 2, 2, 1, 2, 5, 3, 4, 3, 2, 4, 2, 1, 4, 0, 7, 3, 4, 1, 1, 3],
        backgroundColor: '#ccc',
    }],
    },
    options: {}
});

var langsChart = new Chart(langsCtx, {
    type: 'doughnut',
    data: {
        labels: ['JavaScript', 'CSS', 'PHP', 'HTML', 'Laravel', 'SQL', 'SHEEL', '情報システム基礎知識(その他)'],
        dataets: [{
            data: [38, 31, 21, 10, 4, 4, 4, 4],
            backgroundColor: [
                '#0445EC',
                '#0F70BD',
                '#20BDDE',
                '#3CCEFE',
                '#B29EF3',
                '#6C46EB',
                '#4A17EF',
                '#3005C0',
            ],
        }]
    },
    options: {
        legend: false,
        responsive: false,
    }
});