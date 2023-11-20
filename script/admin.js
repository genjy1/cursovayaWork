'use strict';
import {getData} from './getData.js'
import { postData } from './postData.js';

const championship = await getData('ongoingevents');
const players = await getData('players');
const teams = await getData('teams');

const renderTable = (dataChampionship,dataPlayers,dataTeams) => {
    const table = document.querySelector('.admin__table')
    const championships = table.querySelector('.championships__wrapper')
    const players = table.querySelector('.players__wrapper')
    const teams = table.querySelector('.teams__wrapper');
    const playersData = dataPlayers.map(player => `
        <div class="td player__td" dataset-id="${player.id}">
            ${player.nickname}
        </div>
    `)
    const championshipsData = dataChampionship.map(championship => 
        `
         <div class="td" dataset-id="${championship.id}">
            ${championship.fullName}
         </div>
        `
        )
    const teamsData = dataTeams.map(team => 
            `
                <div class="td team__td" dataset-id="${team.id}">
                    ${team.name}
                </div>
            `
        )

    teams.innerHTML = teamsData.join('')
    championships.innerHTML = championshipsData.join('');
    players.innerHTML = playersData.join('')
}

renderTable(championship, players, teams)