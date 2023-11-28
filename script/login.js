'use strict'

import {getData} from './getData.js'

export const login = async(user) => {

    const users = await getData('users');

    const checkUser = (e) => {
        if (e.password == user.password && e.email == user.email && e.admin == "true") {
            localStorage.setItem('logged', true);
            localStorage.setItem('admin', true)
            location.href = './admin.html';
            return
        }else {
            console.log('Введены неправильные данные');
        }
        if (e.password == user.password && e.email == user.email && e.author == "true") {
            localStorage.setItem('logged', true);
            location.href = './author.html'
            return
        }else {
            console.log('Введены неправильные данные');
        }
        if (e.password == user.password && e.email == user.email) {
            localStorage.setItem('logged', true);
            location.href = `./profile.html?id=${e.id}`
            
            return
        }else{
            console.log('Введены неправильные данные');
        }
    }
    users.some(e => {checkUser(e)})

}