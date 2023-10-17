'use strict'

export const createArticle = (id) => {
    const main = document.querySelector('.main')
    const articleWrapper = document.createElement('a');
    const imageWrapper = document.createElement('div');
    const textWrapper = document.createElement('div');
    const articleImage = document.createElement('img');
    const articleName = document.createElement('h2');
    const articleSnippet = document.createElement('p');
    const authorWrapper = document.createElement('div');
    const authorSocialsLink = document.createElement('a');
    const authorSocialImage = document.createElement('img');

    articleWrapper.classList.add('article__wrapper');
    imageWrapper.classList.add('article__image-wrapper');
    textWrapper.classList.add('article__text-wrapper');
    articleImage.classList.add('image__wrapper-img');
    articleName.classList.add('article__text-name');
    articleSnippet.classList.add('article__text-snippet');
    authorWrapper.classList.add('article__text_author-wrapper');
    authorSocialsLink.classList.add('author-link');
    authorSocialImage.classList.add('author-link_image');

    articleWrapper.dataset.id = id;
    articleWrapper.href = `article.html?=${id}`
    articleImage.src = `./image/${id}.png`

    authorSocialsLink.append(authorSocialImage);
    authorWrapper.append(authorSocialsLink);
    textWrapper.append(articleName, articleSnippet, authorWrapper);
    imageWrapper.append(articleImage);
    articleWrapper.append(imageWrapper, textWrapper);

    main.append(articleWrapper)
}