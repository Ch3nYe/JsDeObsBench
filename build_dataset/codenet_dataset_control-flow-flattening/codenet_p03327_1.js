'use strict'

function Main(input) {
  const N = Number(input);

  if(N <= 999) {
    console.log('ABC');
  } else {
    console.log('ABD');
  }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());