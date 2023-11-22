'use strict'

import {getData} from './getData.js'

export const login = async() => {

    const users = await getData('users');

    const loginModal = document.querySelector('.modal-active');

    console.log(users);
    console.log(loginModal);
}