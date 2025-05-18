var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var L=Arr.shift();
for(var i=0;i<L;i++){
   var str=Arr[i];
   str=str.replace(/\-\>/g,"A");
   str=str.replace(/\<\-/g,"Z");
   var m=str.split("");
   var arr=[m[0]];
   var n=1;
   m.forEach(function(v){
      if(v=="A")n++;
      else if(v=="Z")n--;
      else {
         if(n==0){arr.unshift(v);n=1;}
         if(n>arr.length)arr.push(v);
      }
   });
   console.log(arr.join(""));
}