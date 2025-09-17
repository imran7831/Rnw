const products = [
  {
    id: 1,
    name: "Arabica Coffee",
    price: 300,
    type: "coffee",
    weight: "250g",
    stock: 10,
    image: "./image/arabica-coffee.png",
    category: "Premium",
    description: "Smooth arabica coffee.",
  },
  {
    id: 2,
    name: "Green Tea",
    price: 200,
    type: "tea",
    weight: "100g",
    stock: 15,
    image: "./image/green-tea.jpeg",
    category: "Organic",
    description: "Refreshing green tea.",
  },
  {
    id: 3,
    name: "Espresso Roast",
    price: 350,
    type: "coffee",
    weight: "250g",
    stock: 8,
    image: "./image/espresso-roast.webp",
    category: "Dark Roast",
    description: "Rich espresso roast.",
  },
  {
    id: 4,
    name: "Masala Chai",
    price: 180,
    type: "tea",
    weight: "150g",
    stock: 20,
    image: "./image/masala.jpg",
    category: "Spiced",
    description: "Indian masala chai.",
  },
];

let cart = [];

function renderProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";
  list.forEach((p) => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <p class="price">₹${p.price}</p>
      <p>${p.type} • ${p.weight}</p>
      <p>Stock: ${p.stock}</p>
      <button class="btn" onclick="addToCart(${p.id})">Add to Cart</button>
    `;
    container.appendChild(div);
  });
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;
  const item = cart.find((i) => i.id === id);
  if (item) {
    if (item.qty < product.stock) item.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartList");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  cartList.innerHTML = "";
  let total = 0,
    count = 0;

  cart.forEach((item) => {
    total += item.price * item.qty;
    count += item.qty;

    const card = document.createElement("div");
    card.className = "cart-card";
    card.innerHTML = `
      <div class="cart-info">
        <h4>${item.name}</h4>
        <p>₹${item.price} × ${item.qty} = <b>₹${item.price * item.qty}</b></p>
        <div class="qty-controls">
          <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="remove-btn" onclick="removeFromCart(${item.id})">×</button>
    `;
    cartList.appendChild(card);
  });

  if (cart.length === 0) cartList.textContent = "No items yet.";
  cartCount.textContent = count;
  cartTotal.textContent = total;
}

function changeQty(id, delta) {
  const item = cart.find((i) => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((i) => i.id !== id);
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter((i) => i.id !== id);
  updateCart();
}

document.getElementById("openCart").addEventListener("click", () => {
  document.getElementById("cartDrawer").classList.add("open");
});

document.getElementById("closeCart").addEventListener("click", () => {
  document.getElementById("cartDrawer").classList.remove("open");
});

document.getElementById("clearCart").addEventListener("click", () => {
  cart = [];
  updateCart();
});

renderProducts(products);
updateCart();
