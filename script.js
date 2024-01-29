import { productsData } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
  displayProducts(productsData.products);
});

function displayProducts(products) {
  const productsContainer = document.getElementById('productsContainer');
    products.forEach(product => {
      // Create elements using DOM manipulation
      const productCard = document.createElement('div');
      const titleElement = document.createElement('h6');
      const descriptionElement = document.createElement('p');
      const priceElement = document.createElement('p');
      const imageElement = document.createElement('img');
  
      // Set content and attributes
      productCard.classList.add ('flex-item');
      titleElement.textContent = product.title;
      descriptionElement.textContent = product.description;
      priceElement.textContent = `Price: $${product.price.toFixed(2)}`;
      imageElement.src = './images/${product.image}';
      imageElement.alt = product.title;
      //imageElement.width = 100;
  
      // Append elements to the product card
      productCard.appendChild(titleElement);
      productCard.appendChild(imageElement);
      productCard.appendChild(descriptionElement);
      productCard.appendChild(priceElement);
  
      // Append the product card to the container
      productsContainer.appendChild(productCard);
    });
  }
