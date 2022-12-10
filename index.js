// let data;

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data = data;
//     console.log(data);
//   })
//   .catch((error) => console.log(error));

const title1 = document.getElementById("title-1");
const title2 = document.getElementById("title-2");
const title3 = document.getElementById("title-3");
const title4 = document.getElementById("title-4");
const title5 = document.getElementById("title-5");
const title6 = document.getElementById("title-6");

const time1 = document.getElementById("time-1");
const time2 = document.getElementById("time-2");
const time3 = document.getElementById("time-3");
const time4 = document.getElementById("time-4");
const time5 = document.getElementById("time-5");
const time6 = document.getElementById("time-6");

const last1 = document.getElementById("last-1");
const last2 = document.getElementById("last-2");
const last3 = document.getElementById("last-3");
const last4 = document.getElementById("last-4");
const last5 = document.getElementById("last-5");
const last6 = document.getElementById("last-6");

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

let timeframe;

const timeframes = [
  { element: daily, name: "Daily" },
  { element: weekly, name: "Weekly" },
  { element: monthly, name: "Monthly" },
];

timeframes.forEach((item) => {
  item.element.addEventListener("click", () => {
    timeframe = item.name;
    checkTimeframe();
  });
});

const checkTimeframe = () => {
  if (timeframe === "Daily") {
    weekly.classList.remove("chosen");
    monthly.classList.remove("chosen");
    daily.classList.add("chosen");
    return;
  }
  if (timeframe === "Weekly") {
    daily.classList.remove("chosen");
    monthly.classList.remove("chosen");
    weekly.classList.add("chosen");
    return;
  }
  if (timeframe === "Monthly") {
    weekly.classList.remove("chosen");
    daily.classList.remove("chosen");
    monthly.classList.add("chosen");
    return;
  }
  console.log("wrong name");
};

async function load() {
  const json = await fetch("/data.json");
  const data = await json.json();
  console.log(data);

  timeframe = "Daily";
  checkTimeframe();

  let titlesFromDOM = [title1, title2, title3, title4, title5, title6];
  let titlesFromJSON = data.map((item) => item.title);

  for (let i = 0; i < titlesFromDOM.length; i++) {
    titlesFromDOM[i].textContent = titlesFromJSON[i];
  }
}

window.addEventListener("load", load);
