'use strict'

import { getData } from "./getData.js";

// export const events = [{
//     tier:1,
//     organizer:'Valve',
//     tournament: 'The International',
//     date:'14-29.10.2023',
//     prize: '3 141 000 $',
//     players: 100,
//     sponsored:true
// }]

export const events = await getData('ongoingevents')

const createEvent = (events) => `
    <td class="events__td">${events.tier}</td>
    <td class="events__td">${events.organizer}</td>
    <td class="events__td">${events.fullName}</td>
    <td class="events__td">${events.date}</td>
    <td class="events__td">${events.prizePool}</td>
    <td class="events__td">${events.players}</td>
`
const createRows = (data) => 
    data.map(events => {
        const tr = document.createElement('tr');
        tr.classList.add('events__row');
        events.sponsored ? tr.dataset.sponsored = true : tr.dataset.sponsored = false;
        tr.insertAdjacentHTML('beforeend', createEvent(events))
        console.log(events);

        return tr;
    });

export const renderEvent = data => {
    const tbody = document.querySelector('.events__body');
    tbody.textContent ="";
    const events = createRows(data);
    tbody.append(...events)
}