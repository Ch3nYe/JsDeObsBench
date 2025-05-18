var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var m=Arr.shift()-0;
var n=Arr.shift()-0;
var M=[];
var check=[];
for(var i=0;i<m;i++)M[i]=[];
for(var i=0;i<m;i++)check[i]=false;
for(var i=0;i<n;i++){
   var v=Arr.shift().split(" ").map(Number);
   M[v[0]-1].push(v[1]-1);
}
var L=[]; 
for(var i=0;i<m;i++){
   visit(i);
}
function visit(x){
   if(check[x]==true)return;
   else check[x]=true;
   M[x].forEach(function(v){
      visit(v);
   });
   L.push(x);
}
L.reverse();
L.forEach(function(v){
   console.log(v+1);
});