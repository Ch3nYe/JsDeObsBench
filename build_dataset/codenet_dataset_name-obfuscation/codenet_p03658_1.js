"use strict";
const Main = (input) =>{
   let xs = input.trim().split('\n');
   let N = Number(xs[0].split(' ')[0]);
   let K = Number(xs[0].split(' ')[1]);
   let l = [];
   for(let i=0; i<N; i++){
   l.push(xs[1].split(' ')[i]);
   }
   const compare = (b, a)=>{ //関数名は何でもOK
   return a - b;  //a - b 昇順 b - a 降順
   }
   l.sort(compare);
   
   let ans = 0;
   for(let i=0; i<K; i++){
     ans += Number(l[i]);
   }  
   console.log(ans);

}
Main(require('fs').readFileSync('/dev/stdin','utf8'));