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

const productID = JSON.parse(GFG_Fun()).productID;
const productObj = productsData.products.find(item => item.id == productID);
const submitButton = document.getElementById("submit-button");

document.addEventListener("DOMContentLoaded", function () {
    // Set the selected image in the product image container
    const productImageContainer = document.getElementById('selectedProductImage');
    const imgElement = document.createElement('img');
    const priceElement = document.getElementById("price");
    priceElement.textContent = `Product Price: $${productObj.discounted_price.toFixed(2)}`;
    imgElement.src = `../images/${productObj.image_file_name}`;
    imgElement.alt = productObj.title;
    productImageContainer.appendChild(imgElement);
});

submitButton.addEventListener("click", function() {
        // Add your form validation logic here
        const ccNumber = document.getElementById("ccNumber").value;
        const cardholderName = document.getElementById("cardholderName").value;
        const cvv = document.getElementById("cvv").value;
        const expirationDate = document.getElementById("expirationDate").value;
        // Validate credit card number
        if (!ccNumber.match(/\d{16}/)) {
            alert("Invalid credit card number. Please enter a 16-digit number.");
            return;
            }
        
            // Validate cardholder name
            if (!cardholderName.match(/[A-Za-z\s]+/)) {
                alert("Invalid cardholder name. Please use English-only characters.");
                return;
            }
        
            // Validate CVV
            if(!cvv.match(/\d{3}/)){
                alert("Invalid CVV. Please enter a 3-digit security code.");
                return;
            }
            
            // Validate expiration date
            if(expirationDate.match(/0[1-2]\/\b24/)){
                alert("Invalid expiration date. Please use MM/YY format with only valid future dates.");
                return;
            }
            
            if (!expirationDate.match(/(0[1-9]|1[0-2])\/\d{2}/)) {
                alert("Invalid expiration date. Please use MM/YY format with only valid future dates.");
                return;
            }
            window.location.href=`../thankYouPage/thankYouCard.html?productID=${productObj.id}`;
    });
