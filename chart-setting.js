const barCtx = document.getElementById('barChart');
const langsCtx = document.getElementById('langagesPieChart');
const contentsCtx = document.getElementById('contentsPieChart');

const barChart = new Chart(barCtx, {
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