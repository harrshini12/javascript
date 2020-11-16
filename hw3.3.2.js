let values = [12, 13, 14];
let min = values[0];
for (let i= 0; i<3; i++){
  if(values[i] < min){
      min = values[i];
  }
}
console.log(min);