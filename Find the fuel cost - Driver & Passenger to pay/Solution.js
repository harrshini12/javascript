let totalGasCost = 189;
let passengers = 5;
let driverDiscount = 15;

// This formula we find by thinking about the problem mathematically (pen & paper)
let passengerCost = (totalGasCost + driverDiscount)/passengers;
let driverCost = passengerCost - driverDiscount;

console.log(passengerCost);
console.log(driverCost);

// should be 15
console.log(passengerCost - driverCost);

// should be equal to totalGasCost
let totalSum = 4 * passengerCost + driverCost;
console.log(totalSum);
