const submitBtn = document.querySelector('.submit-btn');
const inputs = document.querySelectorAll('input[type=text], input[type=email], textarea');
const checkInput = document.querySelector('input[type=checkbox]');
const radioInputs = document.querySelectorAll('input[name=query]');
const dialog = document.querySelector('dialog');
const form = document.getElementById('contact-form');



submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const spanCheck = document.querySelector('#checkbox-error');
    const spanRadio = document.querySelector('#radio-error');
    for (const input of inputs) {
        input.classList.toggle('form-error-border', !input.checkValidity());
        input.nextElementSibling.classList.toggle('form-error-hide', !input.classList.contains('form-error-border'));
    }
    for (const radioInput of radioInputs) {
        spanRadio.classList.toggle('form-error-hide', radioInput.checkValidity());
    }
    spanCheck.classList.toggle('form-error-hide', checkInput.checkValidity());
    
    if (form.checkValidity()) {
        dialog.showModal();
    }
} )