
const bodyColor = document.querySelector("body")

function handleResize () {
  const windowSize = window.innerWidth;
  if (windowSize <= 600) {
    bodyColor.classList.add("changeblue");
    bodyColor.classList.remove("changepurple", "changeyellow");
} else if (windowSize > 600 && windowSize <= 800) {
    bodyColor.classList.remove("changeblue", "changeyellow");
    bodyColor.classList.add("changepurple");
} else {
    bodyColor.classList.remove("changepurple");
    bodyColor.classList.add("changeyellow");
  }
}

window.addEventListener("resize", handleResize);