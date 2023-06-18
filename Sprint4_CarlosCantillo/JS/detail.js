const url = "https://mindhub-xj03.onrender.com/api/amazing"



fetch (url)
.then ( response => response.json())
.then ( res => {
   let cards = res.events;
   console.log(cards)

    const detail = document.getElementById("divdetail")
    const params = new URLSearchParams (location.search)
    const id = params.get("id")
    
    const findedcard = cards.find(element => element._id == id)
    console.log(findedcard)
    
    detail.innerHTML = `
    <div class="detail-card d-flex">
        <img class="img-detail" src="${findedcard.image}" alt="${findedcard.name}">
        <div class="card-body-1">
            <h5 class="card-title">${findedcard.name}</h5>                
            <p>Date: ${findedcard.date}</p>
            <p class="card-text">description: ${findedcard.description}</p>
            <p>category: ${findedcard.category}</p>
            <p>place: ${findedcard.place}</p>
            <p>capacity: ${findedcard.capacity}</p>
            <p>assitance: ${findedcard.assistance}</p>
            <p>price: $ ${findedcard.price}</p>
         </div>
    </div>` 
})
.catch(error => console.log(error))

