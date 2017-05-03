var rl = require('readline')

var passengers = 50
var cost = 35

console.log(passengers * cost)

var i = rl.createInterface(process.stdin, process.stdout, null)
i.question('What do you think of node.js?\n', function (answer) {

  console.log('Your answer is: ', answer)
  console.log('Thank you for your valuable feedback.')

  i.close()
  process.stdin.destroy()
})