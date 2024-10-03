// Function to toggle between login and registration forms
function toggleForm() {
  var loginFormContainer = document.getElementById("loginFormContainer");
  var registerFormContainer = document.getElementById("registerFormContainer");
  var toggleFormButton = document.getElementById("toggleFormButton");

  if (registerFormContainer.style.display === "none") {
    loginFormContainer.style.display = "none";
    registerFormContainer.style.display = "block";
    toggleFormButton.textContent = "Already have an account? Login here";
  } else {
    loginFormContainer.style.display = "block";
    registerFormContainer.style.display = "none";
    toggleFormButton.textContent = "New User? Register here";
  }
}

// Function to toggle the login modal
function toggleLoginModal() {
  var modal = document.getElementById("loginModal");
  modal.style.display = modal.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", function () {
  // Login form submission
  var loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;
    // Perform login authentication here
    console.log("Login - Username:", username);
    console.log("Login - Password:", password);
    // Close the modal after login attempt
    toggleLoginModal();
    // Display the logged-in username
    document.getElementById("loggedInUsername").textContent =
      "Welcome, " + username;
    document.getElementById("loggedInUsername").style.display = "block";
    // Hide the login/register button container
    document.getElementById("loginButtonContainer").style.display = "none";
  });

  // Registration form submission
  var registerForm = document.getElementById("registerForm");
  registerForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("registerUsername").value;
    var password = document.getElementById("registerPassword").value;
    // Perform user registration here
    console.log("Registration - Username:", username);
    console.log("Registration - Password:", password);
    // Close the modal after registration
    toggleLoginModal();
    // Display the registered username
    document.getElementById("loggedInUsername").textContent =
      "Welcome, " + username;
    document.getElementById("loggedInUsername").style.display = "block";
    // Hide the login/register button container
    document.getElementById("loginButtonContainer").style.display = "none";
  });
});

//productCount display at home page
document.addEventListener("DOMContentLoaded", function () {
  let products = document.querySelectorAll(".product");
  let countElement = document.getElementById("productCount");
  updateProductCount();

  function updateProductCount() {
    countElement.textContent = products.length;
  }
});

//copy product image to productpage.html
document.addEventListener("DOMContentLoaded", function () {
  var imageElements = document.querySelectorAll(".productImg");
  imageElements.forEach(function (imageElement) {
    imageElement.addEventListener("click", function () {
      // Get the source of the clicked image
      var clickedImageUrl = imageElement.src;
      // Store the clicked image URL in localStorage
      localStorage.setItem("clickedImageUrl", clickedImageUrl);
      var clickedImageName = imageElement.getAttribute("data-name");
      //       // Store the name of the clicked image in localStorage
      localStorage.setItem("clickedImageName", clickedImageName);
      // Redirect to the second page

      var clickedImagePrice = imageElement.getAttribute("data-price");
      //       // Store the price of the clicked image in localStorage
      localStorage.setItem("clickedImagePrice", clickedImagePrice);
      window.location.href = "productpage.html";
    });
  });
});

//copy product name to productpage.html
document.addEventListener("DOMContentLoaded", function () {
  var imageElements = document.querySelectorAll(".productImg");
  imageElements.forEach(function (imageElement) {
    imageElement.addEventListener("click", function () {
      // Get the name of the clicked image
      var clickedImageName = imageElement.getAttribute("data-name");
      // Store the name of the clicked image in localStorage
      localStorage.setItem("clickedImageName", clickedImageName);
      // Redirect to the second page
      window.location.href = "productpage.html";
    });
  });
});

// //copy product price to productpage.html
// document.addEventListener("DOMContentLoaded", function () {
//   var imageElements = document.querySelectorAll(".productImg");
//   imageElements.forEach(function (imageElement) {
//     imageElement.addEventListener("click", function () {
//       // Get the price of the clicked image
//       var clickedImagePrice = imageElement.getAttribute("data-price");
//       // Store the price of the clicked image in localStorage
//       localStorage.setItem("clickedImagePrice", clickedImagePrice);
//       // Redirect to the second page
//       window.location.href = "productpage.html";
//     });
//   });
// });
