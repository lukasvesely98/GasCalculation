window.onload = function () {
    var numberOfPassengers = document.getElementById("numberOfPassengers");
var priceOfGas = document.getElementById("priceOfGas");
var averageConsumption = document.getElementById("averageConsumption");
var totalDistance = document.getElementById("totalDistance");
var button = document.getElementById("button");
var result = document.getElementById("result");
var element = document.createElement("p");

    button.onclick = calculate; ZmenText;
}
/*
parseInt(numberOfPassengers.value)
parseInt(priceOfGas.value)
parseInt(averageConsumption.value)
parseInt(totalDistance.value)
*/

function calculate() {
    result.textContent = ("Everybody will pay "+((parseInt(totalDistance.value)/100)*parseInt(averageConsumption.value)*parseInt(priceOfGas.value))/parseInt(numberOfPassengers.value) );

}





