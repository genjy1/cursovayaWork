'use strict'
import { createBanner } from "./script/genBanner.js";
import { createFooter } from "./script/footer.js";
import { createArticle } from "./script/news.js";
import { createStatsRow } from "./script/createStatsRow.js";
import { createActualNews } from "./script/createActualNews.js";
import { controlModal, createModal } from "./script/modal.js";
import { register } from "./script/register.js";

const doc = window.document;
const links = doc.querySelectorAll(".header-link"); // любой нужный селектор
const linksCount = links.length;
const currentURL = doc.URL;
const item = doc.querySelectorAll('.list_item')
const isMain = doc.querySelector('.main');


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
createModal();
controlModal();
createBanner();
createFooter();

if (currentURL.includes('register')) {
  const header = document.querySelector('.header');
  header.insertAdjacentText('afterend', " ")
  console.log(currentURL.includes('register'));
  register()
}

if (currentURL.includes('news')) {
  console.log(currentURL.includes('news'));

  createArticle()
}

if (!currentURL.includes('index')) {
  const header = document.querySelector('.header');
  header.insertAdjacentHTML('afterend', createBanner())
  console.log('1');
}else{
  const main = document.querySelector('main')
  main.insertAdjacentHTML('beforebegin', createBanner())
}
