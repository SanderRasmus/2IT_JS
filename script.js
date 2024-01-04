/* Gammel måte å lage variabel på 
var tall = 3;

// Ny måte å lage variabel på - Har ikke noe å si på ulike datatyper
// Fungerer både string og integers. Let verdien kan endres når som helst
let tall1 = 3;
let tall2 = 4;

tall1 = 5;

// document.write(tall1 + tall2);

// Konstant / Constant. En måte å lage lister / arrays på. Kan ikke endres, denne verdien er satt.
const liste = [];
*/


// Stemmerett sjekker.

let alder = 16;

if(alder >= 18){
    document.write("Du har stemmerett.")
}
else {
    document.write("Du har ikke stemmerett.")
}

// Førerkort sjekker

let alder2 = prompt("Hvor gammel er du?");

if(alder2 >= 18){
    document.write("Du kan ta førerkort.")
}
else if(alder2 >= 16){
    document.write("Du kan øvelseskjøre.")
}
else {
    document.write("Du kan ikke ta førerkort, eller øvelseskjøre.")
}

// document.write("Hallo")

// console.log("Hei")