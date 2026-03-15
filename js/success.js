const submitBtn = document.getElementById("submitbtn");
const successEmail = document.getElementById("success-email");
const email = sessionStorage.getItem("signupEmail") || "";
if (successEmail) successEmail.textContent = email;
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/index.html";
});
