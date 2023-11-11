import { getData } from './getData.js'

export const setOnGoingEvent = async ()=> {
    const events = await getData('ongoingevents');
    const ongoingEvent = events.at(-2);
    const eventContainer = document.querySelector('.event')
    const eventInformationContainer = eventContainer.querySelector('.event-information_container');
    const eventName = eventInformationContainer.querySelector('.event-name');
    const eventDate = eventInformationContainer.querySelector('.event-date');
    const eventPrizePool = eventInformationContainer.querySelector('.event-prizepool');

    eventContainer.style.backgroundImage = `url(${ongoingEvent.img})`;
    
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
    eventDate.textContent = ongoingEvent.date;
    eventPrizePool.textContent = ongoingEvent.prizePool + '$';
    eventName.textContent = ongoingEvent.fullName;
}

