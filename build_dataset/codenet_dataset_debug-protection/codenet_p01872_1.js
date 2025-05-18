var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var str = input.trim();
var ans = "";
for(var j=0;j<=9;j++){
   var arr = str.replace(/\?/,j).split("").map(Number).reverse();
   var sum = 0;
   for(var i=1;i<=6;i++) sum+=arr[i]*(i+1);
   for(var i=7;i<=11;i++)sum+=arr[i]*(i-5);
   var p =11-(sum%11);
   if(sum%11<=1)p=0;
   ans += (p==arr[0])? j : "";
}
if(ans.length==1)console.log(ans[0]);
else console.log("MULTIPLE");
