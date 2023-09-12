// exo 4.1

// let width = Number(prompt('What is the width of the rectangle ? : '));
// let height = Number(prompt('What is the height of the rectangle ? : '))
// function calcSurface(a, b) {
    
//     return a*b; 

//     // This function can calculate the surface of a rectangle with users input as it multiply them. It can only have 2 inputs set as height and width.
// }
// alert('the surface of the rectangle is ' + calcSurface(width, height))


// exo 4.2


// function rand10() {
    
//     return Math.floor((Math.random()*10)+1)
// }
// alert("The random number you generate is " + rand10())

// this function generate a number between 1 and 10 every time the function is called.


// exo 4.3

// let n = Number(prompt('How many randoms numbers do you want ? '));
// randomsNumbers = [];
// function multiRand() {
//     for (let i = 0; i < n; i++) {
//         randomsNumbers.push(rand10());
        
//     }
//     return randomsNumbers
   
    
// }
// console.log(multiRand());

// The function multiRand() will add several items in the array of randomsNumbers, using the function rand10 that we create before. It use a for loop allowing to let the use select the ammount of randoms numbers he wants.


// Exo 4.4



// learners = ["Alexandre Van", "Antoine", "Bastien", "Carole", "Dorian", "Elizabeth", "Elodie", "Justin", "Justine F", "Justine L", "Kimi", "Layla", "Lidwine", "Lucas", "Marie", "Mathias", "Okly", "Pierre M", "Robin", "Rosalie", "Stephane", "Tim", "Tom", "Valentin", "Alexandre Vens", "Virginie"];
// const n = Number(prompt("Pick a number between 1 & 26"))

// function pickLearner (learners, n) {
//     if (n <0 || n > learners.length) {
//         alert('Number is higher than the numbers of items inside the array !')
//         return [];
//     }
//     let learners2 = [...learners];
//     let result = [];

//     for (let i =0; i < n; i++) {
//         const resultRandom = Math.floor(Math.random()* learners2.length);
//         result.push(learners2[resultRandom]);
//         learners2.splice(resultRandom, 1)
//     }
//     return result
// }


// console.log(pickLearner(learners, n ));

// This program let you get randoms items from the learners array. You can select the ammount of learners you want and the program will give you that exact number of learners. 


// EXO 4.5

// let x = Number(prompt('Enter the first value of the first point'));
// let y = Number(prompt('Enter the second value of the first point'));
// let k =  Number(prompt('Enter the first value of the second point'));
// let l =  Number(prompt('Enter the second value of the second point'));
// let a = [x, y]
// let b =[k, l]
// function calcDistance(a,b) {
//     const distance = Math.hypot(a[0]-b[0], a[1]-b[1]);
//     return distance
    
// }
// console.log(calcDistance(a,b))


// This program can calculate the distance between 2 point on a 2d graph, you have to store both coordonate onto a prompt, which allows you to calculate precisely the distance. 


// EXO 4.6

// let a = Number(prompt('Which number do you want to factorialize ? : '));

// function factorial(a) {
//     if (a < 0) 
//     return -1

//     else if (a == 0)
//     return 1;
// else {
//     return (a* factorial(a-1))
// }
// }
// console.log(factorial(a));












