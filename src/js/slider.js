import Swiper, {Navigation, Pagination} from 'swiper';

Swiper.use([Navigation, Pagination]);




const sliders = document.querySelectorAll('.swiper');
console.log(sliders)
if (sliders.length !== 0){
  sliders.forEach((slider) => {
    const mySwiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 20,

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
      on:{
        slideChange:function () {
          console.log(slider)//выдает все слайдеры, а не только тот, который листали
      },

    }});

    // mySwiper.on('slideChange', function () {
    //   console.log(slider)
    // })
    //событие изменения слайда
    // mySwiper.on('slideChange', function () => {
    //   const images = slider.querySelectorAll('.slider__img');//все картинки слайдера
    //   console.log('Картинки этого слайдера:', images)
    //   const array = slider.querySelectorAll('.swiper-pagination-bullet');//все кнопки пагинации
    //
    //   const activeBlock = slider.querySelector('.swiper-pagination-bullet-active');//активная кнопка
    //   let el = activeBlock.getAttribute('aria-label').slice(-1);
    //   let activeNumber = el - 1;//порядковый номер
    //   images.forEach((image, index) => {
    //     if (image.classList.contains('active-img')){
    //       image.classList.remove('active-img');
    //     };
    //   })
    //   images[activeNumber].classList.add('active-img')
    // })

  })

}

