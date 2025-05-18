'use strict'
function Main(input) {
    input = input.split("\n")[0]
    const numbers = input.split(' ').map(i => {
      return parseInt(i, 10)
    })

    const a = numbers[0]
    const b = numbers[1]
    let result = 0

    if(a > b) {
      result = 2*a - 1
    } else if (b > a) {
      result = 2*b - 1  
    } else {
      result = 2 * a
    }
    
    console.log(result)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"))