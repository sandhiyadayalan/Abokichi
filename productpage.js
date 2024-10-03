//get product image from home page
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the clicked image URL from localStorage
  var clickedImageUrl = localStorage.getItem("clickedImageUrl");
  if (clickedImageUrl) {
    // Create an image element with the clicked image URL
    var clickedImage = document.createElement("img");
    clickedImage.src = clickedImageUrl;
    // Display the clicked image in the clickedImageContainer
    var clickedImageContainer = document.getElementById(
      "clickedImageContainer"
    );
    clickedImageContainer.appendChild(clickedImage);
  } else {
    // If no clicked image URL is found, display a message
    var messageElement = document.createElement("p");
    messageElement.textContent = "No clicked image found.";
    document.body.appendChild(messageElement);
  }
});

//get product name from home page
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the name of the clicked image from localStorage
  var clickedImageName = localStorage.getItem("clickedImageName");
  if (clickedImageName) {
    // Display the name of the clicked image
    var clickedImageDetails = document.getElementById("clickedImageDetails");
    clickedImageDetails.textContent = clickedImageName;
  } else {
    // If no name is found, display a message
    var messageElement = document.createElement("p");
    messageElement.textContent = "No clicked image name found.";
    document.body.appendChild(messageElement);
  }
});

//get product price from home page
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the price of the clicked image from localStorage
  var clickedImagePrice = localStorage.getItem("clickedImagePrice");
  if (clickedImagePrice) {
    // Display the price of the clicked image
    var clickedImagePriceContainer = document.getElementById(
      "clickedImagePriceContainer"
    );
    clickedImagePriceContainer.textContent = clickedImagePrice;
  } else {
    // If no price is found, display a message
    var messageElement = document.createElement("p");
    messageElement.textContent = "No clicked image price found.";
    document.body.appendChild(messageElement);
  }
});
