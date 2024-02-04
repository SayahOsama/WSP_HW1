import { productsData } from '../data.js';


function GFG_Fun() {
  let search = window.location.href;
  search = search.split("?")[1];
  return '{"' +
    decodeURI(search)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"') +
  '"}'
}

document.addEventListener("DOMContentLoaded", function () {
  //get the product details container.
  const productDetailsElement = document.getElementById('product-details');

  //getting the data id from the URL and then fetching the obj.
  const productID = JSON.parse(GFG_Fun()).productID;
  const productObj = productsData.products.find(item => item.id == productID);

  //create the product details' elements.
  const imageElement = document.createElement('img');
  const titleElement = document.createElement('h2');
  const descriptionElement = document.createElement('p');

  //set content and attributes.
  imageElement.src = `../images/${productObj.image_file_name}`;
  imageElement.alt = productObj.title;
  titleElement.textContent = `${productObj.title}`;
  descriptionElement.textContent = `product description: ${productObj.description}`;
  imageElement.classList.add("thank-you-image");
  // Append elements to the product details' element.
  productDetailsElement.appendChild(imageElement);
  productDetailsElement.appendChild(titleElement);
  productDetailsElement.appendChild(descriptionElement);
});