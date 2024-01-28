
document.addEventListener("DOMContentLoaded", function () {
  fetch('data.js')
   .then(response => response.text())
   .then(dataScript => {
    // Use the Function constructor to execute the script
    const dataModule = new Function(dataScript);
    
    // Extract the exported data
    const { productsData } = dataModule();
    
    // Use the productsData object as needed
    console.log(productsData.products);
  });
});

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
