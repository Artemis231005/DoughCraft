const recipes = [
  {
    name: "Lavender Dream Cupcake",
    img: "https://cdn-icons-png.flaticon.com/512/713/713329.png",
    desc: "Soft vanilla base with a hint of lavender frosting 💜"
  },
  {
    name: "Berry Bliss Cupcake",
    img: "https://cdn-icons-png.flaticon.com/512/713/713331.png",
    desc: "Blueberry and raspberry frosting for the perfect bite 🍓"
  },
  {
    name: "Lilac Swirl Cupcake",
    img: "https://cdn-icons-png.flaticon.com/512/713/713332.png",
    desc: "Whipped lilac cream and sprinkles of joy 🌸"
  }
];

function showRecipes() {
  const container = document.getElementById("recipe-container");
  container.innerHTML = "";
  recipes.forEach(recipe => {
    const card = document.createElement("div");
    card.className = "recipe-card";
    card.innerHTML = `
      <img src="${recipe.img}" alt="cupcake" />
      <h3>${recipe.name}</h3>
      <p>${recipe.desc}</p>
    `;
    container.appendChild(card);
  });
}

function sendMessage(e) {
  e.preventDefault();
  alert("Thanks for reaching out! We'll reply soon 💌");
}


