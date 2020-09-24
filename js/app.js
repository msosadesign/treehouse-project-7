const closeNotification = document.getElementById("close-notification");
const blueColor = "#7377bf";
const transparentBlue = "rgba(115, 119, 191, 0.3)";
const sendMessage = document.getElementById("send-message");
const saveSettings = document.getElementById("save-settings");
const cancelSettings = document.getElementById("cancel-settings");
const hourlyTrafficView = document.getElementById("hourly-traffic");
const dailyTrafficView = document.getElementById("daily-traffic");
const weeklyTrafficView = document.getElementById("weekly-traffic");
const monthlyTrafficView = document.getElementById("monthly-traffic");
const emailNotifications = document.getElementById("email-notifications");
const profilePrivacy = document.getElementById("profile-privacy");
const timezones = document.getElementById("timezones");
const searchUser = document.getElementById("search-user");
const countries = [
  "Bobby Rivera",
  "Monica Grant",
  "Eduardo Cooper",
  "Judith Evans",
  "Travis Harris",
  "Dale Cole",
  "Melvin Lynch",
  "Gail Wagner",
  "Brent Lucas",
  "Georgia Rogers",
  "Gregory Shaw",
  "Rodney Frazier",
  "Norman Berry",
  "Shane Phillips",
  "Clayton Shelton",
  "Manuel Lopez",
  "Sarah Mills",
  "Nathaniel Watts",
  "Celina Mitchelle",
  "Pearl Pena",
  "Joseph Martin",
  "Leroy Bishop",
];

// Close notification bar
closeNotification.addEventListener("click", () => {
  const notification = document.getElementById("notification-container");
  notification.style.display = "none";
});

sendMessage.addEventListener("click", () => {
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

  const errorNoUser = createSnack("You didn't specify an user", "error");
  const errorNoMsg = createSnack("You didn't type a message", "error");
  const errorEmpty = createSnack(
    "You have to specify an user and a message",
    "error"
  );
  const success = createSnack("Message sent", "success");

  function showSnack(snackName) {
    document.body.appendChild(snackName);
    setTimeout(function () {
      snackName.style.display = "none";
    }, 5000);
    return snackName;
  }

  if (searchUser.value == "" && message.value == "") {
    showSnack(errorEmpty);
  } else if (searchUser.value == "") {
    showSnack(errorNoUser);
  } else if (message.value == "") {
    showSnack(errorNoMsg);
  } else {
    showSnack(success);
    message.value = "";
    searchUser.value = "";
  }
});

// Search Autocomplete

