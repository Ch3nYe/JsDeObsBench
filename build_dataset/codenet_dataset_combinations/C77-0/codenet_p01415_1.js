var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var NKTUVL=(Arr.shift()).split(" ").map(Number);
var N=NKTUVL[0];
var K=NKTUVL[1];
var T=NKTUVL[2];
var U=NKTUVL[3];
var V=NKTUVL[4];
var L=NKTUVL[5];
var time=0;
var obj={};
for(var i=0;i<N;i++)obj[Arr.shift()-0]=true;
var fast=0;
var stock=0;
for(var i=0;i<L;i++){
   var now=(obj.hasOwnProperty(i))?true:false;
   if(fast==0 && now==true){time+=1/V;fast=(T*V-1);continue;}
   if(fast==0 && now==false && stock==0){time+=1/U;continue;}
   if(fast==0 && now==false && stock>0){time+=1/V;fast=(T*V-1);stock--;continue;}
   if(fast>0 && now==false){time+=1/V;fast--;continue;}
   if(fast>0 && now==true && stock+1<=K){time+=1/V;fast--;stock++;continue;}
   if(fast>0 && now==true && stock+1>K){time+=1/V;fast=(T*V-1);continue;}
}
console.log(time.toFixed(9));