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
document.addEventListener('DOMContentLoaded', function() {
  const newsCards = document.getElementById('news-cards');
  const indicators = document.querySelectorAll('.indicator');
  let isScrolling;
  const threshold = 0.5; // Adjust this threshold as needed

  function updateIndicators(activeIndex) {
      indicators.forEach((indicator, index) => {
          if (index === activeIndex) {
              indicator.classList.add('active');
          } else {
              indicator.classList.remove('active');
          }
      });
  }

  function scrollToCard(index) {
      const cardWidth = newsCards.scrollWidth / indicators.length;
      const scrollPosition = cardWidth * index;
      newsCards.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
      });
      updateIndicators(index);
  }

  newsCards.addEventListener('scroll', function() {
      window.clearTimeout(isScrolling);

      isScrolling = setTimeout(function() {
          const cardWidth = newsCards.scrollWidth / indicators.length;
          const scrollPosition = newsCards.scrollLeft;
          const activeIndex = Math.round(scrollPosition / cardWidth);
          const nearestCardPosition = cardWidth * activeIndex;

          // Snap to the nearest card
          newsCards.scrollTo({
              left: nearestCardPosition,
              behavior: 'smooth'
          });

          updateIndicators(activeIndex);
      }, 100); // Adjust the debounce delay as needed
  });

  indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', function() {
          scrollToCard(index);
      });
  });

  // Initialize indicators on page load
  scrollToCard(0);
});
