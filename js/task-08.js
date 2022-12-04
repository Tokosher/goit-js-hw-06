const loginForm = document.querySelector('form.login-form');

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const {
        email: emailInput,
        password: passwordInput
    } = loginForm.elements;

    if (!emailInput.value || !passwordInput.value) {
        alert('Всі поля повинні бути заповнені');
        return;
    }

    console.log({
        [emailInput.name] : emailInput.value,
        [passwordInput.name] : passwordInput.value
    });

    loginForm.reset();
})
