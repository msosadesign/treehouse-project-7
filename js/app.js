const closeNotification = document.getElementById("close-notification");
const blueColor = '#7377bf';
const transparentBlue = 'rgba(115, 119, 191, 0.3)';

// Close notification bar
closeNotification.addEventListener("click", () => {
  const notification = document.getElementById("notification-container");
  notification.style.display = "none";
});

// Charts
const trafficgraph = document.getElementById('traffic').getContext('2d');
const traffic = new Chart(trafficgraph, {
    type: 'line',
    data: {
        labels: ['16-22', '23-29', '30-5', '6-12', '13-19', '20-26', '27-3', '4-10', '11-17', '18-24', '25-31'],
        datasets: [{
            label: '# of Votes',
            data: [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
            backgroundColor: transparentBlue,
            borderColor: blueColor,
            lineTension: '0',
            pointBackgroundColor: '#fff',
            pointBorderWidth: '2',
            pointRadius: '7',
            borderWidth: '1',
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});


const dailyTrafficGraph = document.getElementById('dailyTraffic').getContext('2d');
const dailyTraffic = new Chart(dailyTrafficGraph, {
    type: 'bar',
    data: {
        labels: ["S","M","T","W","T","F","S"],
        datasets: [{
            label: 'Daily Traffic',
            backgroundColor: blueColor,
            data: [100, 75, 150, 100, 200, 175, 125],
    }]},
});

const mobileUsersGraph = document.getElementById('mobileUsers').getContext('2d');
const mobileUsers = new Chart(mobileUsersGraph, {
    type: 'doughnut',
    data: {
        labels: ["Phones","Tablets","Desktop"],
        datasets: [{
            label: 'Daily Traffic',
            data: [15,15,80],
            backgroundColor: [
                '#74b1bf', '#81c98f', blueColor
            ],
    }]},
});
