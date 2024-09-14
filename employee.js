// Weekly tasks data
const weeklyTasks = [
    "Submit project documentation by 20th",
    "Prepare presentation for client meeting",
    "Complete backend integration for Project Z",
    "Update software modules as per new requirements",
    "Conduct code review session on Friday"
];

// Populate the weekly tasks
const weeklyTasksList = document.getElementById("weekly-tasks");
weeklyTasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    weeklyTasksList.appendChild(li);
});

// Progress chart using Chart.js
const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['UI Design', 'Backend Development', 'Testing', 'Documentation', 'Client Feedback'],
        datasets: [{
            label: 'Progress',
            data: [70, 55, 45, 30, 80],
            backgroundColor: ['#1f3b54', '#663399', '#ff6666', '#66cc66', '#3399ff']
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
