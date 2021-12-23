//слайдер

function showSlide(element){
  let actualSlide = document.querySelector('.about-company__show');
  actualSlide.classList.remove('about-company__show');
  actualSlide.classList.add('about-company__hidden');
  let findBlock = document.querySelector(`#${element}`);
  findBlock.classList.remove('about-company__hidden');
  findBlock.classList.add('about-company__show');
}

//пагинация
let pages = document.querySelectorAll('.about-company__page')
pages.forEach((el) => {
  el.addEventListener('click', () => {
    let actualPage = document.querySelector('.about-company__active-page');
    actualPage.classList.remove('about-company__active-page');
    el.classList.add('about-company__active-page');
    showSlide(`slide${el.textContent}`);
  })
})

let arrows = document.querySelectorAll('.arrows__btn');
let prev = arrows[0];
let next = arrows[1];

//кликаем вперед
next.addEventListener('click', () => {
  let actualNumberButton = document.querySelector('.about-company__active-page').textContent;//номер активной кнопки
  let actualButton = document.querySelector('.about-company__active-page');//активная кнопка пагинации
  actualButton.classList.remove('about-company__active-page');//активная кнопка пагинации становится неактивной
  let actualSlide = document.querySelector('.about-company__show');//активный слайд
  actualSlide.classList.remove('about-company__show');
  actualSlide.classList.add('about-company__hidden');//активный слайд скрывается
  let buttons = document.querySelectorAll('.about-company__page')//все кнопки пагинации
  if (actualNumberButton<=buttons.length-1){//если номер кнопки<=длина массива кнопок-1
    let nextButton = buttons[actualNumberButton];//следующая кнопка
    nextButton.classList.add('about-company__active-page');//следующая кнопка становится активной
    let findBlock = document.querySelector(`#slide${+actualNumberButton+1}`);//следующий блок
    findBlock.classList.remove('about-company__hidden');
    findBlock.classList.add('about-company__show')//следующий блок становится активным
  } else {
    let nextButton = buttons[0];//следующая кнопка
    nextButton.classList.add('about-company__active-page');//следующая кнопка становится активной
    let findBlock = document.querySelector('#slide1');//следующий блок
    findBlock.classList.remove('about-company__hidden');
    findBlock.classList.add('about-company__show');//следующий блок становится активным
  }
})

//кликаем назад
prev.addEventListener('click', () => {
  let actualNumberButton = document.querySelectorAll('.about-company__active-page')[0].textContent;//номер активной кнопки
  let actualButton = document.querySelector('.about-company__active-page');//активная кнопка пагинации
  actualButton.classList.remove('about-company__active-page');//активная кнопка пагинации становится неактивной
  let buttons = document.querySelectorAll('.about-company__page')//все кнопки пагинации

  let actualSlide = document.querySelector('.about-company__show');//активный слайд
  actualSlide.classList.remove('about-company__show');
  actualSlide.classList.add('about-company__hidden');//активным слайд становится неактивным

  if (actualNumberButton==1){//если активный слайд = 1
    let prevButton = buttons[buttons.length-1];
    prevButton.classList.add('about-company__active-page');
    let findBlock = document.querySelector('#slide3');
    findBlock.classList.remove('about-company__hidden');
    findBlock.classList.add('about-company__show');
  } else {
    let prevButton = buttons[actualNumberButton-2];
    prevButton.classList.add('about-company__active-page');
    let findBlock = document.querySelector(`#slide${+actualNumberButton-1}`);
    findBlock.classList.remove('about-company__hidden');
    findBlock.classList.add('about-company__show');
  }
})

