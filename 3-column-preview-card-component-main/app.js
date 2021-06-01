const items = [
  {
    id: 1,
    name: "sedans",
    icon: "./images/icon-sedans.svg",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacatio and off-road adventures.",
  },

  {
    id: 2,
    name: "suvs",
    icon: "./images/icon-suvs.svg",
    text: "Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
  },
  {
    id: 3,
    name: "luxury",
    icon: "./images/icon-luxury.svg",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style.",
  },
];

const container = document.querySelector(".container");
let cars = items
  .map((item) => {
    return `
    <article class="item" id="${item.name}">
        <img src=${item.icon} alt="picture of suv" class="logo">
        <h2 class="title">${item.name}</h2>
        <p class="description">${item.text}</p>
        <button type="submit" class="btn-learn">Learn more</button>
      </article>
      `;
  })
  .join("");

container.innerHTML = cars;
