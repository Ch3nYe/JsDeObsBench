'use strict'

function Main(input) {
  let s = input;
  let tmp = s.split('ABC');
  let result = tmp.length - 1;
  while(tmp.length !== 1){
    s = tmp.join('BCA')
    tmp = s.split('ABC');
    result += tmp.length - 1;
  }
  console.log(result)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
