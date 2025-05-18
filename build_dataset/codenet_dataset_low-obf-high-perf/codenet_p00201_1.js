function bomb(name){
   var min=obj[name];
   M.forEach(function(v){
      if(name==v[0]){
         var sum=0;
         v[1].forEach(function(value){
            sum+=bomb(value);
         });
         min=Math.min(min,sum);
      }
   });
   return min;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var obj={};
   for(var i=0;i<n;i++){
      var data=arr.shift().split(" ");
      obj[data[0]]=data[1]-0;
   }
   var m=arr.shift()-0;
   var M=[];
   for(var i=0;i<m;i++){
      var data=arr.shift().split(" ");
      var name=data.shift();
      data.shift();
      M.push([name,data]);
   }
   var item=arr.shift();
   console.log(bomb(item));
}