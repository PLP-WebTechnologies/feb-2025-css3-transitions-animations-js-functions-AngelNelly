const button = document.getElementById("myButton");

// Load saved color from localStorage
const savedColor = localStorage.getItem("favoriteColor");
if (savedColor) {
  button.style.backgroundColor = savedColor;
}

button.addEventListener("click", () => {
  // Toggle color between orange and lightblue
  const newColor = button.style.backgroundColor === "orange" ? "lightblue" : "orange";
  button.style.backgroundColor = newColor;
  
  // Save new color to localStorage
  localStorage.setItem("favoriteColor", newColor);

  // Add spin animation class
  button.classList.add("spin-animation");

  // Remove spin animation after 4 seconds
  setTimeout(() => {
    button.classList.remove("spin-animation");
  }, 4000);
});
