
var pasengers = 50;

var cost = 35;

console.log( pasengers * cost)

var rl = require('readline');

var i = rl.createInterface(process.stdin, process.stdout, null);
i.question("What do you think of node.js?", function(answer) {

  console.log("Thank you for your valuable feedback.");

  
  i.close();
  process.stdin.destroy();
});