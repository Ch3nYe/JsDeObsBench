function kumiawase(start,end,len){
   var ans=[];
   var loop=function(a,arr){
      if(arr.length==len)ans.push(arr);
      else{
         for(var i=a;i<=end;i++)loop(i+1,arr.concat(i));
      }
   }
   loop(start,[]);
   return ans;
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
arr.some(function(v,i){
   if(v=="0 0 0")return true;
   var nks=v.split(" ").map(Number);
   var ary=kumiawase(1,nks[0],nks[1]);
   var cnt=0;
   ary.forEach(function(v){
      var sum=v.reduce(function(a,b){return a+b;});
      if(sum==nks[2])cnt++;
   });
   console.log(cnt);
});