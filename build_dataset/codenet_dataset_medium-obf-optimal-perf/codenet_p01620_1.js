var abc="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var k=(Arr.shift()).split(" ").map(Number);
   var arr=(Arr.shift()).split("");
   var j=0;
   for(var i=0;i<arr.length;i++){
      var num=abc.indexOf(arr[i])-k[i%k.length];
      if(num<0)num+=abc.length;
      arr[i]=abc[num];
   }
   console.log(arr.join(""));
}