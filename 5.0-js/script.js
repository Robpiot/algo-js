// EXO 5.1
 
let myObject = {
    myMovies : [],
    serieName : prompt("What's the name of the movie ? :"),
    productionYear : Number(prompt("Which year was it released ?  :")),
    castMembers : [],
   
}


function askTvSerie() {
    
    
    while(confirm("Do you want to add a cast members ?")) {
        let cast = prompt('Enter the of the cast members:');
        myObject.castMembers.push(cast)
    }
   
    
}
askTvSerie();
console.log(JSON.stringify(myObject));


// EXO 5.2



function randomizeCast(tvSerie) {
    

    function shuffleArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    tvSerie.castMembers = shuffleArray(tvSerie.castMembers);
    
}
randomizeCast(myObject);
console.log(JSON.stringify(myObject));