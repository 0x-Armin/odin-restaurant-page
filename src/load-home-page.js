import mexicanFood from "../asset/mexican-food.jpg";

const homePage = () => {
  const contentContainer = document.querySelector("#content");
  contentContainer.innerHTML = '';

  const foodImg = new Image();
  foodImg.src = mexicanFood;
  foodImg.classList.add('background-img')
  contentContainer.appendChild(foodImg);

  const header = document.createElement("h1");
  header.innerHTML = "Welcome to Sabroso Restaurant!";
  header.classList.add('header')
  contentContainer.appendChild(header);

  const copy = document.createElement("p");
  copy.innerText =
    "Mexican food is more than tacos. Over here at Sabroso Restaurant, we serve diverse and tasty Mexican cuisine.";
  copy.classList.add('copy');
  contentContainer.appendChild(copy);
};

export { homePage };