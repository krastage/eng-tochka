const study = document.querySelector('#study');
const consult = document.querySelector('#consult');
const submitButton = document.querySelector('#submitButton');

// функция скроллинга к блоку с ценами
const scrollToStudy = () => {
  study.scrollIntoView({behavior: 'smooth'});
};

// функция скроллинга к блоку с формой
const scrollToConsult = () => {
  consult.scrollIntoView({behavior: 'smooth'});
};

// функция обработчик нажатия на кнопку отправить в форме
const onSubmit = (event) => {
  event.preventDefault();
};

submitButton.addEventListener('click', onSubmit);