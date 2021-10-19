let age = "16";
let tot = "99";

let totale = age > 15 ? "Marco" : ( age < 9 ? "Mario" : "Rossi");

console.log(totale);

/* if( age > 15 ) {
    let totale = "Marco";
} else {
    let totale = "Messina";
} */

switch (age) {
    case 17:

    alert("minore di 18");

    break;

    case 19:
        
    alert("maggiore di 18");

    break;

    default:

    alert("Sei maggiorenne");

    break;
}