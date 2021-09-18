let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let emailAddress = document.getElementById('emailaddress');
let password = document.getElementById('pWord');

const errorFname = document.querySelector('.error-fname');
const errorLname = document.querySelector('.error-lname');
const errorEmail = document.querySelector('.error-email');
const errorPword = document.querySelector('.error-password');

const errorIcon = document.querySelector('.error-icon');
const iconShake = document.querySelector('.shake-icon');

const btn = document.querySelector('.btn');
let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

btn.addEventListener('click', (e) => {
    if (firstName.value === '') {
        firstName.classList.add('error-icon', 'shake-icon');
        firstName.classList.remove('shake-icon');

        setTimeout(function() {
            firstName.classList.add('shake-icon');
        }, 5);

        firstName.placeholder = '';
        errorFname.style.display = 'block';
        firstName.style.borderColor = 'var(--red)';
    } else {
        firstName.classList.remove('error-icon');
        errorFname.style.display = 'none';
        firstName.style.borderColor = 'var(--grayishBlue)';
    }
    
    if (lastName.value === '') {
        lastName.classList.add('error-icon', 'shake-icon');
        lastName.classList.remove('shake-icon')

        setTimeout(function() {
            lastName.classList.add('shake-icon');
        }, 5);

        lastName.placeholder = '';
        errorLname.style.display = 'block';
        lastName.style.borderColor = 'var(--red)';
    } else {
        lastName.classList.remove('error-icon');
        errorLname.style.display = 'none';
        lastName.style.borderColor = 'var(--grayishBlue)';
    }

    if (!emailAddress.value.match(validRegex)) {
        emailAddress.classList.add('error-icon');
        emailAddress.classList.remove('shake-icon')

        setTimeout(function() {
            emailAddress.classList.add('shake-icon');
        }, 5);

        emailAddress.placeholder = '';
        errorEmail.style.display = 'block';
        emailAddress.style.borderColor = 'var(--red)';
    } else {
        emailAddress.classList.remove('error-icon');
        errorEmail.style.display = 'none';
        emailAddress.style.borderColor = 'var(--grayishBlue)';
    }


    if (password.value === '') {
        password.classList.add('error-icon');
        password.classList.remove('shake-icon')

        setTimeout(function() {
            password.classList.add('shake-icon');
        }, 5);

        password.placeholder = '';
        errorPword.style.display = 'block';
        password.style.borderColor = 'var(--red)';
    } else {
        password.classList.remove('error-icon');
        errorPword.style.display = 'none';
        password.style.borderColor = 'var(--grayishBlue)';
    }


    e.preventDefault();
});


// To remove error-msg & error-icon when user start typing

firstName.oninput = function() {
    firstName.classList.remove('error-icon');
    errorFname.style.display = 'none';
    
}

lastName.oninput = function() {
    lastName.classList.remove('error-icon');
    errorLname.style.display = 'none';
}

emailAddress.oninput = function() {
    emailAddress.classList.remove('error-icon');
    errorEmail.style.display = 'none';
}


password.oninput = function() {
    password.classList.remove('error-icon');
    errorPword.style.display = 'none';
}


// To change border-color when <input> no longer in focus

firstName.onchange = function() {     
    firstName.style.borderColor = 'var(--grayishBlue)';
    
}

lastName.onchange = function() {     
    lastName.style.borderColor = 'var(--grayishBlue)';
    
}


emailAddress.onchange = function() {     
    emailAddress.style.borderColor = 'var(--grayishBlue)';
    
}


password.onchange = function() {     
    password.style.borderColor = 'var(--grayishBlue)';
    
}


// To reset a value of <input> when page is reloaded

function reset() {
    firstName.value = '';
    lastName.value = '';
    emailAddress.value = '';
}

reset();

