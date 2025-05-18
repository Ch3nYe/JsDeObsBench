var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var n= arr.shift()-0;
var xyz = [];
for(var i=0;i<=n;i++)xyz[i]=[0,0,0];
var x = arr.shift().split(" ").map(Number);
var y = arr.shift().split(" ").map(Number);
var z = arr.shift().split(" ").map(Number);
x.shift();
y.shift();
z.shift();
x.forEach(v=>{
   xyz[v][0]=1;
});
y.forEach(v=>{
   xyz[v][1]=1;
});
z.forEach(v=>{
   xyz[v][2]=1;
});
xyz.shift();
var cnt = 0;
xyz.forEach(v=>{
   if(v[0]==0 && v[2]==1)cnt++;
   else if(v[1]==1 && v[2]==1)cnt++;
});
console.log(cnt);
