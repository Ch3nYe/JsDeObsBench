var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
var pn=arr.shift().split(" ").map(Number);
if(pn.join(" ")=="0 0")break;
var p=Math.sqrt(pn[0]);
var n=pn[1];
var max=0;
var min=Infinity;
var ans=[];
for(var i=1;i<=n;i++){
for(var j=1;j<=n;j++){
var v=i/j;
if(p>v && max<v){
max=v;
ans[1]=i+"/"+j;
}else if(p<v && min>v){
min=v;
ans[0]=i+"/"+j;
}
}
}
console.log(ans.join(" "));
}