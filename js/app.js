const closeNotification = document.getElementById("close-notification");
const blueColor = "#7377bf";
const transparentBlue = "rgba(115, 119, 191, 0.3)";
const sendMessage = document.getElementById("send-message");
const hourlyTrafficView = document.getElementById("hourly-traffic");
const dailyTrafficView = document.getElementById("daily-traffic");
const weeklyTrafficView = document.getElementById("weekly-traffic");
const monthlyTrafficView = document.getElementById("monthly-traffic");

// Close notification bar
closeNotification.addEventListener("click", () => {
  const notification = document.getElementById("notification-container");
  notification.style.display = "none";
});

sendMessage.addEventListener("click", () => {
  const search = document.getElementById("search-user");
  const message = document.getElementById("message-for-user");

  function createSnack(snackMessage, type) {
    let snack = document.createElement("span");
    snack.innerHTML = snackMessage;

    if (type === "error") {
      snack.className = "snackbar error-snack";
    }

    if (type === "success") {
      snack.className = "snackbar success-snack";
    }

    return snack;
  }

  function showSnack(snackName) {
    document.body.appendChild(snackName);
    setTimeout(function () {
      snackName.style.display = "none";
    }, 5000);
    return snackName;
  }

  const errorNoUser = createSnack("You didn't specify an user", "error");
  const errorNoMsg = createSnack("You didn't type a message", "error");
  const errorEmpty = createSnack(
    "You have to specify an user and a message",
    "error"
  );
  const success = createSnack("Message sent", "success");

  if (search.value == "" && message.value == "") {
    showSnack(errorEmpty);
  } else if (search.value == "") {
    showSnack(errorNoUser);
  } else if (message.value == "") {
    showSnack(errorNoMsg);
  } else {
    showSnack(success);
    message.value = "";
    search.value = "";
  }
});

// Traffic buttons

function updateTrafficChart(e, data, labels) {
  e.addEventListener("click", () => {
    traffic.data.datasets[0].data = data;
    traffic.data.labels = labels;

    hourlyTrafficView.className = "";
    dailyTrafficView.className = "";
    weeklyTrafficView.className = "";
    monthlyTrafficView.className = "";

    e.className = "select-button-active";
    traffic.update();
  });
}

updateTrafficChart(
  hourlyTrafficView,
  [10, 2, 13, 6, 15, 16, 20, 8, 11, 14, 10, 12],
  ["8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"]
);

updateTrafficChart(
  dailyTrafficView,
  [
    100,
    200,
    350,
    129,
    319,
    400,
    90,
    569,
    400,
    130,
    43,
    100,
    230,
    140,
    200,
    120,
    340,
    120,
    200,
    80,
    50,
    500,
    320,
    100,
    120,
    150,
    100,
    430,
    200,
    300,
  ],
  [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ]
);

updateTrafficChart(
  weeklyTrafficView,
  [500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2000],
  [
    "16-22",
    "23-29",
    "30-5",
    "6-12",
    "13-19",
    "20-26",
    "27-3",
    "4-10",
    "11-17",
    "18-24",
    "25-31",
  ]
);

updateTrafficChart(
  monthlyTrafficView,
  [
    12000,
    10000,
    9000,
    15000,
    20000,
    13000,
    10000,
    8000,
    9000,
    8000,
    11000,
    12000,
  ],
  [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
);

// Charts
const trafficgraph = document.getElementById("traffic").getContext("2d");
const traffic = new Chart(trafficgraph, {
  type: "line",
  data: {
    labels: [
      "16-22",
      "23-29",
      "30-5",
      "6-12",
      "13-19",
      "20-26",
      "27-3",
      "4-10",
      "11-17",
      "18-24",
      "25-31",
    ],
    datasets: [
      {
        label: "# of Votes",
        data: [
          500,
          1000,
          750,
          1250,
          1750,
          1250,
          1500,
          1000,
          1500,
          2000,
          1500,
          2000,
        ],
        backgroundColor: transparentBlue,
        borderColor: blueColor,
        lineTension: "0",
        pointBackgroundColor: "#fff",
        pointBorderWidth: "2",
        pointRadius: "7",
        borderWidth: "1",
        pointHoverRadius: "7",
        pointHoverBorderWidth: "3",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

const dailyTrafficGraph = document
  .getElementById("dailyTraffic")
  .getContext("2d");
const dailyTraffic = new Chart(dailyTrafficGraph, {
  type: "bar",
  data: {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [
      {
        label: "Daily Traffic",
        backgroundColor: blueColor,
        data: [100, 75, 150, 100, 200, 175, 125],
      },
    ],
  },
});

const mobileUsersGraph = document
  .getElementById("mobileUsers")
  .getContext("2d");
const mobileUsers = new Chart(mobileUsersGraph, {
  type: "doughnut",
  data: {
    labels: ["Phones", "Tablets", "Desktop"],
    datasets: [
      {
        label: "Daily Traffic",
        data: [15, 15, 80],
        backgroundColor: ["#74b1bf", "#81c98f", blueColor],
      },
    ],
  },
});
