let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem('cart', JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

function displayCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <p><strong>${item.name}</strong> - ₱${item.price}</p>
      <button onclick="removeItem(${index})">Remove</button>
    `;
    cartItems.appendChild(div);
    total += item.price;
  });

  cartTotal.textContent = total;
}

function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  displayCart();
}

function checkout() {
  alert('Thank you for shopping with DAP CLOTHING!');
  cart = [];
  localStorage.setItem('cart', JSON.stringify(cart));
  window.location.href = 'index.html';
}

function submitForm(event) {
  event.preventDefault();
  alert('Message sent! We’ll get back to you soon.');
}

// Auto-load cart if on cart page
window.onload = () => {
  if (document.body.classList.contains('cart-page')) {
    displayCart();
  }
};