'use strict';
import { getData } from './getData.js'
import { postData } from './postData.js';
import { patchData } from './patchData.js';
import {toBase64} from './base64.js'

const championship = await getData('ongoingevents');
const players = await getData('players');
const teams = await getData('teams');
const entityButtons = document.querySelectorAll('.add-entity');
let overlay = document.querySelector('.overlay')

window.addEventListener('click', ({target})=>{
    if (target.classList.contains('close__svg') || target.classList.contains('close-path')) {
        const modal = target.closest('.modal');
        const form = modal.querySelector('form');
        
        form.reset();
        modal.remove()

    }

    if (target.classList.contains('login-btn')) {
        location.href = './index.html'
    }
})

entityButtons.forEach(e => e.addEventListener('click', () => {
    const sendPlayer = () => {
    if (e.classList.contains('player')) {
        let modal;
        const playerModal = `
            <div class="modal-admin modal">
                <header class="admin__modal-header">
                    <h3 class="modal-header">Добавить игрока</h3>
                    <button class="close__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class="close__svg">
                            <path class="close-path" d="M25.1024 25.8094L8.13184 8.83885" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                            <path class="close-path" d="M25.8094 8.83886L8.83887 25.8094" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                </header>
                <div class="form__wrapper">
                    <form id="player" class="admin__form">
                        <input type="text" placeholder="Введите название команды игрока" class="modal-input_admin player__modal-team" name="team">
                        <input type="text" placeholder="Введите никнейм игрока" class="modal-input_admin player__modal-nick" name="nickname">
                        <input type="number" placeholder="Введите рейтинг игрока" class="modal-input_admin player__modal-rating" step="any" name="rating">
                        <input type="number" placeholder="Введите количество сыгранных карт игрока" class="modal-input_admin player__modal-maps" name="maps">
                        <label class="file__label">Прикрепить картинку для игрока<input type="file" style="display:none" name="image" accept=".jpg, .jpeg, .png .webp"></label>
                        <label class="file__label">Прикрепить картинку для команды<input type="file" style="display:none" name="teamImage" accept=".jpg, .jpeg, .png .webp"></label>
                        <input type="submit" class="modal-submit" value="Отправить">
                    </form>
                </div>
            </div>
        `
        overlay.insertAdjacentHTML('afterbegin', playerModal)
        overlay = document.querySelector('.overlay');
        modal = overlay.querySelector('#player')

        modal.addEventListener('submit', async(e) => {
            e.preventDefault();
            const formData = new FormData(modal);
            const playerData = Object.fromEntries(formData);
            playerData.teamImage = await toBase64(playerData.teamImage)
            playerData.image = await toBase64(playerData.image)
            postData('players', playerData);
        })
    }
    }
    const sendTeam = () => {if (e.classList.contains('team')) {
        let modal;
        const playerModal = `
            <div class="modal-admin modal">
                <header class="admin__modal-header">
                    <h3 class="modal-header">Добавить команду</h3>
                    <button class="close__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class="close__svg">
                            <path class="close-path" d="M25.1024 25.8094L8.13184 8.83885" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                            <path class="close-path" d="M25.8094 8.83886L8.83887 25.8094" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                </header>
                <div class="form__wrapper">
                    <form id="team" class="admin__form">
                        <input type="text" placeholder="Введите название команды" class="modal-input_admin team__modal-name" name="name">
                        <input type="number" placeholder="Введите рейтинг команды" class="modal-input_admin team__modal-rating" step="any" name="rating">
                        <input type="number" placeholder="Введите количество карт команды" class="modal-input_admin team__modal-maps" name="maps">
                        <label class="file__label">Прикрепить картинку<input type="file" style="display:none" name="image" accept=".jpg, .jpeg, .png .webp"></label>
                        <input type="submit" class="modal-submit" value="Отправить">
                    </form>
                </div>
            </div>
        `
        overlay.insertAdjacentHTML('afterbegin', playerModal)
        overlay = document.querySelector('.overlay');
        modal = overlay.querySelector('#team')
        modal.addEventListener('submit', async(e) => {
            e.preventDefault();
            const formData = new FormData(modal)
            const teamData = Object.fromEntries(formData);
            teamData.image = await toBase64(teamData.image)
            postData('teams', teamData)
        })
    }}
    const sendChampionship =() => {if (e.classList.contains('championship')) {
        let modal;
        const playerModal = `
            <div class="modal-admin modal">
                <header class="admin__modal-header">
                    <h3 class="modal-header">Добавить чемпионат</h3>
                    <button class="close__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class="close__svg">
                            <path class="close-path" d="M25.1024 25.8094L8.13184 8.83885" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                            <path class="close-path" d="M25.8094 8.83886L8.83887 25.8094" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                </header>
                <div class="form__wrapper">
                    <form id="championship" class="admin__form">
                        <input type="text" placeholder="Введите название чемпионата" class="modal-input_admin championship__modal-name" name="fullName">
                        <input type="text" placeholder="Введите короткое название чемпионата" class="modal-input_admin championship__modal-name_short" name="shortName">
                        <input type="number" placeholder="Введите призовой фонд чемпионата" class="modal-input_admin championship__modal-prizepool" name="prizePool">
                        <input type="text" placeholder="Введите дату начала проведения" class="modal-input_admin championship__modal-date" name="startDate" onfocus="(this.type='date')">
                        <input type="text" placeholder="Введите дату конца проведения" class="modal-input_admin championship__modal-date" name="endDate" onfocus="(this.type='date')">
                        <input type="number" placeholder="Введите количество игроков" class="modal-input_admin championship__modal-date" name="players">
                        <input type="text" placeholder="Введите название организатора" class="modal-input_admin championship__modal-organizer" name="organizer">
                        <input type="text" placeholder="Введите уровень" class="modal-input_admin championship__modal-date" name="tier">
                        <label class="file__label">Прикрепить картинку<input type="file" style="display:none" name="image" accept=".jpg, .jpeg, .png .webp"></label>
                        <input type="submit" class="modal-submit" value="Отправить">
                    </form>
                </div>
            </div>
        `
        overlay.insertAdjacentHTML('afterbegin', playerModal)
        overlay = document.querySelector('.overlay');
        modal = overlay.querySelector('#championship')
        modal.addEventListener('submit', async(e) => {
            e.preventDefault();
            const formData = new FormData(modal)
            const championshipData = Object.fromEntries(formData);
            championshipData.image = await toBase64(championshipData.image)
            postData('ongoingevents', championshipData)
        })
    }}

    sendTeam();
    sendPlayer();
    sendChampionship();
}))


