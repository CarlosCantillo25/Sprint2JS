const past= document.getElementById("body-past") 
const checkboxPast = document.getElementById("checkbox-past");
let inputsearchPast = document.getElementById("inputsearchpast");

const url = "https://mindhub-xj03.onrender.com/api/amazing"

let cards;

fetch (url)
  .then( response => response.json())
  .then( data => {
    cards = data.events;
    const currentday= data.currentDate
    const pastEvents= cards.filter(event => event.date < currentday)
   
    showDataPast(pastEvents, past)
    showCheckboxPast(cards,checkboxPast) ;
    
     inputsearchPast.addEventListener("keyup",filter)
     checkboxPast.addEventListener( "change", filter)

     function filter(){
      let checked = [...document.querySelectorAll( "input[type='checkbox']:checked ")].map(elemento => elemento.value)
      let filterCatergory = pastEvents.filter(cards => checked.includes(cards.category)|| checked.length===0)
      let filterSearch = filterCatergory.filter(cards => cards.name.toLowerCase().trim().includes(inputsearchPast.value.toLowerCase()))
      console.log(filterSearch)
      showDataPast(filterSearch, past)
    } 
  })
  .catch( error => console.log(error))
   

  import { uploadDataPast,showCheckboxPast,showDataPast } from "./functions.js";