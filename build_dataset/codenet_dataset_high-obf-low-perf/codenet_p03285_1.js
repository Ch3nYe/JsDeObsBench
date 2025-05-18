'use strict';

function Main(input) {
  let N = Number(input);

  const func = () => {
    if(N < 4) {
      console.log('No');
    } else if (N % 4 === 0) {
      console.log('Yes');
    } else if (N % 7 === 0) {
      console.log('Yes');
    } else {
      N -= 4;
      func();
    }
  };

  func();



};

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());