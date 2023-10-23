'use strict'
const wasLog = localStorage.getItem('loggedIn')

const createModal = () => {
    const modal = '<div class="modal"><div class="modal__wrapper"><header class="modal__header"><h1 class="modal-heading heading">ESNHub</h1><div class="modal-exit"><img src="./image/cross.svg" alt="Закрыть модальное окно" class="exit-img"></div></header><form id="formModal"><div class="input__wrapper"><input type="email" name="email" id="email" placeholder="Введите email" class="modal-input input" autocomplete="email"><input type="password" name="password" id="password" placeholder="Введите пароль" class="modal-input input" autocomplete="current-password"></div><input type="submit" value="Войти" class="modal-input input"></form><p class="register">У меня нет аккаунта. <a class="register-link link" href="./register.html">Создать</a></p></div></div>'

    document.body.insertAdjacentHTML('afterbegin', modal)
}

const validateModal = () => {
    const modal = document.querySelector('.modal-active')
    
}

const controlModal = () => {
    const form = document.querySelector('#formModal');
    const login = document.querySelector('.login-btn');
    const modal = document.querySelector('.modal');
    const cross = document.querySelector('.exit-img')
    login.addEventListener('click', () => {
        modal.classList.remove('modal');
        modal.classList.add('modal-active')
    })

    cross.addEventListener('click', () => {
        modal.classList.remove('modal-active');
        modal.classList.add('modal');
        form.reset();
    })

    window.addEventListener('click', ({target}) => {
        if (target.classList.contains('overlay')) {
            modal.classList.remove('modal-active');
            modal.classList.add('modal')
        }
    } )

    form.addEventListener('submit', e => {
        e.preventDefault();
        localStorage.setItem('loggedIn',true)
        modal.classList.remove('modal-active')
        modal.classList.add('modal')
        form.reset();
    })

    if(wasLog) {
        login.textContent = 'Выйти'
        login.removeEventListener('click', () =>{})
    }
}

export { controlModal,createModal,validateModal }