const slider = document.querySelector('.swiper-container');
const slider2 = document.querySelector('.swiper-container2');
const slider3 = document.querySelector('.swiper-container3');

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: '.next-slider1',
        prevEl: '.prev-slider1',
      },
      breakpoints: {
        992: {
          slidesPerView: 3,
          spaceBetween: 35,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        575: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 0,
          slidesPerView: 'auto',
        }
      }
});

const swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 0,
    navigation: {
        nextEl: '.next-slider2',
        prevEl: '.prev-slider2',
      },
    breakpoints: {
      993: {
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
});

const swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 3,
    spaceBetween: 92,
    navigation: {
        nextEl: '.next-slider3',
        prevEl: '.prev-slider3',
      },
    breakpoints: {
      993: {
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      576: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      }
    }
});