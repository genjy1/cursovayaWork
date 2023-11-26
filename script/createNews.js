'use strict'
export {renderNews } 
const createNews = (news) => `
    <a href="article.html?news=true&id=${news.id}" class="content-link link" data-id="${news.id}">
        <div class="img-container">
            <img src="${news.img}" alt="" class="container-img">
        </div>
        <div class="text__container">
            <h2 class="text-header">
                ${news.name}
            </h2>
            <p class="text-preview">${news.text.slice(0,75) + '...'}</p>
            <a href="twitter.com/${news.author}" class="author-link link">${news.author}</a>
        </div>
    </a>`;

const createCards = (data) => 
    data.map(news => {
        const li = document.createElement('li');
        li.classList.add("cards__item");
        li.insertAdjacentHTML("beforeend", createNews(news));
        return li;
    });


const renderNews = (data) => {
    const main = document.querySelector('.main');
    main.textContent = "";
    const cards = createCards(data);
    main.append(...cards);
}

