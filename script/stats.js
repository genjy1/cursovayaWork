'use strict'

const players = [{
    team: "Cloud9",
    nickname: "electronic",
    rating: 1.30,
    maps: 1472
}];
const teams = [{
    img:'Cloud9',
    name: 'Cloud9',
    rating: 1.02,
    maps: 1570
}];

const createStatsPlayer = (player) => `
    <td class="player__td player__img td" style="background-image:url('./image/teams/${player.team}.png')">
        <img class="player-img stats__img" src="./image/players/${player.nickname}.png">
    </td>
    <td class="player__td td">${player.nickname}</td>
    <td class="player__td td">${player.rating} Рейтинг</td>
    <td class="player__td td">${player.maps}</td>
`

const createStatsTeams = (team) => `
    <td class="team__td td team__img"><img src="./image/teams/${team.img + '.png' }" class="team-img stats__img"></td>
    <td class="team__td td">${team.name}</td>
    <td class="team__td td">${team.rating} Рейтинг</td>
    <td class="team__td td">${team.maps}</td>
`

const createRowsPlayer = (data) => 
    data.map(stats => {
        const tr = document.createElement('tr');
        tr.classList.add('stats__row');
        tr.insertAdjacentHTML('beforeend', createStatsPlayer(stats))

        return tr;
    });

const createRowsTeam = (data) => 
data.map(stats => {
    const tr = document.createElement('tr');
    tr.classList.add('stats__row');
    tr.insertAdjacentHTML('beforeend', createStatsTeams(stats))

    return tr;
});


const renderPlayer = (data) => {
    const tbody = document.querySelector('.players__body');
    tbody.textContent ="";
    const player = createRowsPlayer(data);
    tbody.append(...player)
}

const renderTeams = (data) => {
    const tbody = document.querySelector('.teams__body');
    tbody.textContent ="";
    const team = createRowsTeam(data);
    tbody.append(...team)
}

renderPlayer(players);
renderTeams(teams);