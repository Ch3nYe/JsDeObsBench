"use strict";
function main(input) {
  let kari = input[0].trim().split(" ");
 
  let n = parseInt(kari[0]);
  let a = parseInt(kari[1]);
  let b = parseInt(kari[2]);
 
  let c = a + b;
  let ans = 0;

  if(a === 0){
    console.log(0);
  }else if(b === 0){
    console.log(n);
  }else{
    if(n%c < a){
      ans = Math.floor(n/c)*a + n%c;
    }else{
      ans = Math.floor(n/c)*a + a;
    }
    console.log(ans);
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"));