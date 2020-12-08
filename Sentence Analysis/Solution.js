let userSent = readlineSync.question("Hey! Tell me a sentence, I'll do a grammar check for you.");
    noOfChar = userSent.length;
    console.log("Your sentence is " + noOfChar + " characters long")
    let userSentArray = userSent.split(" ");
    let longest = 0;
    let word = null;
    for (let i = 0; i < userSentArray.length; i++) {
        if (longest < userSentArray[i].length) {
            longest = userSentArray[i].length;
            word = userSentArray[i];
        }
    }
    longestWord = word;
    console.log("The longest word in your sentence is: " + longestWord)
    avgLenght = noOfChar / userSentArray.length 
    console.log("The average length of the words in your sentence is: " + avgLenght)
    sentWithZ = userSent.replace('a' ,'z');
    console.log(sentWithZ);
    let sentWithStar = '';
    let list = ['stupid', 'mental', 'bad', 'negative', 'annoying'];
    for(let i= 0; i < userSentArray.length; i++){
        if(list.includes(userSentArray[i])){
            star = '*'.repeat(userSentArray[i].length);
            sentWithStar += ' ' + userSentArray[i].replace(userSentArray[i] ,star); 
        }else{
            sentWithStar += ' ' + userSentArray[i];
        }
    }
    console.log(sentWithStar);
