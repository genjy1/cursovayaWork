export const createBanner = () => {
    const header = document.body.querySelector('header');
    header.insertAdjacentHTML('afterend','<a href="https://discord.gg/ZdnPZuZN" class="link"><div class="banner"><div class="banner__container container"><span class="italic">Присоединяйся</span><br>К команде <span class="italic underline">авторов</span> ESNHub</div></div></a>')
}