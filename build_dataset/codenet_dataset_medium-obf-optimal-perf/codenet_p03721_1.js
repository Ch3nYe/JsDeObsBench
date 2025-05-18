"use strict";

function main(input){
  const args = input.trim().split('\n').map(_=>_.split(' ').map(x=>parseInt(x,10)));
  const k = args[0][1];
  const arr = args.slice(1);
  
  let cnt = 0;
  let i = 0;
  while(cnt < k){
    cnt += arr[i][1];
    i++;
  }
  
  console.log(arr[i-1][0]);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));  