var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n=Arr.shift()-0;
for(var I=0;I<n;I++){
   var str=Arr.shift();
   var arr=[];
   for(var i=1;i<str.length;i++){
      arr.push([str.slice(0,i),str.slice(i,str.length)]);
   }
   var obj={};
   for(var i=0;i<arr.length;i++){
      var A=arr[i][0];
      var B=arr[i][1];
      var a=A.split("").reverse().join("");
      var b=B.split("").reverse().join("");
      obj[A+B]=true;
      obj[A+b]=true;
      obj[a+B]=true;
      obj[a+b]=true;
      obj[B+A]=true;
      obj[B+a]=true;
      obj[b+A]=true;
      obj[b+a]=true;
   }
   console.log(Object.keys(obj).length);
}