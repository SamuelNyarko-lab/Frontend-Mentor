console.log("Hi");

let form = document.querySelector("form");

let bill = document.getElementById("bill");

let customTip = document.getElementById("customTip");

let numberOfPeople = document.getElementById("people");

let resetButton = document.getElementById("reset-button");

let error = document.querySelector(".error-message");

let tipAmount = document.getElementById("tip-amount");

let totalAmount = document.getElementById("total-amount");

const tipDetails = document.querySelector(".tip-details");

const buttons = container.querySelectorAll("button");

tipAmount.textContent = "0.00";
totalAmount.textContent = "0.00";

let billValue = 0,
  percentageValue = 0,
  peopleValue = 0,
  tip = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

// Reset Button
resetButton.disabled = true;

resetButton.addEventListener("click", (e) => {
  tipAmount.textContent = "0.00";
  totalAmount.textContent = "0.00";
  billValue = 0;
  percentageValue = 0;
  peopleValue = 0;
  bill.value = "";
  customTip.value = "";
  numberOfPeople.value = "";
  buttons.forEach((btn) => btn.classList.remove("active"));
  resetButton.disabled = true;
});
//Listener for bill field
bill.addEventListener("input", (e) => {
  resetButton.disabled = false;
  const value = Number(e.target.value);

  billValue = convertToNumber(value);

  calculateTotals();
});

//Listener for Tip field
tipDetails.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    // remove active from all buttons
    buttons.forEach((btn) => btn.classList.remove("active"));
    customTip.value = "";
    // add active to clicked button
    e.target.classList.add("active");
    // console.log(e.target.textContent);

    percentageValue = convertPercentageToNumber(e.target.textContent);
    // console.log(percentageValue);
    calculateTotals();
  }
});

//Listener for custom-tip
customTip.addEventListener("input", (e) => {
  buttons.forEach((btn) => btn.classList.remove("active"));
  percentageValue = convertToNumber(e.target.value);
  //console.log(percentageValue);
  calculateTotals();
});

//Listener for number of people field
numberOfPeople.addEventListener("input", (e) => {
  const value = Number(e.target.value);
  peopleValue = convertToNumber(value);

  if (!peopleValue || peopleValue <= 0) {
    resetButton.disabled = true;
    renderError();
  } else {
    resetButton.disabled = false;
    clearError();
  }
  calculateTotals();
});

// Calculation Functions
function tipAmountTotal(bill, tipPercentage) {
  const tipValue = (bill * tipPercentage) / 100;
  return Number(tipValue.toFixed(2));
}

function totalCost(bill, tipAmount, numberOfPeople) {
  if (!numberOfPeople || numberOfPeople <= 0) {
    return "0.00";
  }

  const total = (bill + tipAmount) * numberOfPeople;
  return total.toFixed(2);
}

function calculateTotals() {
  tip = tipAmountTotal(billValue, percentageValue);
  tipAmount.textContent = tip.toFixed(2);
  totalAmount.textContent = totalCost(billValue, tip, peopleValue);
}

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

function convertPercentageToNumber(value) {
  value = value.replace("%", "");
  value = Number.isNaN(value) == false ? Number(value) : 0; //Checks if value is not a number and sets zero to it
  return value;
}

function convertToNumber(value) {
  value = Number.isNaN(value) == false ? Number(value) : 0; //Checks if value is not a number and sets zero to it
  return value;
}
