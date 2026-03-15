console.log("JS LINKED");

let shareButton = document.querySelector(".share-button");
let shareContent = document.querySelector(".share-content");
let mobileShareButton = document.querySelector(".mobile-share");
let footer = document.getElementById("footer");

function handleLayout() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 500) {
    mobileShareButton.style.visibility = "hidden";

    shareButton.onclick = () => {
      const isVisible = shareContent.style.visibility === "visible";
      shareContent.style.visibility = isVisible ? "hidden" : "visible";
    };
  } else {
    shareButton.onclick = () => {
      footer.style.display = "none";
      shareContent.style.display = "flex";

      const isVisible = shareContent.style.visibility === "visible";

      if (isVisible) {
        shareContent.style.visibility = "hidden";
        mobileShareButton.style.visibility = "hidden";
      } else {
        shareContent.style.visibility = "visible";
        mobileShareButton.style.visibility = "visible";
      }
    };

    mobileShareButton.onclick = () => {
      shareContent.style.display = "none";
      shareContent.style.visibility = "hidden";
      mobileShareButton.style.visibility = "hidden";
      footer.style.display = "flex";
      footer.style.visibility = "visible";
    };
  }
}

handleLayout();
window.addEventListener("resize", handleLayout);
