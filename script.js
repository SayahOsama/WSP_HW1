import { productsData } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
  displayProducts(productsData.products);
});

function displayProducts(products) {
  const productsContainer = document.getElementById('productsContainer');
    products.forEach(product => {

      // Create elements using DOM manipulation
      const productCard = document.createElement('div');
      const pricesContainerElement = document.createElement('div');
      const titleElement = document.createElement('h3');
      const descriptionContainerElement = document.createElement('div');
      const descriptionElement = document.createElement('p');
      const priceElement = document.createElement('p');
      const discountedPriceElement = document.createElement('p');
      const imageElement = document.createElement('img');
      const moneySaved = document.createElement('p');
      const linkNextPageElement = document.createElement('a');
      
      //sending data to the next pages.
      const searchParams = new URLSearchParams(product);
      const queryString = searchParams.toString();

      // Set content and attributes
      pricesContainerElement.classList.add('product-prices');
      titleElement.classList.add ('product-title');
      titleElement.textContent = product.title;
      descriptionElement.textContent = `product description: ${product.description}`;
      descriptionContainerElement.classList.add('description');
      priceElement.classList.add('strikethrough');
      priceElement.textContent = `($${product.price.toFixed(2)})`;
      discountedPriceElement.textContent = `Price: $${product.discounted_price.toFixed(2)}`;
      imageElement.src = `./images/${product.image_file_name}`;
      imageElement.alt = product.title;
      linkNextPageElement.href = `./checkOutPage/checkOut.html?productID=${product.id}`;
      productCard.classList.add ('flex-item');
      productCard.style.setProperty('order', Math.floor(Math.random() * products.length));
      moneySaved.classList.add ('saved-money-background');
      moneySaved.textContent = `Save ${Math.floor((100*((product.price-product.discounted_price)/product.price)))}%`;
  
      // Append elements to the product card
      linkNextPageElement.appendChild(imageElement);
      pricesContainerElement.appendChild(discountedPriceElement);
      pricesContainerElement.appendChild(priceElement);
      descriptionContainerElement.appendChild(descriptionElement);
      productCard.appendChild(linkNextPageElement);
      productCard.appendChild(descriptionContainerElement);
      productCard.appendChild(titleElement);
      productCard.appendChild(pricesContainerElement);
      productCard.appendChild(moneySaved);
  
      // Append the product card to the container
      productsContainer.appendChild(productCard);
    });
  }