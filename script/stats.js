'use strict'

const createStatsPlayer = (player) => `
    <td class="player__td" style="background-image:url('./image/teams/${player.team}')"><img src="./image/players/${player.nickname}.png"></td>
    <td class="player__td">${player.nickname}</td>
    <td class="player__td">${player.rating}</td>
    <td class="player__td">${player.maps}</td>
`

const renderPlayer = (data) => {

}