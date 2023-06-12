const index= document.getElementById("body-index")


const currentday= data.currentDate
const events= data.events

function uploaddata(event){
    return `<div class="card " style="width: 12rem ; height: 16rem; margin-left:0.1rem">
    <img src="${event.image}" class="card-img-top" alt="${event.name}">
    <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text"> ${event.description}</p>
        <div class="price d-flex justify-content-between">
            <p>price: ${event.price}</p>
            <a href="./detail.html?id=${event._id}" class="btn btn-primary">details</a>
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
showdata(events, index)

//---------------------checkboxs dinamicos---------------------------------------//

// creamos dinamicamente los checkbox por categoria //

const categories = events.map(event => event.category)
const filterCategories = new Set(categories)
const arrayFilterCategories = Array.from( filterCategories)
console.log(arrayFilterCategories)

const checkboxIndex = document.getElementById("checkbox-index")

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
showcheckbox(arrayFilterCategories, checkboxIndex)

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
            showdata(events, index)
        }else {
        const filterEvents = events.filter(cat => checkedBoxs.includes(cat.category))
        
        showdata(filterEvents, index)
}
 
    }
    })
        
}

//---------------------search filter---------------------------------------//

let inputSearch =document.getElementById("inputsearch")
inputSearch.addEventListener("keyup", (elements)=> searchElement(elements))

function searchElement(elements){
    let dataInput = elements.target.value
    
    let dataInputTrim = dataInput.trim().toLowerCase()
    
    let filterInput = events.filter(event => event.name.toLowerCase().startsWith(dataInputTrim))
    
   
    showdata(filterInput, index)
}