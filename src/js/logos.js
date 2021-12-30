import Swiper from 'swiper';

const sliders = document.querySelectorAll('.swiper-companies');
if (sliders.length !== 0){
  sliders.forEach((slider) => {
    const container = slider.querySelector('.swiper-logos');
    const mySwiper = new Swiper(container, {
        loop: true,
        slidesPerView: 9,//Количество слайдов на просмотр (слайды, видимые одновременно на контейнере ползунка).
        spaceBetween: 30,//расстояние между слайдами

        slidesOffsetAfter:0,
        freeMode: true,
        speed:5000,
        autoplay:true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    })

  }
  )
}

