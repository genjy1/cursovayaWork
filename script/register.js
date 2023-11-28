'use strict'

const form = document.querySelector('#register')

export const register = () => {
    const form = document.querySelector('#register');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        formData.delete('repeatPassword')
        formData.delete('repeatEmail')
        const newUser = Object.fromEntries(formData);
        validator();
        localStorage.setItem('newUser', JSON.stringify(newUser));
    })
}