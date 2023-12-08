let cartItems = [];

function showProducts() {
  document.getElementById('products').style.display = 'block';
  document.getElementById('cart').style.display = 'none';
  document.getElementById('checkout').style.display = 'none';
}

function showCart() {
  document.getElementById('products').style.display = 'none';
  document.getElementById('cart').style.display = 'block';
  document.getElementById('checkout').style.display = 'none';
  displayCartItems();
}

function showCheckoutForm() {
  document.getElementById('products').style.display = 'none';
  document.getElementById('cart').style.display = 'none';
  document.getElementById('checkout').style.display = 'block';
}

function addToCart(productName, productPrice) {
  cartItems.push({ name: productName, price: productPrice });
  displayCartItems();
}

function displayCartItems() {
  const cartList = document.getElementById('cart-items');
  const totalElement = document.getElementById('total');
  cartList.innerHTML = '';
  let total = 0;

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(listItem);
    total += item.price;
  });

  totalElement.textContent = total.toFixed(2);
}

function completePurchase() {
  // Perform additional logic (e.g., send order to server, process payment, etc.)
  alert('Purchase completed successfully!');
  cartItems = [];
  showProducts();
}