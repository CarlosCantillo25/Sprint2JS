export function uploadData(event) {

    let div = document.createElement('DIV')
    div.classList = 'card'
    div.innerHTML =`
            <img src="${event.image}" class="event-img-top" alt="${event.name}">
            <div class="event-body">
                <h5 class="event-title">${event.name}</h5>
                <p class="event-text"> ${event.description}</p>
                <div class="price d-flex justify-content-between">
                  <p>price: $ ${event.price}</p>
                  <a href="./detail.html?id=${event._id}" class="btn btn-primary">details</a>
                </div>     
            </div>`
      return div 
  }
  
export function showData(cards, index) {
    index.innerHTML= ''
    if (cards.length > 0){
      let fragment = document.createDocumentFragment()
      cards.forEach(event => fragment.appendChild(uploadData(event)))
      index.appendChild(fragment)
    } else {
      index.innerHTML= '<h2>No se encontro resultado en su busqueda</h2>'
    }
    
  }
  
export function showCheckbox( cards , contenedor) {
    let fn = cards =>  cards.category
    let categoria = new Set( cards.filter(fn).map(fn)) 
   
    categoria.forEach( cat =>{
      contenedor.innerHTML +=`<input type="checkbox" id="FoodFair" value="${cat}">
      <label for="FoodFair">${cat}</label>`
    } )
  }

// --------------pas events----------------//

 export function uploadDataPast(event){
    let div = document.createElement('DIV')
    div.classList = 'card'
    div.innerHTML =`
            <img src="${event.image}" class="card-img-top" alt="${event.name}">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text"> ${event.description}</p>
              <div class="price d-flex justify-content-between">
                <p>price: ${event.price}</p>
                <a href="./detail.html?id=${event._id}" class="btn btn-primary">details</a>
              </div>
            </div>`
      return div
  }
  
 export function showDataPast(pastEvents, index) {
    index.innerHTML= ''
    if (pastEvents.length > 0){
      let fragment = document.createDocumentFragment()
      pastEvents.forEach(event => fragment.appendChild(uploadDataPast(event)))
      index.appendChild(fragment)
    } else {
      index.innerHTML= '<h2>No se encontro resultado en su busqueda</h2>'
    }
    
  }
  
 export function showCheckboxPast( cards , contenedor) {
    let fn = cards =>  cards.category
    let categoria = new Set( cards.filter(fn).map(fn)) 
   
    categoria.forEach( cat =>{
      contenedor.innerHTML +=`<input type="checkbox" id="FoodFair" value="${cat}">
      <label for="FoodFair">${cat}</label>`
    } )
  }
  
//--------------up comings------------------//

 export function uploadDataUp(event){
    let div = document.createElement('DIV')
    div.classList = 'card'
    div.innerHTML =`
            <img src="${event.image}" class="card-img-top" alt="${event.name}">
            <div class="card-body">
              <h5 class="card-title">${event.name}</h5>
              <p class="card-text"> ${event.description}</p>
              <div class="price d-flex justify-content-between">
                <p>price: ${event.price}</p>
                <a href="./detail.html?id=${event._id}" class="btn btn-primary">details</a>
              </div>
            </div>`
      return div
  }
  
 export function showDataUp(upComingEvents, index) {
    index.innerHTML= ''
    if (upComingEvents.length > 0){
      let fragment = document.createDocumentFragment()
      upComingEvents.forEach(event => fragment.appendChild(uploadDataUp(event)))
      index.appendChild(fragment)
    } else {
      index.innerHTML= '<h2>No se encontro resultado en su busqueda</h2>'
    }
    
  }
  
 export function showCheckboxUp( cards , contenedor) {
    let fn = cards =>  cards.category
    let categoria = new Set( cards.filter(fn).map(fn)) 
   
    categoria.forEach( cat =>{
      contenedor.innerHTML +=`<input type="checkbox" id="FoodFair" value="${cat}">
      <label for="FoodFair">${cat}</label>`
    } )
  }
  

  //------------------stats---------------------------//


// Función para filtrar la capacidad
export function filterCapacity(events) {
  return events.sort((a, b) => a.capacity - b.capacity);
}

// Función para filtrar la asistencia y el porcentaje de asistencia
export function filterAssistanceAndPercentage(events) {
  return events
    .filter(event => event.assistance)
    .map(event => ({
      event: event.name,
      percentage: ((event.assistance / event.capacity)* 100 ).toFixed(2)
    }))
    .sort((a, b) => a.percentage - b.percentage);
}

// Función para filtrar las ganancias
export function filterRevenues(arrayA, arrayB) {
  return arrayA.map(category => {
    const categ = arrayB.filter(event => event.category === category);
    const revenues = categ.reduce((accumulator, event) => {
      const attendance = event.assistance || event.estimate;
      return accumulator + (attendance * event.price);
    }, 0);
    const percentages = (
      categ.reduce((accumulator, event) => {
        const attendance = event.assistance || event.estimate;
        return accumulator + (attendance * 100 / event.capacity);
      }, 0) / categ.length
    ).toFixed(2);
    return {
      category: category,
      revenue: revenues,
      percentage: percentages
    };
  });
}

// Función para crear la primera tabla
export function showTable1(arrayA, arrayB, table) {
  const highPercent = arrayA[arrayA.length - 1];
  const lowPercent = arrayA[0];
  const highCapacity = arrayB[arrayB.length - 1];
  
  table.innerHTML = `
    <th class="subtitle"  colspan="3">Event statistics</th>
    <tr> 
      <td>Events with the highest Percentage of attendance</td>
      <td>Events with the lowest Percentage of attendance</td>
      <td>Event with larger capacity</td>
    </tr>
    <tr>
      <td>${highPercent.event} ${highPercent.percentage}%</td>
      <td>${lowPercent.event} ${lowPercent.percentage}%</td>
      <td>${highCapacity.name} ${highCapacity.capacity.toLocaleString()}</td>
    </tr>
  `;
}

// Función para crear las otras tablas
export function showTables2(array, element) {
  const rows = array.map(event => `
    <tr>
      <td>${event.category}</td>
      <td>$ ${event.revenue.toLocaleString()}</td>
      <td>${event.percentage}%</td>
    </tr>
  `);
  
  element.innerHTML = rows.join('');
}
