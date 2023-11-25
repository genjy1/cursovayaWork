'use strict'
import {postData} from './postData.js'
const form = document.querySelector('#authorForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const article = Object.fromEntries(formData);
    const newsLabel = form.querySelector('.news-label')
    const isNews = form.querySelector('#news');

    console.log(newsLabel);

    if (isNews.checked) {
        postData('news', article);
    }else {
        postData('articles', article);
    }

    

    console.log(isNews);

})