const navOpen = document.querySelector(".icon");
const navClose = document.querySelector(".close-btn-wrapper");
const menuElement = document.querySelector(".menu");
const linksAction = menuElement.querySelectorAll("a");

navOpen.addEventListener("click", function () {
  menuElement.classList.remove("hidden");
});

navClose.addEventListener("click", function () {
  menuElement.classList.add("hidden");
});

linksAction.forEach((node) => {
  node.onclick = function () {
    menuElement.classList.add("hidden");
  };
});
