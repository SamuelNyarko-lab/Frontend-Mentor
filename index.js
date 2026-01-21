console.log("JS LINKED");

let shareButton = document.querySelector(".share-button");
let shareContent = document.querySelector(".share-content");

shareButton.addEventListener("click", () => {
  const isVisible = shareContent.style.visibility === "visible";
  shareContent.style.visibility = isVisible ? "hidden" : "visible";

  //shareButton.classList.toggle("focus"); //console.log(`Visibility: ${shareContent.style.visibility}`);
  console.log(`Visibility: ${shareButton.classList}`);
});
