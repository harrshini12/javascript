readlineSync = require('readline-sync')

botName = "maya"
MinutesSpend = [40, 30, 20, 45, 15];
UserNumber = readlineSync.question("Hi! My name is " + botName + " \nThis is the time you spent on social media in the last 5 days:\n" + MinutesSpend);
//avarage time spend
let sum = 0;
let avg = 0;
for (let k=0; k<5; k++){
  sum += MinutesSpend[k];
  avg = (sum/MinutesSpend.length);
}
console.log('The average time is: '+ avg + ' minutes.');
//maximum time spend 
let max = MinutesSpend[0];   
for (let i=0; i<5; i++){
  if(MinutesSpend[i] > max){
      max = MinutesSpend[i];
  }
}
console.log('The maximum time spent in a day is: ' + max + ' minutes.');
//minimum time spend 
let min = MinutesSpend[0];
for (let j=0; j<5; j++){
  if(MinutesSpend[j] < min){
      min = MinutesSpend[j];
  }
}
console.log('The minimum time spent in a day is: '+ min + ' minutes.');
//total time spend 
let SumInMinutes = 0;
let SumInHours = 0;
let BalanceMinutes = 0;
for (let l=0; l<5; l++){
    SumInMinutes += MinutesSpend[l];
    SumInHours =Math.floor(SumInMinutes / 60); 
    BalanceMinutes = SumInMinutes % 60;
}
console.log('The total time spent in the last 5 days is: '+ SumInHours + ' hours and '+ BalanceMinutes + ' minutes');
