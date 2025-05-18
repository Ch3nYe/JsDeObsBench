var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var [n,m,c]=arr.shift().split(" ").map(Number);
var L=arr.shift().split(" ").map(Number);
var cw = arr.map(v => v.split(" ").map(Number));
cw.sort(function(a,b){
   return b[1] - a[1];
});
var sum=0;
for(var i=0;i<cw.length;i++){
   if(m==0)break;
   var max = L[cw[i][0]-1];
   if(max>0){
      sum+=cw[i][1];
      L[cw[i][0]-1]--;
      m--;
   }
}
console.log(sum);
