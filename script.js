let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let emailAddress = document.getElementById('emailaddress');
let password = document.getElementById('pWord');

const errorFname = document.querySelector('.error-fname');
const errorLname = document.querySelector('.error-lname');
const errorEmail = document.querySelector('.error-email');
const errorPword = document.querySelector('.error-password');


const btn = document.querySelector('.btn');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener('click', (e) => {
    if (firstName.value === '') {
        firstName.classList.add('error-icon');
        firstName.placeholder = '';
        errorFname.style.display = 'block';
        firstName.style.borderColor = 'var(--red)';
    } else {
        firstName.classList.remove('error-icon');
        errorFname.style.display = 'none';
        // firstName.style.borderColor = 'var(--grayishBlue)';
    }
    
    if (lastName.value === '') {
        lastName.classList.add('error-icon');
        lastName.placeholder = '';
        errorLname.style.display = 'block';
        lastName.style.borderColor = 'var(--red)';
    } else {
        lastName.classList.remove('error-icon');
        errorLname.style.display = 'none';
    }

    if (!emailAddress.value.match(validRegex)) {
        emailAddress.classList.add('error-icon');
        emailAddress.placeholder = '';
        errorEmail.style.display = 'block';
        emailAddress.style.borderColor = 'var(--red)';
    } else {
        emailAddress.classList.remove('error-icon');
        errorEmail.style.display = 'none';
    }

    if (password.value === '') {
        password.classList.add('error-icon');
        password.placeholder = '';
        errorPword.style.display = 'block';
        password.style.borderColor = 'var(--red)';
    } else {
        password.classList.remove('error-icon');
        errorPword.style.display = 'none';
    }


    e.preventDefault();
});

function reset() {
    firstName.value = '';
    lastName.value = '';
    emailAddress.value = '';
}

reset();

// firstName.oninput = function() {
//     firstName.classList.remove('error-icon');
//     // errorFname.style.display = 'none';
//     // e.preventDefault();
// }