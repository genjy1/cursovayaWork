'use strict'
import {postData} from './postData.js'
import { toBase64 } from './base64.js';
const form = document.querySelector('#authorForm');

form.addEventListener('submit',async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const article = Object.fromEntries(formData);
    article.img = await toBase64(article.img)
    article.date = new Date()
    const isNews = form.querySelector('#news');
    
    if (isNews.checked) {
        postData('news', article);
    }else {
        postData('articles', article);
    }
    console.log(isNews);

})