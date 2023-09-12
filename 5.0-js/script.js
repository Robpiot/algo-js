// EXO 5.1
 

let movieName = prompt("What's the name of the movie ? :");
let productionYear= Number(prompt("Which year was it released ?  :"));
let castMembers = [];
const myObject = {movieName, productionYear, castMembers};
function askTvSerie() {
    
    
    while(confirm("Do you want to add a cast members ?")) {
        let cast = prompt('Enter the of the cast members:');
        castMembers.push(cast)
    }
   
    return myObject;
}
askTvSerie();
console.log(myObject);


// EXO 5.2



function randomizeCast(tvSerie) {
      rand = Math.floor(Math.random()*tvSerie.castMembers.length)
        result = tvSerie.castMembers[rand]
   return result;
}
randomizeCast(myObject)
console.log(randomizeCast(myObject)); 