const renderTable = (dataChampionship,dataPlayers,dataTeams) => {
    const table = document.querySelector('.admin__table')
    const championships = table.querySelector('.championships__wrapper')
    const players = table.querySelector('.players__wrapper')
    const teams = table.querySelector('.teams__wrapper');
    const playersData = dataPlayers.map(player => `
        <div class="admin__td player__td" data-id="${player.id}">
            <div class="content__wrapper">
                ${player.nickname}
                <div class="icons__wrapper">
                <button class="delete">
                    <img src="./image/delete.svg" class="delete">
                </button>
                <button class="edit player__edit">
                    <img src="./image/edit.svg" class="edit player__edit">
                </button>
            </div>
        </div>
        </div>
    `)
    const championshipsData = dataChampionship.map(championship => 
        `
        <div class="admin__td championship__td" data-id="${championship.id}">
            <div class="content__wrapper">  
            ${championship.fullName}
            <div class="icons__wrapper">
                <button class="delete">
                    <img src="./image/delete.svg" class="delete">
                </button>
                <button class="edit championship__edit">
                    <img src="./image/edit.svg" class="edit championship__edit">
                </button>
            </div>
            </div>
            
        </div>
        `
        )
    const teamsData = dataTeams.map(team => 
            `
                <div class="admin__td team__td" data-id="${team.id}">

                    <div class="content__wrapper">
                        ${team.name}
                        <div class="icons__wrapper">
                            <button class="delete">
                                <img src="./image/delete.svg" class="delete">
                            </button>
                            <button class="edit team__edit">
                                <img src="./image/edit.svg" class="edit team__edit">
                            </button>
                        </div>
                    </div>
                </div>
            `
        )

    teams.innerHTML = teamsData.join('')
    championships.innerHTML = championshipsData.join('');
    players.innerHTML = playersData.join('')
}

