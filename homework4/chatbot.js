readlineSync = require('readline-sync')
let botName = "Sally"
let randomNumber = "78";
console.log("Hi! My name is " + botName + ". I am thinking about a number. Try to guess it! "); 
i = 0;
while(i < 50){
    let userNumber = readlineSync.question("Input the number ");
    if(userNumber === randomNumber){
        console.log("Great job! You guessed the "+ randomNumber + " that I thought of.");
        break;
    }else if(userNumber < randomNumber){
        console.log("My number is larger!");
    }else if(userNumber > randomNumber){
        console.log("My number is smaller!");
    }
    i++;
}
console.log("nice job! you guessed after " + i + " tries")






