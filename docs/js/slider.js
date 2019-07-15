'use strict';

(function () {
  const slides = document.querySelectorAll('.slider-slide');
  const buttons = document.querySelectorAll('.slider-controls__btn');  
  const active = 'slider-slide--active';

  for (let i = 0; i < slides.length; i++) {
    buttons[i].addEventListener('click', function (e) {
      const target = e.target;
       if (target === buttons[i]) {
        for (let j = 0; j < slides.length; j++) {
          slides[j].classList.remove(active);
        }

        slides[i].classList.add(active);        
       }         
    });
  }
})();