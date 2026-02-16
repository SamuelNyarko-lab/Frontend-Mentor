console.log("Hey there");

const form = document.querySelector("form");

const errorMessage = document.getElementById("error-message");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  // console.log(data);

  email = data["email"];
  if (emailRegex.test(email)) {
    errorMessage.textContent = "";
    window.location.href = "html/success.html";
  } else {
    errorMessage.textContent = "Valid email required";
  }
  //console.log(`Here is the email: ${email}`);
});
//});
