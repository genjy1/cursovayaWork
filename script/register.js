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
        // fetch('https://twisty-efficacious-archeology.glitch.me/users', {
        //     method:'POST',
        //     headers:{
        //         'Content-Type': 'application/json',
        //         'Allow':'GET, POST'
        //     },
        //     body:JSON.stringify(newUser),
        // })
        // fetch('http://localhost:3000/users').then(response => console.log(response.json()));
        validator();
        localStorage.setItem('newUser', JSON.stringify(newUser));
    })
}