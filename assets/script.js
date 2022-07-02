// first bit - create/target buttons
const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const container = document.getElementById("container");

const menu = [
  {
    id: 1205,
    uid: "de90e3e8-076c-4a5c-a447-87ab721945ae",
    dish: "Chilli con Carne",
    description:
      "Smoked salmon, poached eggs, diced red onions and Hollandaise sauce on an English muffin. With a side of roasted potatoes.",
    ingredient: "Butter",
    measurement: "3 gallon",
  },
  {
    id: 6009,
    uid: "eba4ff07-229f-4d28-87d7-b99eabd0a675",
    dish: "Massaman Curry",
    description:
      "Breaded fried chicken with waffles, and a side of maple syrup.",
    ingredient: "Pandanus Leaves",
    measurement: "1 pint",
  },
  {
    id: 664,
    uid: "cbc8d851-2320-4550-8a72-2898c454625e",
    dish: "Risotto with Seafood",
    description:
      "Thick slices of French toast bread, brown sugar, half-and-half and vanilla, topped with powdered sugar. With two eggs served any style, and your choice of smoked bacon or smoked ham.",
    ingredient: "Butter Beans",
    measurement: "2 pint",
  },
  {
    id: 3695,
    uid: "4e252218-8d30-493e-8a09-d8cda5828247",
    dish: "Fettuccine Alfredo",
    description:
      "Three egg omelet with Roquefort cheese, chives, and ham. With a side of roasted potatoes, and your choice of toast or croissant.",
    ingredient: "Goji Berry",
    measurement: "1 quart",
  },
  {
    id: 8069,
    uid: "708165e5-0fcd-43c6-baa7-5e8f5632aa8f",
    dish: "Philadelphia Maki",
    description:
      "Two butter croissants of your choice (plain, almond or cheese). With a side of herb butter or house-made hazelnut spread.",
    ingredient: "Baking Powder",
    measurement: "1/2 teaspoon",
  },
  {
    id: 8876,
    uid: "43e40d02-3959-48fa-a5d6-e30cb656c493",
    dish: "Cheeseburger",
    description:
      "Three eggs with cilantro, tomatoes, onions, avocados and melted Emmental cheese. With a side of roasted potatoes, and your choice of toast or croissant.",
    ingredient: "Green Pepper",
    measurement: "1 tablespoon",
  },
];

// trying to retrieve the favourite menu items from ls
const favouriteMenuItem = localStorage.getItem("faouriteMenuItems");

// if there's no favourite menu items in the local storage, create empty array and add it to LS
if (!favouriteMenuItem) {
  let favouriteMenuItemsArray = [];

  localStorage.setItem(
    "faouriteMenuItems",
    JSON.stringify(favouriteMenuItemsArray)
  );
}

// second bit - logic
const renderHome = function () {
  container.innerText = "";
  // create html tag
  const welcomeHeader = document.createElement("h3");
  // set the inner text of the html tag
  welcomeHeader.innerHTML = "Welcome to our restaurant";
  // add class for created html tag/element
  welcomeHeader.classList.add("welcome-message");

  container.appendChild(welcomeHeader);
};

window.onload = renderHome();

const addItemToFavourites = function (menuItem) {
  console.log(menuItem);
};

const renderMenu = function () {
  // empty container contents
  container.innerText = "";

  for (let index = 0; index < menu.length; index++) {
    const menuCard = document.createElement("div");
    menuCard.classList.add("card");

    const menuItemHeader = document.createElement("h4");
    const menuItemDescription = document.createElement("div");
    const menuItemIngredient = document.createElement("div");
    const menuItemMeasurement = document.createElement("div");
    const addToFavourites = document.createElement("button");

    menuItemHeader.innerHTML = menu[index].dish;
    menuItemDescription.innerHTML = menu[index].description;
    menuItemIngredient.innerHTML = menu[index].ingredient;
    menuItemMeasurement.innerHTML = menu[index].measurement;
    addToFavourites.innerHTML = "Add to favourites";

    addToFavourites.addEventListener("click", function () {
      addItemToFavourites(menu[index]);
    });

    container.appendChild(menuCard);
    menuCard.appendChild(menuItemHeader);
    menuCard.appendChild(menuItemDescription);
    menuCard.appendChild(menuItemIngredient);
    menuCard.appendChild(menuItemMeasurement);
    menuCard.appendChild(addToFavourites);
  }
};

// third bit - add event listeners
homeButton.addEventListener("click", renderHome);
menuButton.addEventListener("click", renderMenu);
