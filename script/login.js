'use strict'

import {getData} from './getData.js'

export const login = async(user) => {

    const users = await getData('users');
    const checkUser = (e) => {
        if (e.password == user.password && e.email == user.email && e.admin == true) {
            localStorage.setItem('logged', true);
            localStorage.setItem('admin', true)
            location.href = './admin.html';
            return true
        }else {
            console.log('Введены неправильные данные');
        }
        if (e.password == user.password && e.email == user.email && e.author == true) {
            localStorage.setItem('logged', true);
            location.href = './author.html'
            return true
        }else {

        }
        if (e.password == user.password && e.email == user.email) {
            localStorage.setItem('logged', true);
            location.href = './profile.html'
            return true
        }
    }
    users.some(e => checkUser(e))

}