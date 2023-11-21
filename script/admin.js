'use strict';
import {getData} from './getData.js'
import { postData } from './postData.js';

const championship = await getData('ongoingevents');
const players = await getData('players');
const teams = await getData('teams');
const entityButtons = document.querySelectorAll('.add-entity');
let overlay = document.querySelector('.overlay')

window.addEventListener('click', ({target})=>{
    if (target.classList.contains('close__svg') || target.tagName === "path") {
        console.log(target.closest('.modal'));
        const modal = target.closest('.modal');
        const form = modal.querySelector('form');
        
        form.reset();
        modal.remove()

    }
})

entityButtons.forEach(e => e.addEventListener('click', () => {
    if (e.classList.contains('player')) {
        console.log(e);
        let modal;
        const playerModal = `
            <div class="modal-admin modal">
                <header class="admin__modal-header">
                    <h3 class="modal-header">Добавить игрока</h3>
                    <button class="close__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class="close__svg">
                            <path d="M25.1024 25.8094L8.13184 8.83885" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                            <path d="M25.8094 8.83886L8.83887 25.8094" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                </header>
                <div class="form__wrapper">
                    <form id="player" class="admin__form">
                        <input type="text" placeholder="Введите название команды игрока" class="modal-input player__modal-team" name="team">
                        <input type="text" placeholder="Введите никнейм игрока" class="modal-input player__modal-nick" name="nickname">
                        <input type="number" placeholder="Введите рейтинг игрока" class="modal-input player__modal-rating" step="any" name="rating">
                        <input type="number" placeholder="Введите количество сыгранных карт игрока" class="modal-input player__modal-maps" name="maps">
                        <label class="file__label">Прикрепить картинку<input type="file" style="display:none"></label>
                        <input type="submit" class="modal-submit" value="Отправить">
                    </form>
                </div>
            </div>
        `
        overlay.insertAdjacentHTML('afterbegin', playerModal)
        overlay = document.querySelector('.overlay');
        modal = overlay.querySelector('#player')
        modal.addEventListener('submit', (e) => {
            e.preventDefault();
            const playerModalTeam = modal.querySelector('.player__modal-team');
            const playerModalNick = modal.querySelector('.player__modal-nick');
            const playerModalRating = modal.querySelector('.player__modal-rating');
            const playerModalMaps = modal.querySelector('.player__modal-team');
            const formData = new FormData(modal);
            const playerData = Object.fromEntries(formData);
            postData('players', playerData);
            console.log(playerData);
        })
        console.log(modal);
    }
    if (e.classList.contains('team')) {
        console.log(e);
        let modal;
        const playerModal = `
            <div class="modal-admin modal">
                <header class="admin__modal-header">
                    <h3 class="modal-header">Добавить команду</h3>
                    <button class="close__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class="close__svg">
                            <path d="M25.1024 25.8094L8.13184 8.83885" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                            <path d="M25.8094 8.83886L8.83887 25.8094" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                </header>
                <div class="form__wrapper">
                    <form id="team" class="admin__form">
                        <input type="text" placeholder="Введите название команды" class="modal-input team__modal-name" name="name">
                        <input type="number" placeholder="Введите рейтинг команд" class="modal-input team__modal-rating" step="any" name="rating">
                        <input type="number" placeholder="Введите количество сыгранных карт игрока" class="modal-input team__modal-maps" name="maps">
                        <label class="file__label">Прикрепить картинку<input type="file" style="display:none"></label>
                        <input type="submit" class="modal-submit" value="Отправить">
                    </form>
                </div>
            </div>
        `
        overlay.insertAdjacentHTML('afterbegin', playerModal)
        overlay = document.querySelector('.overlay');
        modal = overlay.querySelector('#team')
        modal.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(modal)
            const teamData = Object.fromEntries(formData);
            postData('teams', teamData)
        })
    }
    if (e.classList.contains('championship')) {
        console.log(e);
        let modal;
        const playerModal = `
            <div class="modal-admin modal">
                <header class="admin__modal-header">
                    <h3 class="modal-header">Добавить чемпионат</h3>
                    <button class="close__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class="close__svg">
                            <path d="M25.1024 25.8094L8.13184 8.83885" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                            <path d="M25.8094 8.83886L8.83887 25.8094" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                </header>
                <div class="form__wrapper">
                    <form id="championship" class="admin__form">
                        <input type="text" placeholder="Введите название чемпионата" class="modal-input championship__modal-name" name="fullName">
                        <input type="text" placeholder="Введите короткое название чемпионата" class="modal-input championship__modal-name_short" name="shortName">
                        <input type="number" placeholder="Введите призовой фонд чемпионата" class="modal-input championship__modal-prizepool" name="prizePool">
                        <input type="text" placeholder="Введите дату проведения" class="modal-input championship__modal-date" name="date">
                        <input type="number" placeholder="Введите количество игроков" class="modal-input championship__modal-date" name="date">
                        <input type="text" placeholder="Введите название организатора" class="modal-input championship__modal-date" name="date">
                        <input type="text" placeholder="Введите уровень" class="modal-input championship__modal-date" name="date">
                        <label class="file__label">Прикрепить картинку<input type="file" style="display:none"></label>
                        <input type="submit" class="modal-submit" value="Отправить">
                    </form>
                </div>
            </div>
        `
        overlay.insertAdjacentHTML('afterbegin', playerModal)
        overlay = document.querySelector('.overlay');
        modal = overlay.querySelector('#championship')
        modal.addEventListener('submit', (e) => {
            e.preventDefault();
            const formData = new FormData(modal)
            const championshipData = Object.fromEntries(formData);
            postData('ongoingevents', championshipData)
        })
        console.log(modal);
    }
}))


const renderTable = (dataChampionship,dataPlayers,dataTeams) => {
    const table = document.querySelector('.admin__table')
    const championships = table.querySelector('.championships__wrapper')
    const players = table.querySelector('.players__wrapper')
    const teams = table.querySelector('.teams__wrapper');
    const playersData = dataPlayers.map(player => `
        <div class="admin__td player__td" dataset-id="${player.id}">
            ${player.nickname}
        </div>
    `)
    const championshipsData = dataChampionship.map(championship => 
        `
        <div class="admin__td" dataset-id="${championship.id}">
            ${championship.fullName}
        </div>
        `
        )
    const teamsData = dataTeams.map(team => 
            `
                <div class="admin__td team__td" dataset-id="${team.id}">
                    ${team.name}
                </div>
            `
        )

    teams.innerHTML = teamsData.join('')
    championships.innerHTML = championshipsData.join('');
    players.innerHTML = playersData.join('')
}

renderTable(championship, players, teams)