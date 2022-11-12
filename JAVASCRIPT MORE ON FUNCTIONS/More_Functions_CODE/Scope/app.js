// ==============
// FUNCTION SCOPE
// ==============
let totalEggs = 0;
function collectEggs() {
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

const bird = 'Scarlet Macaw';
function birdWatch() {
    const bird = 'Great Blue Heron';
    console.log(bird);
}
birdWatch()

// ==============
// BLOCK SCOPE
// ==============
// let radius = 8;
// if (radius > 0) {
//     const PI = 3.14159;
//     let msg = 'HIII!'
// }
// console.log(radius);
// console.log(msg)

// for (let i = 0; i < 5; i++) {
//     let msg = "ASKLDJAKLSJD";
//     console.log(msg)
// }
// console.log(msg)
// console.log(i)

// ==============
// LEXICAL SCOPE
// ==============

function bankRobbery() {
    const heroes = ['Spiderman', 'Wolverine', 'Black Panther', 'Batwoman']
    function cryForHelp() {
        let color = 'purple';
        function inner() {
            for (let hero of heroes) {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`)
            }
        }
        inner();
    }
    cryForHelp();
}

// let and const keyword respects both block scope and function scope
// but var keyword only respects function scope

// let ball = 5;
// if(true){
//     let ball = 6;
// }
// console.log(ball);
// prints 5

// ----------------------------------------------------------

// var ball = 5;
// if(true){
//     let ball = 6;  // scope limited to block
// }
// console.log(ball);
// prints 5

// ----------------------------------------------------------

// let ball = 5;
// if(true){
//     var ball = 6;
// }
// console.log(ball);
// error because both wants to get printed

// ----------------------------------------------------------

// var ball = 5;
// if(true){
//     var ball = 6;
// }
// console.log(ball);
// prints 6
// bascially jo pehle waale ball tha vo hi update hua hai, new declare nahi hua
