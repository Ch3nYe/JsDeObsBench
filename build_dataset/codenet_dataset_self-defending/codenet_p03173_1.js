'use strict';
(function(input){
  input=input.trim().split(/\s+/).map(x=>x-0);
  const N=input.shift();
  const a=input;
  
  var ans=0;
  while(a.length>1){
    let x=a.splice(a.indexOf(Math.min.apply(null,a)),1)[0];
    let y=a.splice(a.indexOf(Math.min.apply(null,a)),1)[0];
    a.push(x+y);
    ans+=x+y;
  }
  
  console.log(ans);
})(require('fs').readFileSync('/dev/stdin','utf8'));
