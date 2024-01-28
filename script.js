
document.addEventListener("DOMContentLoaded", function () {
  fetchData();
});

function fetchData() {
  // Simulate fetching data from a server
  fetch('data.js')
    .then(response => response.text())
    .then(dataScript => {
      // Use the Function constructor to execute the script
      const dataModule = new Function(dataScript);

      // Extract the exported data
      const { productsData } = dataModule();

      // Display the product information
      displayProducts(productsData.products);
    })
    .catch(error => console.error('Error fetching data:', error));
}

function displayProducts(products) {
  const productsContainer = document.getElementById('productsContainer');

  products.forEach(product => {
    const productCard = document.createElement('div');
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

// document.addEventListener("DOMContentLoaded", function () {
//   fetch('data.js')
//    .then(response => console.log(response.json().products))
//    .then(data => console.log(data.products));
// });

// function displayProducts(productsData) {
//   const flexContainer = document.getElementById('flexContainer');

//   // Clear existing flex items
//   flexContainer.innerHTML = '';

//   // Create flex items for each data item
//   productsData.forEach(item => {
//       const flexItem = document.createElement('div');
//       flexItem.classList.add('flexItem');
//       flexItem.innerHTML = `
//           <p>ID: ${item.id}</p>
//           <p>Name: ${item.name}</p>
//           <!-- Add more content as needed -->
//       `;
//       flexContainer.appendChild(flexItem);
//   });
// }
