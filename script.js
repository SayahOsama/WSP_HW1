
document.addEventListener("DOMContentLoaded", function () {
  fetch()
  .then(response =>{ return response.json()})
  .then(productsData =>displayProducts(productsData.products));
});

function displayProducts(productsData) {
  const flexContainer = document.getElementById('flexContainer');

  // Clear existing flex items
  flexContainer.innerHTML = '';

  // Create flex items for each data item
  productsData.forEach(item => {
      const flexItem = document.createElement('div');
      flexItem.classList.add('flexItem');
      flexItem.innerHTML = `
          <p>ID: ${item.id}</p>
          <p>Name: ${item.name}</p>
          <!-- Add more content as needed -->
      `;
      flexContainer.appendChild(flexItem);
  });
}
