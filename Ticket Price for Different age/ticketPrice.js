readlineSync = require('readline-sync')
let botName = "Sally"
console.log("Hi! My name is " + botName); 
Userinput = readlineSync.question("Tell me your age I will tell you the price of the ticket")
UserinputinNum = Number(Userinput);
ticketPrices = [10, 12, 15, 20, 12];
let agesbelow10 = [];
for (var i = 1; i <= 9; i++) {
    agesbelow10.push(i);
 }
let agesbw10to16 = [];
for (var i = 10; i <= 16; i++) {
    agesbw10to16.push(i);
 }
 let agesbw17to25 = [];
for (var i = 17; i <= 25; i++) {
    agesbw17to25.push(i);
 }
 let agesbw26to60 = [];
for (var i = 26; i <= 60; i++) {
    agesbw26to60.push(i);
 }
if(agesbelow10.includes(UserinputinNum)){
    console.log('the price of the Ticket is ' + ticketPrices[0]+ ' EUR')
}else if (agesbw10to16.includes(UserinputinNum)){
    console.log('the price of the Ticket is ' + ticketPrices[1]+ ' EUR')
}else if (agesbw17to25.includes(UserinputinNum) ){
    console.log('the price of the Ticket is ' + ticketPrices[2]+ ' EUR')
}else if (agesbw26to60.includes(UserinputinNum)){
    console.log('the price of the Ticket is ' + ticketPrices[3]+ ' EUR')
}else{
    console.log('the price of the Ticket is ' + ticketPrices[4]+ ' EUR')
}