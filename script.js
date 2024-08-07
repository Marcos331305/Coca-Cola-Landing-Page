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
document.addEventListener('DOMContentLoaded', () => {
    // Function to handle slider logic
    const initializeSlider = (selector) => {
        const slider = document.querySelector(selector);
        const indicators = document.querySelectorAll(`${selector} ~ .indicator-buttons .indicator-button`);
        
        if (!slider || indicators.length === 0) return; // Early return if elements are not found
        
        let isScrolling;
        
        // Function to update the active indicator and snap to the closest slide
        const updateSlider = () => {
            const index = Math.round(slider.scrollLeft / slider.clientWidth);
            slider.scrollTo({
                left: index * slider.clientWidth,
                behavior: 'smooth'
            });

            indicators.forEach((indicator, i) => {
              if (i === index) {
                indicator.classList.remove("bg-gray-300");
                 indicator.classList.add("bg-blue-500");
               } else {
                 indicator.classList.remove("bg-blue-500");        
                 indicator.classList.add("bg-gray-300");
               }
         });
        };

        slider.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            isScrolling = setTimeout(() => {
                updateSlider();
            }, 150);
        });

        indicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                slider.scrollTo({
                    left: index * slider.clientWidth,
                    behavior: 'smooth'
                });
            });
        });

        updateSlider(); // Initial update
    };

    // Initialize sliders for both small and large screens
    initializeSlider('.xl\\:hidden .slides'); // Small screen slider
    initializeSlider('.xl\\:block .slides'); // Large screen slider
});