window.addEventListener('click', ({target}) => {

    const deleteEntity = () => {
        if (target.classList.contains('delete')) {

            if (target.closest('.player__td')) {
                const id = target.closest('.player__td').dataset.id;

                fetch(`https://twisty-efficacious-archeology.glitch.me/players/${id}`, 
                    {
                        method:'DELETE'
                    }
                )
            };
            if (target.closest('.team__td')) {
                const id = target.closest('.team__td').dataset.id;

                fetch(`https://twisty-efficacious-archeology.glitch.me/teams/${id}`, 
                    {
                        method:'DELETE'
                    }
                )
            };
            if (target.closest('.championship__td')) {
                const id = target.closest('.championship__td').dataset.id;

                fetch(`https://twisty-efficacious-archeology.glitch.me/ongoingevents/${id}`, 
                    {
                        method:'DELETE'
                    }
                )
            };
            
        }
    }

    const editEntity =async () => {
        if (target.classList.contains('player__edit')) {
            const id = target.closest('.player__td').dataset.id
            let modal;
            const player = await getData(`players/${id}`)
        const playerModal = `
            <div class="modal-admin modal">
                <header class="admin__modal-header">
                    <h3 class="modal-header">Изменить игрока</h3>
                    <button class="close__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class="close__svg">
                            <path class="close-path" d="M25.1024 25.8094L8.13184 8.83885" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                            <path class="close-path" d="M25.8094 8.83886L8.83887 25.8094" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                        </svg>
                    </button>
                </header>
                <div class="form__wrapper">
                    <form id="player" class="admin__form">
                        <input type="text" placeholder="" value="${player.team}" class="modal-input_admin player__modal-team" name="team">
                        <input type="text" placeholder="" value="${player.nickname}" class="modal-input_admin player__modal-nick" name="nickname">
                        <input type="number" placeholder="" value="${player.rating}" class="modal-input_admin player__modal-rating" step="any" name="rating">
                        <input type="number" placeholder="" value="${player.maps}" class="modal-input_admin player__modal-maps" name="maps">
                        <label class="file__label">Прикрепить картинку<input type="file" style="display:none" name="image" accept=".jpg, .jpeg, .png .webp" value="${player.image}"></label>
                        <label class="file__label">Прикрепить картинку для команды<input type="file" style="display:none" name="teamImage" accept=".jpg, .jpeg, .png .webp" value="${player.teamImage}"></label>
                        <input type="submit" class="modal-submit" value="Отправить">
                    </form>
                </div>
            </div>
        `
        overlay.insertAdjacentHTML('afterbegin', playerModal)
        overlay = document.querySelector('.overlay');
        modal = overlay.querySelector('#player')

        modal.addEventListener('submit', async(e) => {
            e.preventDefault();
            const formData = new FormData(modal);
            const playerData = Object.fromEntries(formData);
            playerData.teamImage = await toBase64(playerData.teamImage)
            playerData.image = await toBase64(playerData.image)
            patchData('players', playerData, id);
        })
        }
        if (target.classList.contains('team__edit')) {
            const id = target.closest('.team__td').dataset.id
            let modal;
            const team = await getData(`teams/${id}`)
        const playerModal = `
        <div class="modal-admin modal">
        <header class="admin__modal-header">
            <h3 class="modal-header">Добавить команду</h3>
            <button class="close__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class="close__svg">
                    <path class="close-path" d="M25.1024 25.8094L8.13184 8.83885" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                    <path class="close-path" d="M25.8094 8.83886L8.83887 25.8094" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </button>
        </header>
        <div class="form__wrapper">
            <form id="team" class="admin__form">
                <input type="text" placeholder="Введите название команды" value="${team.name}"class="modal-input_admin team__modal-name" name="name">
                <input type="number" placeholder="Введите рейтинг команды" value="${team.rating}"class="modal-input_admin team__modal-rating" step="any" name="rating">
                <input type="number" placeholder="Введите количество карт команды" value="${team.maps}"class="modal-input_admin team__modal-maps" name="maps">
                <label class="file__label">Прикрепить картинку<input type="file" style="display:none" name="image" accept=".jpg, .jpeg, .png .webp" value="${team.image}"></label>
                <input type="submit" class="modal-submit" value="Отправить">
            </form>
        </div>
    </div>
        `
        overlay.insertAdjacentHTML('afterbegin', playerModal)
        overlay = document.querySelector('.overlay');
        modal = overlay.querySelector('#team')

        modal.addEventListener('submit', async(e) => {
            e.preventDefault();
            const formData = new FormData(modal);
            const playerData = Object.fromEntries(formData);
            playerData.image = await toBase64(playerData.image)
            patchData('teams', playerData, id);
        })
        }
        if (target.classList.contains('championship__edit')) {
            const id = target.closest('.championship__td').dataset.id
            let modal;
            const championship = await getData(`ongoingevents/${id}`)
        const playerModal = `
        <div class="modal-admin modal">
        <header class="admin__modal-header">
            <h3 class="modal-header">Добавить чемпионат</h3>
            <button class="close__button">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none" class="close__svg">
                    <path class="close-path" d="M25.1024 25.8094L8.13184 8.83885" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                    <path class="close-path" d="M25.8094 8.83886L8.83887 25.8094" stroke="#6600CC" stroke-width="4" stroke-linecap="round"/>
                </svg>
            </button>
        </header>
        <div class="form__wrapper">
            <form id="championship" class="admin__form">
                <input type="text" placeholder="Введите название чемпионата"  value="${championship.fullName}"class="modal-input_admin championship__modal-name" name="fullName">
                <input type="text" placeholder="Введите короткое название чемпионата"  value="${championship.shortName}"class="modal-input_admin championship__modal-name_short" name="shortName">
                <input type="number" placeholder="Введите призовой фонд чемпионата"  value="${championship.prizePool}"class="modal-input_admin championship__modal-prizepool" name="prizePool">
                <input type="text" placeholder="Введите дату начала проведения"  value="${championship.startDate}"class="modal-input_admin championship__modal-date" name="startDate" onfocus="(this.type='date')">
                <input type="text" placeholder="Введите дату конца проведения"  value="${championship.endDate}"class="modal-input_admin championship__modal-date" name="endDate" onfocus="(this.type='date')">
                <input type="number" placeholder="Введите количество игроков"  value="${championship.players}"class="modal-input_admin championship__modal-date" name="players">
                <input type="text" placeholder="Введите название организатора"  value="${championship.organizer}"class="modal-input_admin championship__modal-organizer" name="organizer">
                <input type="text" placeholder="Введите уровень"  value="${championship.tier}"class="modal-input_admin championship__modal-date" name="tier">
                <label class="file__label">Прикрепить картинку<input type="file" style="display:none" name="image" accept=".jpg, .jpeg, .png .webp" value="${championship.image}"></label>
                <input type="submit" class="modal-submit" value="Отправить">
            </form>
        </div>
    </div>
        `
        overlay.insertAdjacentHTML('afterbegin', playerModal)
        overlay = document.querySelector('.overlay');
        modal = overlay.querySelector('#championship')

        modal.addEventListener('submit', async(e) => {
            e.preventDefault();
            const formData = new FormData(modal);
            const playerData = Object.fromEntries(formData);
            playerData.image = await toBase64(playerData.image)
            patchData('ongoingevents', playerData, id);
        })
        }

    }
    editEntity();
    deleteEntity();
})

renderTable(championship, players, teams)