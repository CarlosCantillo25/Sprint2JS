const past= document.getElementById("body-past") 

const currentday= data.currentDate
const pastEvents= data.events.filter(event => event.date < currentday)

function uploaddata(events){
    return `<div class="card " style="width: 12rem ; height: 16rem; margin-left:0.1rem">
    <img src="${events.image}" class="card-img-top" alt="${events.name}">
    <div class="card-body">
        <h5 class="card-title">${events.name}</h5>
        <p class="card-text"> ${events.description}</p>
        <div class="price d-flex justify-content-between">
            <p>price: ${events.price}</p>
            <a href="./detail.html?id=${events._id}" class="btn btn-primary">details</a>
        </div>
        
    </div>
    </div>`

}

function showdata(objects, index){
    let template = ""
    for (const  events of objects) {
        template += uploaddata(events)
    } 
    
    index.innerHTML = template
}
showdata(pastEvents, past)

//---------------------checkboxs dinamicos---------------------------------------//

const categories = pastEvents.map(event => event.category)
const filterCategories = new Set(categories)
const arrayFilterCategories = Array.from( filterCategories)
console.log(arrayFilterCategories)

const checkboxPast = document.getElementById("checkbox-past")

function uploadcheckbox(category) {
    return  `<input type="checkbox" id="${category}" value="${category}">
    <label for="FoodFair">${category}</label>`
}

function showcheckbox(arrayFilterCategories, index){
    let template = ""
    for (const  event of arrayFilterCategories) {
        template += uploadcheckbox(event)
    } 
    
    index.innerHTML = template
}
showcheckbox(arrayFilterCategories, checkboxPast)

let checkboxs = document.querySelectorAll("input[type=checkbox]")

let checkedBoxs =[]

for (let i = 0; i < checkboxs.length; i++){
    checkboxs[i].addEventListener("change", function(){
    
    checkedBoxs = []
   
    for ( i=0; i < checkboxs.length; i++){
        if ( checkboxs[i].checked){
            
            checkedBoxs.push(checkboxs[i].value) 

            //-------------checkboxs filtrados---------------//

        }if (checkedBoxs.length === 0){
            showdata(pastEvents, past)
        }else {
        const filterEvents = pastEvents.filter(cat => checkedBoxs.includes(cat.category))
        
        showdata(filterEvents, past)
}
 
    }
    })
        
}
let inputSearchPast =document.getElementById("inputsearchpast")
inputSearchPast.addEventListener("keyup", (elements)=> searchElementPast(elements))

function searchElementPast(elements){
    let dataInputPast = elements.target.value
    
    let dataInputTrimPast = dataInputPast.trim().toLowerCase()
    
    let filterInputPast = pastEvents.filter(event => event.name.toLowerCase().startsWith(dataInputTrimPast))
    
   
    showdata(filterInputPast,  past)
}

