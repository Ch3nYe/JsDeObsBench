function move(x,arr){
var d1=arr[0];
var d2=arr[1];
var d3=arr[2];
var d4=arr[3];
var d5=arr[4];
var d6=arr[5];
var after=[];
if(x=="N")after=[d2,d6,d3,d4,d1,d5];
if(x=="S")after=[d5,d1,d3,d4,d6,d2];
if(x=="E")after=[d4,d2,d1,d6,d5,d3];
if(x=="W")after=[d3,d2,d6,d1,d5,d4];
return after;
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var diceA=Arr[0].split(" ").map(Number);
var diceB=Arr[1].split(" ").map(Number);
var NSEW="NSEW".split("");

for(var i=0;i<100;i++){
   var r = Math.floor(Math.random () * 4) ;
   diceA=move(NSEW[r],diceA)
   var flag=diceA.every(function(v,i){return (v==diceB[i]);});
   if(flag)break;
}
console.log(flag?"Yes":"No");