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

// News - Slider Handling
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.cards-container');
  const indicators = document.querySelectorAll('.indicator-button');
  const leftButton = document.querySelector('.left-button');
  const rightButton = document.querySelector('.right-button');
  
  if (!slider || indicators.length === 0 || !leftButton || !rightButton) return; // Early return if elements are not found
  
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
              indicator.classList.add('bg-blue-500');
              indicator.classList.remove('bg-gray-300');
          } else {
              indicator.classList.remove('bg-blue-500');
              indicator.classList.add('bg-gray-300');
          }
      });
  };

  // Add scroll event listener to the slider
  slider.addEventListener('scroll', () => {
      window.clearTimeout(isScrolling);
      isScrolling = setTimeout(updateSlider, 66);
  });

  // Add click event listeners to indicators
  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
          slider.scrollTo({
              left: index * slider.clientWidth,
              behavior: 'smooth'
          });
      });
  });

  // Add click event listeners to left and right buttons
  leftButton.addEventListener('click', () => {
      const currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
      if (currentIndex > 0) {
          slider.scrollTo({
              left: (currentIndex - 1) * slider.clientWidth,
              behavior: 'smooth'
          });
      }
  });

  rightButton.addEventListener('click', () => {
      const currentIndex = Math.round(slider.scrollLeft / slider.clientWidth);
      if (currentIndex < indicators.length - 1) {
          slider.scrollTo({
              left: (currentIndex + 1) * slider.clientWidth,
              behavior: 'smooth'
          });
      }
  });
});
