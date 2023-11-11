'use strict'

import { getData } from "./getData.js"

export const renderArticlePage = async() => {
    const title = document.querySelector('title')
    const id = location.href.slice(39);
    const main = document.querySelector('.main');
    // const titleHeader = document.createElement('header');
    const article = await getData(`articles/${id}`);
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

    console.log(id);
}
renderArticlePage()
