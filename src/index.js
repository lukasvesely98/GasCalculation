window.onload = function () {
    var numberOfPassengers = document.getElementById("numberOfPassengers");
var priceOfGas = document.getElementById("priceOfGas");
var averageConsumption = document.getElementById("averageConsumption");
var totalDistance = document.getElementById("totalDistance");
var button = document.getElementById("button");
var checkbox = document.getElementById("checkbox");



  button.onclick = calculate;
}
/*
parseInt(numberOfPassengers.value)
parseInt(priceOfGas.value)
parseInt(averageConsumption.value)
parseInt(totalDistance.value)
*/

function calculate() {
    var rValue = (((parseInt(totalDistance.value)/100)*parseInt(averageConsumption.value)*parseInt(priceOfGas.value))/parseInt(numberOfPassengers.value) );

    if (checkbox.checked) {
          rValue = rValue * 2;
        }

  var t = document.createTextNode("Everybody will pay " + rValue);
  var para = document.createElement("P");

  para.appendChild(t);
  document.getElementById("div").appendChild(para);

}





