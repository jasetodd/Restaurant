function menuPage() {
  const content = document.querySelector("div#content");
  const h1 = document.createElement("h1");
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  const menu = document.getElementById("menu");
  menu.style.cssText = "font-size:1.1rem";

  const container = div;
  container.classList.add("menu-container");
  content.append(container);
  h1.id = "menu-heading";
  h1.textContent = "Menu";
  container.append(h1);

  const menuItems = {
    Pizza: [
      {
        name: "Margherita",
        description: "Tomato sauce, mozzarella, fresh basil and olive oil.",
        price: 10.5,
      },
      {
        name: "Pepperoni",
        description: "Tomato sauce, mozzarella and spicy pepperoni.",
        price: 12.5,
      },
      {
        name: "Four Cheese",
        description: "Mozzarella, gorgonzola, parmesan and ricotta.",
        price: 13,
      },
      {
        name: "Prosciutto & Rocket",
        description: "Mozzarella, prosciutto, fresh rocket and parmesan.",
        price: 14,
      },
    ],

    Pasta: [
      {
        name: "Spaghetti Bolognese",
        description: "Slow-cooked beef ragù, parmesan and fresh herbs.",
        price: 13.5,
      },
      {
        name: "Carbonara",
        description: "Spaghetti, pancetta, egg, pecorino and black pepper.",
        price: 14,
      },
      {
        name: "Creamy Mushroom Tagliatelle",
        description: "Wild mushrooms, garlic, cream and parmesan.",
        price: 13,
      },
    ],

    Desserts: [
      {
        name: "Tiramisu",
        description: "Espresso-soaked sponge, mascarpone and cocoa.",
        price: 7,
      },
      {
        name: "Chocolate Brownie",
        description: "Warm chocolate brownie served with vanilla ice cream.",
        price: 6.5,
      },
      {
        name: "Panna Cotta",
        description: "Vanilla panna cotta with seasonal berries.",
        price: 6,
      },
    ],
  };

  for (let i in menuItems) {
    console.log(i);
  }
}

// <div class="menu-container"> tick
//   <h1 id="menu-heading">Menu</h1> tick
//   <div class="menu">
//     <div class="cat">
//       <h3 class="fOoDcAt">Pizza</h3>
//       <h4>Margherita</h4>
//       <div class="description">Its a pizza.</div>
//     </div>
//     <div class="cat">
//       <h3>pasta</h3>
//       <h4>pasta item</h4>
//       <div class="description">Its pasta.</div>
//     </div>
//     <div class="cat">
//       <h3>pasta 2</h3>
//       <h4>pasta item</h4>
//       <div class="description">It duplicates!.</div>
//     </div>
//   </div>
// </div>

export default menuPage;
