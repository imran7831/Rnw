const products = [
  {
    id: 1,
    name: "Asus CPU",
    price: 3000,
    brand: "Asus",
    type: "CPU",
    stock: 5,
    image: "./assets/images/cpu.jpg",
    category: "Smartphone",
    description: "i9 14th gen , RTX 4090 , 2TB , 64GB Ram lag free gaming "
  },
  {
    id: 2,
    name: "Asus Moniter",
    price: 1000,
    brand: "Asus",
    type: "moniter",
    stock: 8,
    image: "./assets/images/moniter.jpg",
    category: "moniter",
    description: " 32inc gaming monitr "
  },
  {
    id: 3,
    name: "Red dragon Mouse",
    price: 100,
    brand: "Red dragon",
    type: "Mouse",
    stock: 20,
    image: "./assets/images/mouse.jpg",
    category: "Accessories",
    description: "Red dragon is best gaming mouse"
  },
  {
    id: 4,
    name: "Zebronics Headphone",
    price: 59,
    brand: "Zebronics",
    type: "Headphone",
    stock: 15,
    image: "./assets/images/headphone.jpg",
    category: "Accessories",
    description: "2 in 1 headphone wier less and wiered"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function loadProducts() {
  const productList = document.getElementById("product-list");
  if (!productList) return;

  productList.innerHTML = "";
  products.forEach(product => {
    productList.innerHTML += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="card h-100">
          <img src="${product.image}" class="card-img-top" alt="${product.name}">
          <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="text-muted">$${product.price}</p>
            <p><b>Brand:</b> ${product.brand}</p>
            <p><b>Type:</b> ${product.type}</p>
            <p><b>Stock:</b> ${product.stock}</p>
            <small class="text-muted">${product.description}</small>
            <button class="btn btn-primary mt-2 w-100" onclick="addToCart(${product.id})">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  });
  updateCartCount();
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = document.getElementById("cart-count");
  if (count) count.innerText = cart.length;
}

function loadCart() {
  const cartItems = document.getElementById("cart-items");
  if (!cartItems) return;

  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((item, index) => {
    total += item.price;
    cartItems.innerHTML += `
      <div class="card mb-2">
        <div>
          <h6>${item.name}</h6>
          <p class="text-muted">$${item.price}</p>
        </div>
        <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });
  document.getElementById("cart-total").innerText = total;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

document.addEventListener("DOMContentLoaded", () => {
  loadProducts();
  loadCart();
});
