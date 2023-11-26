import { getData } from './getData.js'

export const setOnGoingEvent = async ()=> {
    const events = await getData('ongoingevents');
    const ongoingEvent = events.at(-1);
    const eventContainer = document.querySelector('.event')
    const eventInformationContainer = eventContainer.querySelector('.event-information_container');
    const eventName = eventInformationContainer.querySelector('.event-name');
    const eventDate = eventInformationContainer.querySelector('.event-date');
    const eventPrizePool = eventInformationContainer.querySelector('.event-prizepool');
    const options = {dateStyle:'short'}
    eventContainer.style.backgroundImage = `url(${ongoingEvent.image})`;
    
    window.addEventListener('resize', () => {
        if (window.outerWidth === 425) {
            eventName.textContent = ongoingEvent.shortName;
        }else{
            eventName.textContent = ongoingEvent.fullName;
        };
    })
    if (window.outerWidth === 425) {
        eventName.textContent = ongoingEvent.shortName;
    }
    eventDate.textContent = new Date(ongoingEvent.startDate).toLocaleString('ru-RU', options) + ' - ' + new Date(ongoingEvent.endDate).toLocaleString('ru-RU', options);
    eventPrizePool.textContent = new Number(ongoingEvent.prizePool).toLocaleString() + '$';
    eventName.textContent = ongoingEvent.fullName;
}

