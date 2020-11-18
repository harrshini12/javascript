//Ex: 2.2
totalGasCost = 189
friends = 5
pay = totalGasCost / friends
console.log('5 friends has to pay : ' + pay + " EUR each");
console.log('As the driver pay 15 EUR less than others');
driverpay = (pay - 15)
console.log('Driver has to pay: ' + driverpay + ' EUR');
extrapay = (15 / 4);
pay2 = (pay + extrapay)
console.log('Remaining 4 friends has to pay : ' + pay2 + ' EUR each');

//Ex: 3
tomHeight = 180;
samHeight = 160;
if(tomHeight > samHeight)
    {
        console.log('The tall boy is Tom with the height of ' + tomHeight + ' cm');
    }else
    {
         console.log('The tall boy is Sam with the height of ' + samHeight + ' cm');
	}
	
//Ex: 4  
num1 = 20;
num2 = 30;
num3 = 40;
    if(num1>num2 && num1>num3)
		{
			console.log('The largest number is ' + num1);
		}
	else if(num2>num1 && num2>num3)
		{
			console.log('The largest number is ' + num2);
		}
	else if(num3>num1 && num3>num1)
		{
			console.log('The largest number is ' + num3);
		}
		
