var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var str=Arr.shift();
   if(str=="0")break;
   var arr=str.split("");
   var a=0;
   var b=0;
   arr.shift();
   arr.forEach(function(v){
      if(v=="A")a++;
      if(v=="B")b++;
   });
   (a>b)?a++:b++;
   console.log(a+" "+b);
}