var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var [n,m]=arr.shift().split(" ").map(Number);
var cnt=0;
for(var i=0;i<n;i++){
   var s=arr[i];
   var t=arr[i+n];
   for(var j=0;j<m;j++){
      if(s[j]!=t[j])cnt++;
   }
}
console.log(cnt);
