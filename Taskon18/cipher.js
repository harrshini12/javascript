/* #### Cipher
Starting out with a string that contains all alphabet letters:
alphabet='abcdefghijklmnopqrstuvwxyz'
Write code that takes as input a message and encodes it according to the following rule: Each letter gets shifted to the right by 3 places. As a result, 'a' becomes 'd', 'e'. The last three letters in the alphabet are wrapped around to the beginning: x becomes a, y becomes b and z becomes c. Non-letter characters are not modified.
 becomes 'h' and so on.
Example Input: 'hi i am paul'
Example Output: 'kl l dp sdxo'
Hint: you can treat the string alphabet as an array:
console.log(alphabet.length)  // will print the length of the alphabet
console.log(alphabet[0])  // will print the first letter in the string, 'a' */
let alp =    'abcdefghijklmnopqrstuvwxyz';
let Cipalp = 'defghijklmnopqrstuvwxyzabc';
alpArray = alp.split("");
CipalpArray = Cipalp.split("");
readlineSync = require('readline-sync')
let botName = "Sally"
console.log("Hi! My name is " + botName); 
Userstring = readlineSync.question("Give me a word i will give you Cipher word ");
UserstringArr = Userstring.split("");
count = 0;
while(count <= 25){
for(let i=0; i <=UserstringArr.length; i++)
{
    if(Userstring[i] === alpArray[count]){
        console.log(CipalpArray[count]);
    }
}
count++;
}

