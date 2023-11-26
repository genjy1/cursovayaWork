'use strict'

const createArticle = (article) => `
    <a class="content-link link article__wrapper" data-id="${article.id}" href="article.html?id=${article.id}">
	<div class="img-container article__image-wrapper">
		<img class="container-img image__wrapper-img" src="${article.img}">
    </div>
	<div class="text__container article__text-wrapper">
		<h2 class="text-header article__text-name">${article.name}</h2>
		<p class="text-preview article__text-snippet">${article.text.slice(0,75) + '...'}</p>
	<div class="article__text_author-wrapper">
		<a class="author-link link" href="twitter.com/${article.author}">${article.author}</a>
	</div>
</a>`;

const createCards = (data) => 
    data.map(articles => {
        const li = document.createElement('li');
        li.classList.add("cards__item");
        li.insertAdjacentHTML("beforeend", createArticle(articles));
        return li;
    });


export const renderArticle = (data) => {
    const main = document.querySelector('.main');
    main.textContent = "";
    const cards = createCards(data);
    main.append(...cards);
}
/* 
    <a class="article__wrapper" data-id="" href="">
	<div class="article__image-wrapper">
		<img class="image__wrapper-img" src=""></div>
	<div class="article__text-wrapper">
		<h2 class="article__text-name"></h2>
		<p class="article__text-snippet"></p>
	<div class="article__text_author-wrapper">
		<a class="author-link" href=""></a>
	</div>
</a>
*/