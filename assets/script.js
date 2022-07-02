// first bit - create/target buttons
const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const container = document.getElementById("container");

// second bit - logic
const renderHome = function () {
  // create html tag
  const welcomeHeader = document.createElement("h3");
  // set the inner text of the html tag
  welcomeHeader.innerHTML = "Welcome to our restaurant";
  // add class for created html tag/element
  welcomeHeader.classList.add("welcome-message");

  container.appendChild(welcomeHeader);
  // container.appendChild(openingTimes);
};

window.onload = renderHome();

const showMenu = function () {
  // empty container contents
  container.innerText = "";
};

// third bit - add event listeners
homeButton.addEventListener("click", renderHome);
menuButton.addEventListener("click", showMenu);
