window.onload = function () {
    var numberOfPassengers = document.getElementById("numberOfPassengers");
var priceOfGas = document.getElementById("priceOfGas");
var averageConsumption = document.getElementById("averageConsumption");
var totalDistance = document.getElementById("totalDistance");
var button = document.getElementById("button");
var checkbox = document.getElementById("checkbox");


  button.onclick = showResult;
};


function calculate() {
    var rValue = (((parseInt(totalDistance.value)/100)*parseInt(averageConsumption.value)*parseInt(priceOfGas.value))/parseInt(numberOfPassengers.value) );

    if (checkbox.checked) {
          rValue = rValue * 2;
        }

        return rValue;

}
function checkResult(result){
  if (document.getElementById("par")) {
    document.getElementById("par").textContent = result;

  }
  else {
    var t = document.createTextNode(result);
    var para = document.createElement("P");

    para.setAttribute("id", "par");
    para.appendChild(t);
    document.getElementById("div").setAttribute("class","jumbotron");
    document.getElementById("div").appendChild(para);
  }
}

function validation (idValue, idHelp) {
  if(isNaN(parseInt(document.getElementById(idValue).value)))
  {
  document.getElementById(idHelp).innerText="please insert just numbers";
  }
  else
  {
    document.getElementById(idHelp).innerText="";
  }
}


function  showResult() {

  validation("numberOfPassengers","passengers");
  validation("priceOfGas","gas");
  validation("averageConsumption","consumption");
  validation("totalDistance","distance");

  if(!isNaN(calculate())) {
    checkResult("Everybody will pay "+calculate());
  }
  else {
    document.getElementById("div").removeAttribute("class","jumbotron");
    document.getElementById("div").removeChild(document.getElementById("par"));
  }



}

