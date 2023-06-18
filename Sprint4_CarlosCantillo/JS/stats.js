import { filterAssistanceAndPercentage, filterCapacity, filterRevenues, showTable1, showTables2 } from "./functions.js";

const url = "https://mindhub-xj03.onrender.com/api/amazing";

let table1 = document.getElementById('table1');
let tableUp = document.getElementById('upTable');
let tablePast = document.getElementById('pastTable');

fetch(url)
  .then(response => response.json())
  .then(data => {
    let currentDate = new Date(data.currentDate);
    let upcomingEvents = data.events.filter(event => (new Date(event.date) > currentDate));
    let pastEvents = data.events.filter(event => (new Date(event.date) < currentDate));
    let upcomingEventCategories = [...new Set(upcomingEvents.map(event => event.category))];
    let pastEventsCategories = [...new Set(pastEvents.map(event => event.category))];
    let assistanceAndPercentage = filterAssistanceAndPercentage(data.events);
    let eventsCapacity = filterCapacity(data.events);
    let pastValues = filterRevenues(pastEventsCategories, pastEvents);
    let upValues = filterRevenues(upcomingEventCategories, upcomingEvents);

    showTable1(assistanceAndPercentage, eventsCapacity, table1);
    showTables2(pastValues, tablePast,);
    showTables2(upValues, tableUp);
  });
  