var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
var n=Arr.shift()-0;
for(var i=0;i<n;i++){
   var arr=Arr[i].split(" ").map(Number);
   var s=arr[0];
   var g=arr[1];
   var ans=[s];
   var plus=1;
   if(s<g){do{s++;ans.push(s);}while(s!=g);}
   else if(s>g && s<=5){do{s--;ans.push(s);}while(s!=g);}
   else if(s>g && s>=6 && g>=6){do{s++;if(s==10){s=5;}ans.push(s);}while(s!=g);}
   else if(s>g && s>=6 && g<=5){do{s+=plus;if(s==10){s=5;plus=-1;};ans.push(s);}while(s!=g);}
   console.log(ans.join(" "));
}