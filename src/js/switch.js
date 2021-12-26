//переключатель

let checkbox = document.querySelector('.news__check-input');
let buttons = document.querySelectorAll('.news__title');
let news = buttons[0];
let actions = buttons [1]

checkbox.addEventListener('change', () => {
  news.classList.toggle('news__active-title');
  actions.classList.toggle('news__active-title');
})


//нажатие на "Новости" и на "Акции" переключает чекбокс
news.addEventListener('click', () => {
  checkbox.checked = false;
  news.classList.toggle('news__active-title');
  actions.classList.toggle('news__active-title');
})
actions.addEventListener('click', () => {
  checkbox.checked = true;
  news.classList.toggle('news__active-title');
  actions.classList.toggle('news__active-title');
})
