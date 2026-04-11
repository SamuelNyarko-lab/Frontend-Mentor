console.log("Hi");

let form = document.querySelector("form");

let bill = document.getElementById("bill");

let customTip = document.getElementById("customTip");

let numberOfPeople = document.getElementById("people");

let resetButton = document.getElementById("reset-button");

let error = document.querySelector(".error-message");

const tipDetails = document.querySelector(".tip-details");

let billValue = 0,
  customTipValue = 0,
  peopleValue = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

tipDetails.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    // remove active from all buttons
    const buttons = container.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("active"));

    // add active to clicked button
    e.target.classList.add("active");
    console.log(e.target.textContent);
  }
});

bill.addEventListener("input", (e) => {
  const value = Number(e.target.value);
  billValue = !value || value <= 0 ? 0 : value;
});

numberOfPeople.addEventListener("input", (e) => {
  const value = Number(e.target.value);
  if (!value || value <= 0) {
    renderError();
  } else {
    console.log(value);
    clearError();
  }
});

//Get Form Data

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Reset Button

resetButton.setAttribute("disabled", ""); // Disables button
//resetButton.removeAttribute("disabled"); // Enables button

// Calculation Functions
let tipAmount = (bill, tipPercentage) => {
  return bill * (tipPercentage / 100);
};
let total = (bill, tipAmount, numberOfPeople) => {
  let total = (bill + tipAmount) * numberOfPeople;

  return total;
};

//let tipDetails = document.querySelector(".tip-details-items");
// const tipButtons = document.querySelectorAll(".tip-details button");

// const handleTipButtonClick = (e) => {
//   tipButtons.forEach((btn) => {
//     btn.classList.remove("active");
//     e.target.classList.add("active");
//   });
// };
// tipButtons.forEach((btn) => {
//   btn.addEventListener("click", handleTipButtonClick);
// });

// tipDetails.addEventListener("click", (e) => {
//   if (e.target.tagName === "BUTTON") {
//     console.log(e.textContent);
//   }
// });

//console.log(tipAmount(100, 25, 2));

const renderError = () => {
  error.textContent = "Cant' be zero";
};

const clearError = () => {
  error.textContent = "";
};
