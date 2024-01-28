// script.js
import { productsData } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
  // Display the product information
  displayProducts(productsData.products);
});

function displayProducts(products) {
  const productsContainer = document.getElementById('productsContainer');

  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('flex-item');
    productCard.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.description}</p>
      <p>Price: $${product.price.toFixed(2)}</p>
      <img src="${product.image}" alt="${product.title}" width="100">
      <hr>
    `;
    productsContainer.appendChild(productCard);
  });
}
