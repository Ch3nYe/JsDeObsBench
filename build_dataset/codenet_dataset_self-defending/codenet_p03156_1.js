"use strict";
const Main = (input) =>{
   let xs = input.trim().split('\n');
   let N = Number(xs[0]);
   let A = Number(xs[1].split(" ")[0]);
   let B = Number(xs[1].split(" ")[1]);
   let P1 = [];
   let P2 = [];
   let P3 = [];
   let P = xs[2].split(' ').map(v=>parseInt(v,10));
   
   for(let i=0; i<N; i++){
     if(P[i]<=A){
       P1.push(P[i]);
     }else if(P[i]<=B){
       P2.push(P[i]);
     }else{
       P3.push(P[i])
     }
   }
   let ans =Math.min(P1.length,P2.length,P3.length);
   console.log(ans)
}
Main(require('fs').readFileSync('/dev/stdin','utf8'));