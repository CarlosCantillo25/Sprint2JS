// ejercicio 1 //

const ethylLevel= 5
 
function beerfilter(beers, ethylLevel) {
    const filterbeers = beers.filter((beer)=> beer.abv <= ethylLevel);

    const result = filterbeers.map((beer) =>{

   return {
    name: beer.name,
    alcohol: beer.abv,
    bitter: beer.ibu,
   };
 });
    console.log (result)
}
beerfilter(beers, ethylLevel);

//-------------------------------------------------

// ejercicio 2 //

const higheralcoholgrade = 7.2
 
function beerfilter ( beers){
    let filterbeers = beers.filter((beer) => beer.abv >= higheralcoholgrade);
    let result = filterbeers.map((beers) => {
        return {
            name: beers.name,
            alcohol: beers.abv
        }
    });
    console.log(result)

}
beerfilter(beers)

//-------------------------------------------------
  // ejercicio 3 //

 let lowerbitter = 41.9

  function beerfilter (beers){
     let filterbeers = beers.filter((beer)=> beer.ibu <= lowerbitter);
     let result = filterbeers.map((beers) => {
         return {
             name: beers.name,
             bitter: beers.ibu
         }
     });
     console.log(result)
  }
  beerfilter(beers)

//-------------------------------------------------

// ejercicio 4 //

function ordenarCervezasPorPropiedad(beers, propiedad, ascendente) {
  const orderedBeers = beers.sort((a, b) => {
    if (ascendente) {
      return a[propiedad] - b[propiedad];
    } else {
      return b[propiedad] - a[propiedad];
    }
  });

  const beersTop10 = orderedBeers.slice(0, 10);

  console.log(beersTop10);

  return beersTop10;
}
const propiedad = 'abv';
const ascendente = true;
ordenarCervezasPorPropiedad(beers, propiedad, ascendente)



