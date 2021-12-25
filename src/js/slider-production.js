//слайдер 2 - продукция Уралвес

//Смена карточек с описанием
function showSlide(element){
  let actualSlide = document.querySelector('.slider-production__show');
  actualSlide.classList.remove('slider-production__show');
  actualSlide.classList.add('slider-production__hidden');
  let findBlock = document.querySelector(`#${element}`);
  findBlock.classList.remove('slider-production__hidden');
  findBlock.classList.add('slider-production__show');
}
//Смена картинок для больших экранов
function showImage(element){
  let actualImage = document.querySelector('.slider-production__img-show');
  actualImage.classList.remove('slider-production__img-show');
  actualImage.classList.add('slider-production__img-hidden');

  let findBlock = document.querySelector(`#${element}`);
  findBlock.classList.remove('slider-production__img-hidden');
  findBlock.classList.add('slider-production__img-show');
}

//Смена картинок для мобильных экранов
function showMobileImage(element){
  let actualMobileImage = document.querySelector('.slider-production__mobileimg-show');
  actualMobileImage.classList.remove('slider-production__mobileimg-show');
  actualMobileImage.classList.add('slider-production__mobileimg-hidden');

  let findBlock = document.querySelector(`#${element}`);
  findBlock.classList.remove('slider-production__mobileimg-hidden');
  findBlock.classList.add('slider-production__mobileimg-show');
}

//пагинация
let pages = document.querySelectorAll('.slider-production__pagination-button');
pages.forEach((el) => {
  el.addEventListener('click', () => {
    let actualPage = document.querySelector('.slider-production__active-button');
    actualPage.classList.remove('slider-production__active-button');
    el.classList.add('slider-production__active-button');
    showSlide(`slider-production${el.textContent}`);
    showImage(`slider-production__img${el.textContent}`);
    showMobileImage(`slider-production__mobile-img${el.textContent}`)
  })
})

let arrows = document.querySelectorAll('.slider-production__arrow');
let prev = arrows[0];
let next = arrows[1];

// //кликаем вперед
next.addEventListener('click', () => {
  let actualNumberButton = document.querySelector('.slider-production__active-button').textContent;//номер активной кнопки
  let actualButton = document.querySelector('.slider-production__active-button');//активная кнопка пагинации
  actualButton.classList.remove('slider-production__active-button');//активная кнопка пагинации становится неактивной\

  let actualSlide = document.querySelector('.slider-production__show');//активный слайд
  actualSlide.classList.remove('slider-production__show');
  actualSlide.classList.add('slider-production__hidden');//активный слайд скрывается

  let actualImage = document.querySelector('.slider-production__img-show');
  actualImage.classList.remove('slider-production__img-show');
  actualImage.classList.add('slider-production__img-hidden');

  let actualMobileImage = document.querySelector('.slider-production__mobileimg-show');
  actualMobileImage.classList.remove('slider-production__mobileimg-show');
  actualMobileImage.classList.add('slider-production__mobileimg-hidden');

  let buttons = document.querySelectorAll('.slider-production__pagination-button')//все кнопки пагинации
  if (actualNumberButton<=buttons.length-1){//если номер кнопки<=длина массива кнопок-1
    let nextButton = buttons[actualNumberButton];//следующая кнопка
    nextButton.classList.add('slider-production__active-button');//следующая кнопка становится активной
    let findBlock = document.querySelector(`#slider-production${+actualNumberButton+1}`);//следующий блок
    findBlock.classList.remove('slider-production__hidden');
    findBlock.classList.add('slider-production__show')//следующий блок становится активным

    let findImage= document.querySelector(`#slider-production__img${+actualNumberButton+1}`);
    findImage.classList.remove('slider-production__img-hidden');
    findImage.classList.add('slider-production__img-show');

    let findMobileImage= document.querySelector(`#slider-production__mobile-img${+actualNumberButton+1}`);
    findMobileImage.classList.remove('slider-production__mobileimg-hidden');
    findMobileImage.classList.add('slider-production__mobileimg-show');

  } else {
    let nextButton = buttons[0];//следующая кнопка
    nextButton.classList.add('slider-production__active-button');//следующая кнопка становится активной
    let findBlock = document.querySelector('#slider-production1');//следующий блок
    findBlock.classList.remove('slider-production__hidden');
    findBlock.classList.add('slider-production__show');//следующий блок становится активным

    let findImage= document.querySelector(`#slider-production__img1`);
    findImage.classList.remove('slider-production__img-hidden');
    findImage.classList.add('slider-production__img-show');

    let findMobileImage= document.querySelector(`#slider-production__mobile-img1`);
    findMobileImage.classList.remove('slider-production__mobileimg-hidden');
    findMobileImage.classList.add('slider-production__mobileimg-show');
  }
})


//кликаем назад
prev.addEventListener('click', () => {
  let actualNumberButton = document.querySelector('.slider-production__active-button').textContent;//номер активной кнопки
  let actualButton = document.querySelector('.slider-production__active-button');//активная кнопка пагинации
  actualButton.classList.remove('slider-production__active-button');//активная кнопка пагинации становится неактивной
  let buttons = document.querySelectorAll('.slider-production__pagination-button')//все кнопки пагинации

  let actualSlide = document.querySelector('.slider-production__show');//активный слайд
  actualSlide.classList.remove('slider-production__show');
  actualSlide.classList.add('slider-production__hidden');//активным слайд становится неактивным

  let actualImage = document.querySelector('.slider-production__img-show');
  actualImage.classList.remove('slider-production__img-show');
  actualImage.classList.add('slider-production__img-hidden');

  if (actualNumberButton==1){//если активный слайд = 1
    let prevButton = buttons[buttons.length-1];
    prevButton.classList.add('slider-production__active-button');
    let findBlock = document.querySelector('#slider-production3');
    findBlock.classList.remove('slider-production__hidden');
    findBlock.classList.add('slider-production__show');

    let findImage= document.querySelector(`#slider-production__img3`);
    findImage.classList.remove('slider-production__img-hidden');
    findImage.classList.add('slider-production__img-show');

  } else {
    let prevButton = buttons[actualNumberButton-2];
    prevButton.classList.add('slider-production__active-button');
    let findBlock = document.querySelector(`#slider-production${+actualNumberButton-1}`);
    findBlock.classList.remove('slider-production__hidden');
    findBlock.classList.add('slider-production__show');

    let findImage= document.querySelector(`#slider-production__img${+actualNumberButton-1}`);
    findImage.classList.remove('slider-production__img-hidden');
    findImage.classList.add('slider-production__img-show');
  }
});
