let firstName = document.getElementById('firstname');
const errorFname = document.querySelector('.error-fname');
const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
    firstName.classList.add('error-icon');
    errorFname.style.display = 'block';

    e.preventDefault();
});