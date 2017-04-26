window.onload = function () {
    var numberOfPassengers = document.getElementById("numberOfPassengers");
var priceOfGas = document.getElementById("priceOfGas");
var averageConsumption = document.getElementById("averageConsumption");
var totalDistance = document.getElementById("totalDistance");
var button = document.getElementById("button");

/*parseInt(numberOfPassengers.value)
*parseInt(priceOfGas.value)
*parseInt(averageConsumption.value)
*parseInt(totalDistance.value)
* */

function calculate() {
    alert(((parseInt(totalDistance.value)/100)*parseInt(averageConsumption.value)*parseInt(priceOfGas.value))/parseInt(numberOfPassengers.value) );
}

button.onclick = calculate;

}
