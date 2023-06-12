
const contenedor = document.getElementById("divdetail")
const params = new URLSearchParams (location.search)
const id = params.get("id")
console.log(params.get("id"))
const findedcard = data.events.find(element => element._id === id)

console.log(findedcard)
 contenedor.innerHTML = `<div class="detail-card d-flex">
 <img class="img-detail" src="${findedcard.image}" alt="${findedcard.name}">
 <div class="card-body-1">
     <h5 class="card-title">${findedcard.name}</h5>
     <p>id: 1 </p>                  
     <p>Date: ${findedcard.date}</p>
     <p class="card-text">description: ${findedcard.description}</p>
     <p>category: ${findedcard.category}</p>
     <p>place: ${findedcard.place}</p>
     <p>capacity: ${findedcard.capacity}</p>
     <p>assitance: ${findedcard.assistance}</p>
     <p>price: $ ${findedcard.price}</p>
     
     
 </div>
</div>
 `