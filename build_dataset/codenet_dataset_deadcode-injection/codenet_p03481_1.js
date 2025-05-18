'use strict';

const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split(' ').map(x => x*1);
let ans = 0;
let max = input[1];
let div = input[0];
let tmpNum = div;
while(tmpNum < max+1){
  tmpNum *= 2;
  ans++;	
}

console.log(ans);