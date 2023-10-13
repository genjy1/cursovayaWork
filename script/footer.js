export const createFooter = () =>{
    const main = document.body.querySelector('.main');
    main.insertAdjacentHTML('afterend', '<footer class="footer"><div class="footer__container container"><div class="row"><a href="../index.html" alt="ESNHub Logo" class="anchor"><img src="../image/logo.svg" alt="ESNHub Logo" class="logo-img"></a><menu class="footer__menu"><div class="menu-item column"><nav class="footer__nav"><ul class="footer__nav-list nav-list"><li class="footer__list_item"><a href="../index.html" class="footer-link link">Главная</a></li><li class="footer__list_item"><a href="./pages/news.html" class="footer-link link">Новости</a></li><li class="footer__list_item"><a href="./pages/articles.html" class="footer-link link">Статьи</a></li><li class="footer__list_item"><a href="./pages/events.html" class="footer-link link">Турниры</a></li><li class="footer__list_item"><a href="./pages/events.html" class="footer-link link">Статистика</a></li></ul></nav></div><div class="menu-item column"><nav class="footer__nav"><ul class="footer__nav-list nav-list"><li class="footer__list_item"><a href="#" class="footer-link link">Политика конфиденциальности</a></li><li class="footer__list_item"><a href="#" class="footer-link link">Условия использования</a></li><li class="footer__list_item"><a href="#" class="footer-link link">О нас</a></li><li class="footer__list_item"><a href="#" class="footer-link link">Редакционная политика</a></li></ul></nav></div><div class="menu-item column"><nav class="footer__nav"><ul class="footer__nav-list nav-list"><li class="footer__list_item"><a href="#" class="footer-link link">Контакты:</a></li><li class="footer__list_item"><a href="mailto:info@esnhub.org" class="footer-link link">email: info@esnhub.org</a></li></ul></nav></div></menu><img src="../image/restriction.svg" alt="Age Restriction" class="footer-restriction"></div><div class="row"><p class="copyright">Разработка и дизайн студента СПКМО группы ИСП-009 Майорова Даниила Николаевича © 2023</p></div></div></footer>')
}