function autocomplete(inp, array) {
  // Search
  inp.addEventListener("input", function (e) {
    const autoComplete = document.getElementsByClassName("autocomplete")[0];
    const autoContainer = autoComplete.children[1];
    autoContainer.innerHTML = "";
    autoContainer.style.display = "block";
    let input = this.value;
    for (i = 0; i < array.length; i++) {
      if (
        input.toUpperCase() == array[i].substr(0, input.length).toUpperCase()
      ) {
        const name = document.createElement("div");
        name.className = "autocomplete-items";
        name.innerHTML = `${array[i]}`;
        autoContainer.appendChild(name);
        name.addEventListener("click", () => {
          searchUser.value = name.innerHTML;
          autoContainer.innerHTML = "";
          autoContainer.style.display = "none";
        });
      }
    }
    if (this.value === "") {
      autoContainer.innerHTML = "";
      autoContainer.style.display = "none";
    }
    // inp.addEventListener("focusout", () => {
    //   autoContainer.innerHTML = "";
    //   autoContainer.style.display = "none";
    // });
  });

  // Autocomplete
  // /*the autocomplete function takes two arguments,
  // the text field element and an array of possible autocompleted values:*/
  // let currentFocus;
  // /*execute a function when someone writes in the text field:*/
  // inp.addEventListener("input", function (e) {
  //   let a,
  //     b,
  //     i,
  //     val = this.value;
  //   /*close any already open lists of autocompleted values*/
  //   closeAllLists();
  //   if (!val) {
  //     return false;
  //   }
  //   currentFocus = -1;
  //   /*create a DIV element that will contain the items (values):*/
  //   a = document.createElement("DIV");
  //   a.setAttribute("id", this.id + "autocomplete-list");
  //   a.setAttribute("class", "autocomplete-items");
  //   /*append the DIV element as a child of the autocomplete container:*/
  //   this.parentNode.appendChild(a);
  //   /*for each item in the array...*/
  //   for (i = 0; i < arr.length; i++) {
  //     /*check if the item starts with the same letters as the text field value:*/
  //     if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
  //       /*create a DIV element for each matching element:*/
  //       b = document.createElement("DIV");
  //       /*make the matching letters bold:*/
  //       b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
  //       b.innerHTML += arr[i].substr(val.length);
  //       /*insert a input field that will hold the current array item's value:*/
  //       b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
  //       /*execute a function when someone clicks on the item value (DIV element):*/
  //       b.addEventListener("click", function (e) {
  //         /*insert the value for the autocomplete text field:*/
  //         inp.value = this.getElementsByTagName("input")[0].value;
  //         /*close the list of autocompleted values,
  //             (or any other open lists of autocompleted values:*/
  //         closeAllLists();
  //       });
  //       a.appendChild(b);
  //     }
  //   }
  // });
  // /*execute a function presses a key on the keyboard:*/
  // inp.addEventListener("keydown", function (e) {
  //   let x = document.getElementById(this.id + "autocomplete-list");
  //   if (x) x = x.getElementsByTagName("div");
  //   if (e.keyCode == 40) {
  //     /*If the arrow DOWN key is pressed,
  //       increase the currentFocus variable:*/
  //     currentFocus++;
  //     /*and and make the current item more visible:*/
  //     addActive(x);
  //   } else if (e.keyCode == 38) {
  //     //up
  //     /*If the arrow UP key is pressed,
  //       decrease the currentFocus variable:*/
  //     currentFocus--;
  //     /*and and make the current item more visible:*/
  //     addActive(x);
  //   } else if (e.keyCode == 13) {
  //     /*If the ENTER key is pressed, prevent the form from being submitted,*/
  //     e.preventDefault();
  //     if (currentFocus > -1) {
  //       /*and simulate a click on the "active" item:*/
  //       if (x) x[currentFocus].click();
  //     }
  //   }
  // });
  // function addActive(x) {
  //   /*a function to classify an item as "active":*/
  //   if (!x) return false;
  //   /*start by removing the "active" class on all items:*/
  //   removeActive(x);
  //   if (currentFocus >= x.length) currentFocus = 0;
  //   if (currentFocus < 0) currentFocus = x.length - 1;
  //   /*add class "autocomplete-active":*/
  //   x[currentFocus].classList.add("autocomplete-active");
  // }
  // function removeActive(x) {
  //   /*a function to remove the "active" class from all autocomplete items:*/
  //   for (let i = 0; i < x.length; i++) {
  //     x[i].classList.remove("autocomplete-active");
  //   }
  // }
  // function closeAllLists(elmnt) {
  //   /*close all autocomplete lists in the document,
  //   except the one passed as an argument:*/
  //   let x = document.getElementsByClassName("autocomplete-items");
  //   for (let i = 0; i < x.length; i++) {
  //     if (elmnt != x[i] && elmnt != inp) {
  //       x[i].parentNode.removeChild(x[i]);
  //     }
  //   }
  // }
  // /*execute a function when someone clicks in the document:*/
  // document.addEventListener("click", function (e) {
  //   closeAllLists(e.target);
  // });
}

autocomplete(searchUser, countries);

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

// Save Settings

saveSettings.addEventListener("click", () => {
  localStorage.setItem("emailNotifications", emailNotifications.checked);
  localStorage.setItem("profilePrivacy", profilePrivacy.checked);

  localStorage.setItem("timezones", timezones.value);

  location.reload();
});

// Cancel settings

cancelSettings.addEventListener("click", () => {
  localStorage.setItem("emailNotifications", true);
  localStorage.setItem("profilePrivacy", true);

  localStorage.setItem("timezones", "Select Time Zone");

  location.reload();
});

// Set Local Storage Values

let emailBoolean = localStorage.getItem("emailNotifications") === "true";
emailNotifications.checked = emailBoolean;

let profileBoolean = localStorage.getItem("profilePrivacy") === "true";
profilePrivacy.checked = profileBoolean;

timezones.value = localStorage.getItem("timezones");
