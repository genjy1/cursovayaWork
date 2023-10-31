'use strict'
import { createBanner } from "./script/genBanner.js";
import { createFooter } from "./script/footer.js";
import { renderArticle } from "./script/createArticle.js";
import { createStatsRow } from "./script/createStatsRow.js";
import { controlModal, createModal } from "./script/modal.js";
import { register } from "./script/register.js";
import { renderNews,  } from "./script/createNews.js";
import { getData } from "./script/getData.js";

const date = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}


// const articles = [
//   {
//     id:1,
//     image:'1.png',
//     articleName: 'Counter-Strike 2 is released',
//     articleGame: 'CS2',
//     gameIcon: './image/icon.png',
//     date: `${date.toLocaleString('en-US', options)}`,
//   },
//   {
//     id:2,
//     image:'1.png',
//     articleName: 'Counter-Strike 2 is released',
//     articleGame: 'CS2',
//     gameIcon: './image/icon.png',
//     date:`${date.toLocaleString('en-US', options)}`
//   },
//   {
//     id:3,
//     image:'1.png',
//     articleName: 'Counter-Strike 2 is released',
//     articleGame: 'CS2',
//     gameIcon: './image/icon.png',
//     date:`${date.toLocaleString('en-US', options)}`
//   },
//   {
//     id:4,
//     image:'1.png',
//     articleName: 'Counter-Strike 2 is released',
//     articleGame: 'CS2',
//     gameIcon: './image/icon.png',
//     date:`${date.toLocaleString('en-US', options)}`
//   },
//   {
//     id:5,
//     image:'1.png',
//     articleName: 'Counter-Strike 2 is released',
//     articleGame: 'CS2',
//     gameIcon: './image/icon.png',
//     date:`${date.toLocaleString('en-US', options)}`
//   },
//   {
//     id:6,
//     image:'1.png',
//     articleName: 'Counter-Strike 2 is released',
//     articleGame: 'CS2',
//     gameIcon: './image/icon.png',
//     date:`${date.toLocaleString('en-US', options)}`
//   },
//   {
//     id:7,
//     image:'1.png',
//     articleName: 'Counter-Strike 2 is released',
//     articleGame: 'CS2',
//     gameIcon: './image/icon.png',
//     date:`${date.toLocaleString('en-US', options)}`
//   },
//   {
//     id:8,
//     image:'1.png',
//     articleName: 'Counter-Strike 2 is released',
//     articleGame: 'CS2',
//     gameIcon: './image/icon.png',
//     date:`${date.toLocaleString('en-US', options)}`
//   },
//   {
//     id:9,
//     image:'1.png',
//     articleName: 'Counter-Strike 2 is released',
//     articleGame: 'CS2',
//     gameIcon: './image/icon.png',
//     date:`${date.toLocaleString('en-US', options)}`
//   },
// ];

const articlesWrapper = document.querySelector('.articles');
const doc = window.document;
const links = doc.querySelectorAll(".header-link"); // любой нужный селектор
const linksCount = links.length;
const currentURL = doc.URL;
const item = doc.querySelectorAll('.list_item')
const isMain = doc.querySelector('.main');
const createMenu = (mobileHeader) => {
  mobileHeader.remove();
  const menu = document.createElement('menu');
  const ul = document.createElement('ul');
  const header = document.createElement('header');
  const logoLinkBurger = document.createElement('a');
  const burger = document.createElement('span');
  const listItems = [document.createElement('li'), document.createElement('li'), document.createElement('li'), document.createElement('li'),document.createElement('li'),document.createElement('li')];
  const burgerLinks = [document.createElement('a'), document.createElement('a'), document.createElement('a'), document.createElement('a'), document.createElement('a'), document.createElement('a')];
  const headerLinks = document.querySelectorAll('.header-link');
  const listItemsLinks = [{textContent:'Главная', href: './index.html'}, {textContent:'Статьи', href: './articles.html'}, {textContent:'Новости', href: './news.html'}, {textContent:'Турниры', href: './events.html'}, {textContent:'Статистика', href: './stats.html'}, {textContent:'Войти', href: './login.html'}]

  menu.classList.add('burger-menu');
  ul.classList.add('burger__nav-list');
  ul.classList.add('nav-list');
  header.classList.add('burger__header');
  header.classList.add('container');
  logoLinkBurger.classList.add('logo__link-burger');
  logoLinkBurger.classList.add('link');
  burger.classList.add('burger_menu');
  burger.classList.add('container')

  logoLinkBurger.textContent = 'E';

  for (let i = 0; i < listItems.length; i++) {
    ul.append(listItems[i]);
    listItems[i].classList.add('burger__list_item');
    burgerLinks[i].classList.add('burger-link');
    burgerLinks[i].classList.add('link');
    burgerLinks[i].textContent = listItemsLinks[i].textContent;
    burgerLinks[i].href = listItemsLinks[i].href;
    listItems[i].append(burgerLinks[i]);
  }
  header.prepend(logoLinkBurger, burger)
  ul.prepend(header)
  menu.append(ul)

  burger.addEventListener('click', () => {menu.remove(); document.body.insertAdjacentElement('afterbegin', mobileHeader)})

  return menu
}


if (isMain === null) {
  const main = document.createElement('main');
  main.classList.add('main')
  main.classList.add('container')
  document.body.append(main)
}

for (let i = 0; i < linksCount; i++) {
    let linkURL = links[i].href;

  // linkURL == currentURL, если не надо светить уровни выше
    if (currentURL.startsWith(linkURL)) {
    links[i].classList.toggle("active-link");
    item[i].classList.toggle('active-link')
}
}

