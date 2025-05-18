var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var a=arr[0];
var b=arr[1];
var len=b.length-1;
var reg = new RegExp(b,"g");
var ans=[];
while (reg.test(a)) {
   reg.lastIndex -= len;
   ans.push(reg.lastIndex-1);
}
if(ans.length!=0)console.log(ans.join("\n"));