var input = require('fs').readFileSync('/dev/stdin', 'utf8');
 
var Arr=(input.trim()).split("\n").map(Number);
Arr.shift();
Arr.sort(function(a,b){return a-b;});
var max=Arr[Arr.length-1];
var arr=[2];
 
for(var i=3;i<=max;i=i+2){
   var a=true;
   var sqrt=~~(Math.sqrt(i))+1;
   for(var j=0;j<arr.length;j++){
      if(arr[j]>sqrt)break;
      if(i%arr[j]==0){
         a=false;
         break;
      }
   }
   if(a)arr.push(i);
}
 
var num=0;
var f=0;
 
for(var i=0;i<Arr.length;i++){
   if(Arr[i]!=2 && Arr[i]%2==0)continue;
   var index=arr.indexOf(Arr[i],f);
   if(index!=-1){
      f=index;
      num++;
   }
}
console.log(num);