if (currentURL.includes('stats.html')) {
  createStatsRow()
}

const adaptive = () => {
  const mobileHeader = document.createElement('header');
  window.addEventListener('resize', () => {
    if (window.outerWidth < 426) {
    //   console.log(window.outerWidth);
    //   const mobileLogoLink = document.createElement('a');
    //   const burgerMenu = document.createElement('span');
  
  
    //   burgerMenu.classList.add('burger');
    //   burgerMenu.addEventListener('click', () => {
    //     localStorage.setItem('burgerOpened',true);
    //     mobileLogoLink.style.color = "white";
    //     burgerMenu.style.backgroundColor = "white";
    //     mobileHeader.style.backgroundColor = "white";
    //     if (localStorage.getItem('burgerOpened')) {
    //       mobileLogoLink.style.color = "#35006A";
    //       burgerMenu.style.backgroundColor = "#35006A";
    //       mobileHeader.style.backgroundColor = "transparent";
    //       localStorage.removeItem('burgerOpened',false);
    //     }
    //   })
    //   mobileLogoLink.classList.add('logo__link-mobile');
    //   mobileLogoLink.classList.add('link');
    //   mobileLogoLink.href = '/';
    //   mobileLogoLink.textContent = 'E';
    //   mobileHeader.append(mobileLogoLink, burgerMenu)
    //   mobileHeader.classList.add('mobile__header');
    //   mobileHeader.classList.add('container')
    //   document.body.insertAdjacentElement('afterbegin', mobileHeader)
    // }else{
    //   mobileHeader.innerHTML = "";
    //   mobileLogoLink.style.color = "#35006A";
    //   burgerMenu.style.backgroundColor = "#35006A";
    //   mobileHeader.style.backgroundColor = "transparent";
    //   mobileHeader.remove();

    //   console.log(window.outerWidth);
    }
  })
  // only for mobile devices
  if (window.outerWidth < 426) { 
    console.log(window.outerWidth);
    const mobileLogoLink = document.createElement('a');
    const burgerWrapper = document.createElement('div')
    const burgerMenu = [document.createElement('span'), document.createElement('span'), document.createElement('span')];

    burgerWrapper.classList.add('burger__wrapper')
    burgerMenu.forEach(e => e.classList.add('burger'));
    burgerWrapper.addEventListener('click', () => {document.body.insertAdjacentElement('afterbegin',createMenu(mobileHeader))});

    // burgerMenu.addEventListener('click', createMenu())
    burgerMenu.forEach(e => burgerWrapper.append(e))
    mobileLogoLink.classList.add('logo__link-mobile');
    mobileLogoLink.classList.add('link');
    mobileLogoLink.href = './index.html';
    mobileLogoLink.textContent = 'E';
    mobileHeader.append(mobileLogoLink, burgerWrapper)
    mobileHeader.classList.add('mobile__header');
    mobileHeader.classList.add('container')
    document.body.insertAdjacentElement('afterbegin', mobileHeader)
  }else{
    mobileHeader.remove();

    console.log(window.outerWidth);
  }
}

if(window.outerWidth < 426){
  adaptive();
}

createModal();
controlModal();
createBanner();
createFooter();

// for(let i = 0; i < articles.length; i++){
//   createActualNews(articles[i])
// }

// articles.forEach (e => {
//   articlesWrapper.prepend(e.id)
//   articlesWrapper.style.color = 'white'
// })
if (currentURL.includes('register')) {
  const header = document.querySelector('.header');
  header.insertAdjacentText('afterend', " ")
  console.log(currentURL.includes('register'));
  register()
}

if (currentURL.includes('articles')) {
  const data = await getData('articles')
  renderArticle(data)
}

if (currentURL.includes('news.html')) {
  const data = await getData('news');

  renderNews(data)
}

if (!currentURL.includes('index')) {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', createBanner())
}else{
  const main = document.querySelector('main')
  main.insertAdjacentHTML('beforebegin', createBanner())
  
  for (let i = 0; i < articles.length; i++) {
    const articlesWrapper = document.querySelector('.articles__wrapper');
    const articlePreviewContainer = document.createElement('a');
    const previewImage = document.createElement('img');
    const previewName = document.createElement('h2');
    const gamePreviewWrapper = document.createElement('div');
    const gameIcon = document.createElement('img');
    const gameName = document.createElement('h3');
    const dateWrapper = document.createElement('div');
    const dateText = document.createElement('h4');
  
    articlePreviewContainer.classList.add('articles__container');
    articlePreviewContainer.classList.add('link');
    previewImage.classList.add('articles-image');
    previewName.classList.add('articles-name');
    gamePreviewWrapper.classList.add('articles__game-container');
    gameIcon.classList.add('game-icon');
    gameName.classList.add('game-name');
    dateWrapper.classList.add('date__wrapper');
    dateText.classList.add('date-text')
  
    articlePreviewContainer.append(previewImage, previewName,gamePreviewWrapper,dateWrapper);
    gamePreviewWrapper.append(gameIcon, gameName);
    dateWrapper.append(dateText);
  
    articlePreviewContainer.dataset.id = articles[i].id;
    articlePreviewContainer.href = `article.html?id=${articlePreviewContainer.dataset.id}`
    previewImage.src = `./image/articles/${articles[i].image}`;
    previewName.textContent = articles[i].articleName;
    gameIcon.src = articles[i].gameIcon;
    gameName.textContent = articles[i].articleGame;
    dateText.textContent = articles[i].date;
    articlesWrapper.prepend(articlePreviewContainer)
  }
}