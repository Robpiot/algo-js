// EXO 5.1
function askTvSerie() {
    let movieName = prompt("What's the name of the movie ? :");
    let  productionYear= prompt("Which year was it released ?  :");
    let castMembers = [];
    while(confirm("Do you want to add a cast members ?")) {
        let name = prompt('Enter the of the cast members:');
        castMembers.push({name})
    }
    let myObject = {movieName, productionYear, castMembers};


    return myObject

    ;

}
console.log(askTvSerie());




// EXO 5.2