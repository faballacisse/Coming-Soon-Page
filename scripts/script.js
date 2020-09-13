//Accessing the DOM elements we'll use for this project

const form = document.querySelector('form');
const input = document.querySelector('input');
const button = document.querySelector('button');
const errorMessage = document.querySelector('span');
const errorIcon = document.querySelector('.main_text-section_form--img');

//Validating the form 

button.addEventListener('click', (e) => {
    let email = input.value;
    let isValid = validateEmail(email);

    if (!isValid) {
        e.preventDefault();
        input.style.border = '2px solid #F96464';
        errorMessage.style.display = 'block';
        errorIcon.style.display = 'initial';

    }
});