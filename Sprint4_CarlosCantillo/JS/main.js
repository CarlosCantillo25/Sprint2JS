const index = document.getElementById("body-index");
const checkboxIndex = document.getElementById("checkbox-index");
let inputSearch = document.getElementById("inputsearch");

const url = "https://mindhub-xj03.onrender.com/api/amazing"

let cards;

fetch (url)
  .then( response => response.json())
  .then( data => {
    cards = data.events;
    
    showCheckbox(cards,checkboxIndex) ;
    showData(cards, index)
    
     inputSearch.addEventListener("keyup",filter)
     checkboxIndex.addEventListener( "change", filter)

     function filter(){
      let checked = [...document.querySelectorAll( "input[type='checkbox']:checked ")].map(elemento => elemento.value)
      let filterCatergory = cards.filter(cards => checked.includes(cards.category)|| checked.length===0)
      let fileterSearch = filterCatergory.filter(cards => cards.name.toLowerCase().trim().includes(inputSearch.value.toLowerCase()))
     
       showData(fileterSearch, index) 
    } 
    
  })  
  .catch( error => console.log(error))
   
  import { uploadData,showCheckbox,showData } from "./functions.js";