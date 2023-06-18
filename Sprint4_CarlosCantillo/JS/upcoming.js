const up= document.getElementById("body-up") 
const checkboxUp = document.getElementById("checkbox-up");
let inputsearchUp = document.getElementById("inputsearchUp");

const url = "https://mindhub-xj03.onrender.com/api/amazing"

let cards;

fetch (url)
  .then( response => response.json())
  .then( data => {
    cards = data.events;
    
    const currentday= data.currentDate
    const upComingEvents= cards.filter(events => events.date > currentday)
    
    showDataUp(upComingEvents, up)
    showCheckboxUp(cards,checkboxUp) ;
    
    inputsearchUp.addEventListener("keyup",filter)
    checkboxUp.addEventListener( "change", filter)

    function filter(){
      let checked = [...document.querySelectorAll( "input[type='checkbox']:checked ")].map(elemento => elemento.value)
      let filterCatergory = upComingEvents.filter(cards => checked.includes(cards.category)|| checked.length===0)
      let filterSearch = filterCatergory.filter(cards => cards.name.toLowerCase().trim().includes(inputsearchUp.value.toLowerCase()))
      console.log(filterSearch)
      showDataUp(filterSearch, up)
    } 
  })
  .catch( error => console.log(error))
  
  
  import { uploadDataUp,showCheckboxUp,showDataUp } from "./functions.js";
