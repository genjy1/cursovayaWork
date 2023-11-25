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

const events = await getData('ongoingevents')
const todayButton = document.querySelector('#ongoing')
const featuredButton = document.querySelector('#featured')
const allButton = document.querySelector('#all')


const createEvent = (event) => `
    <td class="events__td">${event.tier}</td>
    <td class="events__td">${event.organizer}</td>
    <td class="events__td">${event.fullName}</td>
    <td class="events__td">${event.startDate +' - '+ event.endDate}</td>
    <td class="events__td">${event.prizePool + '$'}</td>
    <td class="events__td">${event.players}</td>
`
const createRows = (data) => 
    data.map(events => {
        const tr = document.createElement('tr');
        tr.classList.add('events__row');
        tr.insertAdjacentHTML('beforeend', createEvent(events))
        tr.dataset.date = events.startDate
        return tr;
    });

const renderEvent = data => {
    const tbody = document.querySelector('.events__body');
    tbody.textContent ="";
    const events = createRows(data);
    tbody.append(...events)
}

renderEvent(events)

todayButton.addEventListener('click', () => {
    const today = new Date().toLocaleDateString()
    const rows = document.querySelectorAll('.events__row')

    for(let i = 0;i < rows.length; i++){

        const datasetDate = new Date(rows[i].dataset.date).toLocaleDateString()
        if (datasetDate != today) {
            rows[i].style.display = 'none'
        }else {
            rows[i].removeAttribute('style')
        }
    }

})

featuredButton.addEventListener('click', () => {
    const today = new Date().toLocaleDateString()
    const rows = document.querySelectorAll('.events__row')

    for(let i = 0;i < rows.length; i++){

        const datasetDate = new Date(rows[i].dataset.date).toLocaleDateString()
        if (datasetDate <= today) {
            rows[i].style.display = 'none'
        }else {
            rows[i].removeAttribute('style')
        }
    }

})

allButton.addEventListener('click', () => {
    const today = new Date().toLocaleDateString()
    const rows = document.querySelectorAll('.events__row')

    for(let i = 0;i < rows.length; i++){

        rows[i].removeAttribute('style')

    }

})

// featuredButton.addEventListener('click', () => {
//     const today = new Date()
//     const rows = document.querySelectorAll('.events__row')
//     rows.forEach(e => {
//         console.log();
//             if (Date.parse(today) < Date.parse(e.dataset.date)) {
//                 e.remove()
//             }
//         }
//     )   
// })

