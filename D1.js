console.log("hello world!");
/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let boolean = 8 < 5; // false ( boolean serve per verificare se una valore sia vero o falso)
let number = 49503; // questa datatype serve ad indicare dei numeri
let stringa = "ciao"; // questa è una stringa,per poterla considerare tale bisogna applicare gli apici ('')
let boh = null; //quando un valore non viene dichiarato si definisce nullo
let ciao; // il suo valore è l'esplicito del niente
console.log(boolean);
console.log(number);
console.log(stringa);
console.log(boh);
console.log(ciao);

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Daniel";
console.log(myName);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("la somma tra 12 e 20 è", 12 + 20);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = 'Indrieri'
console.log(myName) // in questa riga noteremo che myName ha subito un cambiamento
const myName2 = 'Daniel'
// myName2 = 'Indrieri' Inquesta riga noteremo che non si puo apportare un cambiametno se si usa la 'costante'


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let y = 4;
let total = x - y;
console.log("da qui si potra vedere il risultato tra x - y =", total);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let name1 = "john";
let name2 = "John";
let  boolean1 = name1 === name2;
console.log(boolean1); // qui noteremo la risposta è FALSA perche i 2 nomi non sono uguali
name2= name2.toLowerCase()
name1= name1.toLowerCase();
let boolean2 = name1 === name2;
console.log(boolean2) // qui noteremo che la risposta è VERA perchè in questa variabile è stata applicata una modifica di testo
