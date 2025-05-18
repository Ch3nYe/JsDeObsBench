var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n=Arr.shift()-0;
for(var I=0;I<n;I++){
   var arr=Arr.shift().split("").reverse();
   var str=Arr.shift();
   var x=str.length;
   arr.forEach(function(v){
      if(v=="J")str=str.slice(-1)+str.slice(0,-1);
      else if(v=="C")str=str.slice(1)+str.slice(0,1);
      else if(v=="E" && x%2==0)str=str.slice(x/2,x)+str.slice(0,x/2);
      else if(v=="E" && x%2==1)str=str.slice(~~(x/2)+1,x)+str[~~(x/2)]+str.slice(0,~~(x/2));
      else if(v=="A")str=str.split("").reverse().join("");
      else if(v=="P")str=str.replace(/\d/g,function(s){return (s=="0")?"9":(s-0)-1;});
      else if(v=="M")str=str.replace(/\d/g,function(s){return (s=="9")?"0":(s-0)+1;});
   });
   console.log(str);
}