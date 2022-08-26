// Import
import throttle from 'lodash.throttle';

//
const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onFormSubmit);

saveData();
let data = {};

function onInputChange() {
  data.email = input.value;
  data.message = textarea.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function saveData() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  const parsedData = JSON.parse(savedData);
  if (savedData) {
    input.value = parsedData.email;
    textarea.value = parsedData.message;
    return parsedData;
  }
}

function onFormSubmit(e) {
  e.preventDefault();
  console.log(saveData());

  e.target.reset();
  localStorage.removeItem(STORAGE_KEY);
}
