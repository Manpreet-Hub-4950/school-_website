
// School website welcome message

window.addEventListener("load", function () {
  console.log("Welcome to PM SHRI GSSS DHANDRA!");
});

// Smooth navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener("click", function () {
    console.log("School website navigation opened");
  });
});
