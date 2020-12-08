readlineSync = require('readline-sync')

let botName = "Sally"
console.log("Hi! My name is " + botName); 

Userstring = readlineSync.question("Give me a sentence i will give you Cipher sentence ");
let alphabets ='abcdefghijklmnopqrstuvwxyz';

letters = alphabets.split("");
Ciphersentence = '';

for(i=0; i<= Userstring.length-1 ; i++){
    if(Userstring[i] !== ' '){
        let originalIndex = letters.indexOf(Userstring[i]);
        let newIndex = originalIndex +3 ;
        newIndex = newIndex % alphabets.length;
        Ciphersentence += letters[newIndex];
    }else{
        Ciphersentence += ' ';
    } 
}

console.log(Ciphersentence);











