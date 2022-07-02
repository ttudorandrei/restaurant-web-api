// first bit - create/target buttons
const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const container = document.getElementById("container");

// secont bit - logic
const returnHome = function () {
  console.log("Home");
};

const showMenu = function () {
  // empty container contents
  container.innerText = "";
};

// third bit - add event listeners
homeButton.addEventListener("click", returnHome);
menuButton.addEventListener("click", showMenu);
