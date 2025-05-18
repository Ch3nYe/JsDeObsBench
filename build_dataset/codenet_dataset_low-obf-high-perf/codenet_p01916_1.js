var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var s=arr[0].split("");

for(var i=0;i<s.length;i++){
for(var j=i+1;j<s.length;j++){
   if(s[i]==s[j]){
      s[i]="";
      s[j]="";
      break;
   }
}
}
var n=s.join("").length;
if(n==0 || n==1)console.log(0);
else if(n%2==0)console.log(n/2);
else console.log((n-1)/2);
