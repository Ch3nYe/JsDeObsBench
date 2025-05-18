var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var t=(Arr[0].split(" "))[1]-0;
Arr.shift();
var T=0;
while(Arr.length!=0){
   var arr=Arr[0].split(" ");
   Arr.shift();
   var a=arr[0];
   var b=arr[1]-0;
   if(b-t<=0){
      console.log(a+" "+(T+b));
      T+=b;
   }else{
      Arr.push(a+" "+(b-t));
      T+=t;
   }
}