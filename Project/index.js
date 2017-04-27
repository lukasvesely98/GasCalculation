window.onload = function () {
    var numberOfPassengers = document.getElementById("numberOfPassengers");
var priceOfGas = document.getElementById("priceOfGas");
var averageConsumption = document.getElementById("averageConsumption");
var totalDistance = document.getElementById("totalDistance");
var button = document.getElementById("button");
var result = document.getElementById("result");
var checkbox = document.getElementById("checkbox");
var rValue;


    button.onclick = calculate;
}
/*
parseInt(numberOfPassengers.value)
parseInt(priceOfGas.value)
parseInt(averageConsumption.value)
parseInt(totalDistance.value)
*/

function calculate() {
    rValue = (((parseInt(totalDistance.value)/100)*parseInt(averageConsumption.value)*parseInt(priceOfGas.value))/parseInt(numberOfPassengers.value) );

    if (checkbox.checked) {
          rValue = rValue * 2;
        }

    result.textContent = "Everybody will pay " + rValue;

}





