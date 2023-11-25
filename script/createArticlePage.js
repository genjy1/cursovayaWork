'use strict'

import { getData } from "./getData.js"

const setId = () => {

    if (location.href.includes('news=true')) {
        const id = location.href.slice(48)
        return id
    }else if(location.href.includes('news=true') && location.href.includes('genjy1.github.io')){
        const id = location.href.slice(65);
        return id 
    }

    if (location.href.includes('127.0.0.1:5500')) {
        const id = location.href.slice(38);
        return id    
    }else if(location.href.includes('genjy1.github.io')){
        const id = location.href.slice(55);
        return id 
    }
}


export const renderArticlePage = async() => {
    const title = document.querySelector('title')
    const main = document.querySelector('.main');
    const id = setId()
    let data 
    if (!location.href.includes('news')) {
        data = await getData(`articles/${id}`)
    }else{
        data = await getData(`news/${id}`)
    }
    const article = data
    const articlesWrapper = document.createElement('article');
    const articleTitle = document.createElement('h1');
    const articleAuthor = document.createElement('a');
    const articleImage = document.createElement('img');
    const articleText = document.createElement('p');
    
    title.textContent = 'ESNHub' + ' | ' + article.name;
    articlesWrapper.classList.add('article__wrapper');
    articleTitle.classList.add('article-title');
    articleAuthor.classList.add('article-author');
    articleAuthor.classList.add('link');
    articleImage.classList.add('article-image');
    articleText.classList.add('article-text');

    articleText.innerHTML = article.text
    articleImage.src = article.img
    articleAuthor.href = `https://x.com/${article.author}`
    articleAuthor.textContent = article.author;
    articleTitle.textContent = article.name;
    articlesWrapper.append(articleTitle, articleAuthor,articleImage, articleText);
    main.append(articlesWrapper);
}
renderArticlePage()
