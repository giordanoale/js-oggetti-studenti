// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

// var alessandro = {
//     nome: "alessandro",
//     cognome: "giordano",
//     eta: 31
// }



// for (var key in alessandro) {
//     console.log(key + ": " + alessandro[key]);
// }

// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

var classe = [
    { 
        nome: "samuel",
        cognome: "romano",
        anni: 49,
        luogo_di_nascita: "torino"
    },
    {
        nome: "davide",
        cognome: "dileo",
        anni: 46,
        luogo_di_nascita: "torino"
    },
    {
        nome: "massimiliano",
        cognome: "casacci",
        anni: 57,
        luogo_di_nascita: "torino"
    },
]

// // console.log(classe);

// for (var i = 0; i < classe.length; i++) {
//     console.log(classe[i]["nome"] + " " + classe[i]["cognome"]);
// }

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

var utente = {};

var nomeUtente = prompt("Inserisci un nome");
var cognomeUtente = prompt("Inserisci un cognome");
var etaUtente = parseInt(prompt("Inserisci l'età"));

utente.nome = nomeUtente;
utente.cognome = cognomeUtente;
utente.eta = etaUtente;

console.log(utente);

classe.push(utente);

console.log(classe);