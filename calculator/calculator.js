var prompt = require('prompt');
prompt.start();


  prompt.get(['numberOfPassengers', 'priceOfGas', 'averageConsumption', 'totalDistance'], function (err, result) {

    var numberOfPassengers = Number(result.numberOfPassengers);
    var priceOfGas = Number (result.priceOfGas);
    var averageConsumption = Number (result.averageConsumption);
    var totalDistance = Number (result.totalDistance);



 finalPrice =  calculate(numberOfPassengers, priceOfGas, averageConsumption, totalDistance);

    if (!isNaN(finalPrice))
    console.log('Everybody will pay ' + finalPrice);
   else
      console.log("Your input wasn't valid, please use just numbers ")
});


function calculate (numberOfPassengers,priceOfGas,averageConsumption,totalDistance) {
  return (((parseInt(totalDistance)/100)*parseInt(averageConsumption)*parseInt(priceOfGas))/parseInt(numberOfPassengers))
}