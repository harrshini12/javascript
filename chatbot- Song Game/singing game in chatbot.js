readlineSync = require('readline-sync')

botName = "maya"

UserNumber = readlineSync.question("Hi! My name is " + botName + " Please tell me your number\n");

word = readlineSync.question('Great! Now give me a word.');
let song = ' ';
for (let num = 1; num <= UserNumber ; num++){
        song += word;
}
console.log(song);