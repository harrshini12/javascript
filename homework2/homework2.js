readlineSync = require('readline-sync')

botName = "maya"

userName = readlineSync.question("Hi! My name is " + botName + "! What is your name?\n");

console.log("nice to meet you, " + userName)

age = readlineSync.question('please tell me your age ' + userName)

currentyear = 2020;
birthyear = currentyear - age;
console.log("your birthyear is " + birthyear);
readlineSync.question("Hey, " + userName + ",let's play a guessing game. Are you ready? Press Enter!")
readlineSync.question("So," + userName + ",think about a number and write it down on paper! When ready, press Enter.")
remainder3 = readlineSync.question("Ok. So if you divide your number by 3, what is the remainder?")
remainder5 = readlineSync.question("Nice! If you divide your number by 5, what is the remainder?")
remainder7 = readlineSync.question("One more! If you divide your number by 7, what is the remainder?")
readlineSync.question("Okay, ready for me to blow your mind?")
secretNumber = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105
console.log("Your secret number is...." + secretNumber + "!")
readlineSync.question("I am amazing, right?")
