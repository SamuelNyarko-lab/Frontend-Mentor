console.log("Hey there");

const form = document.querySelector("form");

const errorMessage = document.getElementById("error-message");

const input = document.getElementById("email");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  email = data["email"];

  if (emailRegex.test(email) || email !== "") {
    errorMessage.textContent = "";
    input.classList.remove("error-state");
    sessionStorage.setItem("signupEmail", email);
    window.location.href = "html/success.html";
  } else {
    input.classList.add("error-state");
    errorMessage.textContent = "Valid email required";
  }
  //console.log(`Here is the email: ${email}`);
});
//});
