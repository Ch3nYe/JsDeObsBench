"use strict";
const Main = (input) =>{
   let xs = input.trim().split('\n');
   let N = Number(xs[0]);
   let S = xs[1].split('');
   let ans = 0;
   for(let i=0; i<=N-3; i++){
   	if(S[i]+S[i+1]+S[i+2]=='ABC'){
   	  ans++
    }
   }
   console.log(ans);

}
Main(require('fs').readFileSync('/dev/stdin','utf8'));