const menuPage = () => {
  const contentContainer = document.querySelector("#content");
  contentContainer.innerHTML = "";
  contentContainer.classList.add('menu');

  const header = document.createElement("h1");
  header.innerHTML = "Delicious Mexican cuisine served right to you";
  contentContainer.appendChild(header);

  // Entradas
  const entradasSection = document.createElement("h2");
  entradasSection.innerText = "Entradas";
  contentContainer.appendChild(entradasSection);

  const dishOne = document.createElement("h3");
  dishOne.innerText = "chips & salsa [V] 14";
  contentContainer.appendChild(dishOne);

  const dishOneDetails = document.createElement('p');
  dishOneDetails.innerText = "corn tortilla chips, salsa roja, salsa verde";
  contentContainer.appendChild(dishOneDetails);

  const dishTwo = document.createElement("h3");
  dishTwo.innerText = "guacamole & chips [V] 18";
  contentContainer.appendChild(dishTwo);

  const dishTwoDetails = document.createElement('p');
  dishTwoDetails.innerText = 'hass avocado, serrano, cilantro, lime';
  contentContainer.appendChild(dishTwoDetails);

  // Tortilla Dishes
  const tortillaSection = document.createElement('h2');
  tortillaSection.innerText = 'Tortilla Dishes';
  contentContainer.appendChild(tortillaSection);

  const crabDish = document.createElement('h3');
  crabDish.innerText = 'crab empanadas with annatto seeds 40';
  contentContainer.appendChild(crabDish);

  const crabDishDeets = document.createElement('p');
  crabDishDeets.innerText = 'crab lumps, queso, masa, salsa roja, spinach rice, frijoles negros “refried beans”';
  contentContainer.appendChild(crabDishDeets);
};

export { menuPage };
