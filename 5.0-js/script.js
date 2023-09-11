// EXO 5.1


    
function askTvSerie() {
    let movieName = prompt("What's the name of the movie ? :");
    let productionYear= prompt("Which year was it released ?  :");
    let castMembers = [];
    
    while(confirm("Do you want to add a cast members ?")) {
        let cast = prompt('Enter the of the cast members:');
        castMembers.push({cast})
    }
    const myObject = {movieName, productionYear, castMembers};
    return myObject;
}
console.log(askTvSerie());




// EXO 5.2
const tvSerie = askTvSerie()
function randomizeCast(tvSerie) {
      result = Math.floor(Math.random([])*tvSerie.length)

   return result;
    


}
console.log(randomizeCast(tvSerie));