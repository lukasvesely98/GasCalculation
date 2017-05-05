var prompt = require('prompt');

prompt.start();

prompt.get(['numberOfPassengers', 'priceOfGas','averageConsumption','totalDistance'], function (err, result) {

  console.log('Everybody will pay ' + calculate(result.numberOfPassengers,result.priceOfGas,result.averageConsumption,result.totalDistance));

});

function calculate (numberOfPassengers,priceOfGas,averageConsumption,totalDistance) {
  return (((parseInt(totalDistance)/100)*parseInt(averageConsumption)*parseInt(priceOfGas))/parseInt(numberOfPassengers))
}