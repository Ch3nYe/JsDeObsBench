'use strict';
(function(input){
  input=input.trim().split(/\s+/).map(x=>x-0);
  const r=input[0];
  const D=input[1];
  let x=input[2];
  let ans=new Array(10);
  for(let i=0;i<10;i++){
    x=r*x-D;
    ans[i]=x;
  }
  
  console.log(ans.join('\n'));
})(require('fs').readFileSync('/dev/stdin','utf8'));
