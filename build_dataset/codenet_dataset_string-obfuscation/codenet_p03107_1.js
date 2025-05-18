"use strict"
function Main(input){
  input=input.trim();
  input=input.replace(/\s+/,"").split("");
  var height=input.length;
  var one=0;
  var zero=0;
  while(input.length){
    if(input.pop()==="0")zero++;
    else one++;
  }
  console.log(Math.min(zero,one)*2);
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));