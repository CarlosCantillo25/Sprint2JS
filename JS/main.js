const index= document.getElementById("body-index")
const upcoming= document.getElementById("Upcoming") 
const up= document.getElementById("body-up") 
const pastcoming= document.getElementById("pastcoming")
const past= document.getElementById("body-past")


const currentday= data.currentDate
const totalcards= data.events

 if (up){
    showdata(totalcards,up, "up")
}else if (past){
    showdata(totalcards,past,"past")
}else {
    showdata(totalcards,index,"home")
}
 
function uploaddata(events){
    return `<div class="card " style="width: 12rem ; height: 16rem; margin-left:0.1rem">
    <img src="${events.image}" class="card-img-top" alt="${events.name}">
    <div class="card-body">
        <h5 class="card-title">${events.name}</h5>
        <p class="card-text"> ${events.description}</p>
        <div class="price d-flex justify-content-between">
            <p>price: ${events.price}</p>
            <a href="./detail.html" class="btn btn-primary">details</a>
        </div>
        
    </div>
</div>`

}
function showdata(objects, index, identify){
    let template = ""
    for (const events of objects) {
        if (identify === "up"){
            if (events.date > currentday){
                template += uploaddata(events)
            }
        }else if (identify === "past"){
            if (events.date < currentday){
                template += uploaddata(events)
            }
        }else {
            template += uploaddata(events)
        }
    } 
    /* console.log(template) */
    index.innerHTML = template
}
