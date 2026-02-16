const submitBtn = document.getElementById("submitbtn");

console.log(submitBtn);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  window.location.href = "/index.html";
});
