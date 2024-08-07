// NavBar Toggle Handling
var menubar = document.querySelector(".menubar");
function toggle(e) {
  if (e.name == "menu-outline") {
    e.name = "close-outline";
    menubar.style.display = "Block";
    // menubar.classList.replace('top-[150vw]','left-0');
    // console.log('checked')
  } else {
    e.name = "menu-outline";
    // menubar.classList.replace('top-57','left-0');
    menubar.style.display = "none";
  }
}

// Image Slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".slider-container .flex");
  const slides = document.querySelectorAll(
    ".slider-container .flex .flex-shrink-0"
  );
  const indicators = document.querySelectorAll(".indicator-buttons button");

  // Set up event listeners for each indicator button
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      // Scroll to the corresponding slide
      slider.scrollTo({
        left: index * slider.clientWidth,
        behavior: "smooth",
      });

      // Update active indicator
      updateActiveIndicator(index);
    });
  });

  // Function to update the active indicator
  function updateActiveIndicator(index) {
    indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.remove("bg-gray-300");
        indicator.classList.add("bg-blue-500");
      } else {
        indicator.classList.remove("bg-blue-500");
        indicator.classList.add("bg-gray-300");
      }
    });
  }

  // Detect scrolling to update the active indicator
  slider.addEventListener("scroll", () => {
    let currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
    updateActiveIndicator(currentIndex);
  });

  // Initialize the first indicator as active
  updateActiveIndicator(0);
});
