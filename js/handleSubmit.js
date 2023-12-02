const handleSubmit = (event) => {
  event.preventDefault();
};

const button = document.querySelector('#submitButton');
button.addEventListener('click', handleSubmit);