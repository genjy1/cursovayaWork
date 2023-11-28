'use strict'

import { getData } from "./getData.js";

const news = await getData('news');
const recentNewsData = news.at(-1);
const recentNews = document.querySelector('.news-recent');
const recentNewsLink = recentNews.querySelector('.recent-news_link');
const newsImg = recentNews.querySelector('.news-img');
const newsHeader = recentNews.querySelector('.news-header');

if (window.outerWidth < 426) {
    newsImg.style.width = '380px';
    recentNews.style.marginTop = '39px'
}else {
    newsImg.style.width = '1360px';
    recentNews.style.marginTop = '68px'
}


recentNewsLink.href = `article.html?news=true&id=${recentNewsData.id}`
newsImg.src = `${recentNewsData.img}`;

newsHeader.textContent = `${recentNewsData.name}`