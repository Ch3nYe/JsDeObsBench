"use strict";

function arrayOfDivisors(n){
  const divisor = new Array();
  divisor[0] = 1;
  
  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      divisor.push(i);
    }
  }
  
  const p = divisor.length;
  
  if(Math.sqrt(n) !== divisor[p - 1]){
    divisor.push(n / divisor[p - 1]);
  }
  
  for(let i = p - 2; 0 <= i; i--){
    divisor.push(n / divisor[i]);
  }
  
  return divisor;
}

(function main(input){
  const n = Number(input.trim());
  
  const subOnly = arrayOfDivisors(n - 1).length - 1;
  
  let divIncluded = 0;
  
  const divOfN = arrayOfDivisors(n);
  divOfN.shift();
  for (let d of divOfN){
    let n1 = n;
    do{
      n1 /= d;
    } while (n1 % d === 0);
    
    if (n1 === 1){
      divIncluded++;
    } else if (arrayOfDivisors(n1 - 1).indexOf(d) > -1){
      divIncluded++;
    }
  }
  
  console.log(subOnly + divIncluded);
  
})(require('fs').readFileSync('/dev/stdin', 'utf8'));

