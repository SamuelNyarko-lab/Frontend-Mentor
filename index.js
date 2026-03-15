// let normalString = "self care".split(" ").join("-");
// console.log(normalString);
// let newString = normalString.split("-").join(" ");
// console.log(newString);
// console.log('A newline character is written like "\\n".');
const fetchDataPromise = fetch("data.json");

let dataContainer = document.getElementById("data-container");

let dailyItem = document.getElementById("daily");
let weeklyItem = document.getElementById("weekly");
let monthlyItem = document.getElementById("monthly");
let timeFrameTitles = document.querySelectorAll(".timeframes-titles");
let activeTitle = document.querySelector(".activetitle");
let timeData;

const cardColors = {
  work: "hsl(15, 100%, 70%)",
  play: "hsl(195, 74%, 62%)",
  study: "hsl(348, 100%, 68%)",
  exercise: "hsl(145, 58%, 55%)",
  social: "hsl(264, 64%, 52%)",
  "self care": "hsl(43, 84%, 65%)",
};

const imageLinks = {
  work: "images/icon-work.svg",
  play: "images/icon-play.svg",
  study: "images/icon-study.svg",
  exercise: "images/icon-exercise.svg",
  social: "images/icon-social.svg",
  "self care": "images/icon-self-care.svg",
};

let appendItem = (item, timeType = "weekly") => {
  //console.log(imageLinks[item["title"].toLowerCase()]);
  dataContainer.innerHTML += `<div class="timeframes-card">
        <div id="image-card" class="${item["title"].split(" ").join("-").toLowerCase()}">
          <img src="${imageLinks[item["title"].toLowerCase()]}" alt="" id="time-icon">
        </div>

        <div class="data-card">

          <div class="title-card">
            <p id="title">${item["title"]}</p>
            <div class="menu-icon">
              <img src="images/icon-ellipsis.svg" alt="" id="menu-img">
            </div>
          </div>


          <div id="data-section">
            <p id="current">
              ${item["timeframes"][timeType]["current"]}hrs
            </p>

            <p id="previous">Last Week - ${item["timeframes"][timeType]["previous"]}hrs</p>
          </div>
        </div>
      </div>`;
  // console.log(container);
};

fetchDataPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP Error : ${response.status}`); // throw error
    }
    return response.json(); //convert response to json object
  })
  .then((data) => {
    //console.log(data);

    //console.log(appendItem(data[0]));

    timeData = data;
    console.log(timeData);

    for (const element of data) {
      // console.log(element.title.toLowerCase());

      appendItem(element);
      let timeFramesImageCard = document.querySelector(
        `.${element["title"].split(" ").join("-").toLowerCase()}`,
      );

      timeFramesImageCard.style.backgroundColor =
        cardColors[element["title"].toLowerCase()];

      //console.log(cardColors[element["title"].toLowerCase()]);
      // console.log(timeFramesImageCard);
    }
  })
  .catch((error) => {
    console.error(`Data not found because ${error}`);
  });

dailyItem.addEventListener("click", (event) => {
  dataContainer.innerHTML = ``;
  document.querySelector(".activetitle").classList.remove("activetitle");
  dailyItem.classList.add("activetitle");
  for (const element of timeData) {
    appendItem(element, "daily");
    let timeFramesImageCard = document.querySelector(
      `.${element["title"].split(" ").join("-").toLowerCase()}`,
    );

    timeFramesImageCard.style.backgroundColor =
      cardColors[element["title"].toLowerCase()];
  }
});

weeklyItem.addEventListener("click", (event) => {
  dataContainer.innerHTML = ``;
  document.querySelector(".activetitle").classList.remove("activetitle");
  weeklyItem.classList.add("activetitle");
  for (const element of timeData) {
    appendItem(element, "weekly");
    let timeFramesImageCard = document.querySelector(
      `.${element["title"].split(" ").join("-").toLowerCase()}`,
    );

    timeFramesImageCard.style.backgroundColor =
      cardColors[element["title"].toLowerCase()];
  }
});

monthlyItem.addEventListener("click", (event) => {
  dataContainer.innerHTML = ``;
  document.querySelector(".activetitle").classList.remove("activetitle");
  monthlyItem.classList.add("activetitle");
  for (const element of timeData) {
    appendItem(element, "monthly");
    let timeFramesImageCard = document.querySelector(
      `.${element["title"].split(" ").join("-").toLowerCase()}`,
    );

    timeFramesImageCard.style.backgroundColor =
      cardColors[element["title"].toLowerCase()];
  }
});
