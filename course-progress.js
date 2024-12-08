// Bar Chart: Course Completion Status
const barChartCtx = document.getElementById('barChart').getContext('2d');
new Chart(barChartCtx, {
    type: 'bar',
    data: {
        labels: ['Course A', 'Course B', 'Course C', 'Course D'],
        datasets: [{
            label: 'Completion (%)',
            data: [75, 50, 90, 60],
            backgroundColor: ['#3498db', '#2ecc71', '#e74c3c', '#f1c40f'],
            borderColor: '#333',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

// Pie Chart: Progress Distribution
const pieChartCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieChartCtx, {
    type: 'pie',
    data: {
        labels: ['Completed', 'In Progress', 'Not Started'],
        datasets: [{
            data: [60, 30, 10], // Example percentages
            backgroundColor: ['#2ecc71', '#f1c40f', '#e74c3c'],
            borderColor: '#fff',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});
