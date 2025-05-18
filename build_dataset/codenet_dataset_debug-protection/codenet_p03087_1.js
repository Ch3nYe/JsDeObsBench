var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.split("\n");
var nq=arr[0].split(" ").map(Number);
var str = arr[1];
var a=[0,0];
var cnt=0;
for(var i=1;i<str.length;i++){
   if(str[i]=="C" && str[i-1]=="A")cnt++;
   a.push(cnt);
}
var ans=[];
for(var i=2,len=nq[1]+2;i<len;i++){
   var lr=arr[i].split(" ");
   ans.push(a[lr[1]-0]-a[lr[0]-0]);
}
console.log(ans.join("\n"));