import { productsData } from './data.js';

document.addEventListener("DOMContentLoaded", function () {
    const productsContainer = document.getElementById('productsContainer');

    // Display products
    displayProducts(productsData.products);
});

function displayProducts(products) {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('productCard');

        productCard.innerHTML = `
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
            <p>Discounted Price: $${product.discounted_price}</p>
        `;

        productsContainer.appendChild(productCard);
    });
}