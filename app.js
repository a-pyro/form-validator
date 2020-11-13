// get reference to all the elements
const form = document.querySelector('#form');
const username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const password2 = document.querySelector('#password2');

// functions
function showError(input, message) {
    // take the form control to change the css class
    const formControl = input.parentElement;
    formControl.classList.add('error');
    const small = formControl.querySelector('small');
    small.innerText = message;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.classList.add('success');
}

// event listeners
form.addEventListener('submit', (e) => {
    // console.log('submit'); without preventDefault, we cant log nothing because the form submits and reset
    // prevent default submitting behavior => submit & reset form
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
});
