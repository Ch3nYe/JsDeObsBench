var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<Arr.length;i++){
var arr=Arr[i].split("");
var a1=arr[0];
var a2=arr[1];
var a3=arr[2];
var a4=arr[3];
var a5=arr[4];
var a6=arr[5];
var a7=arr[6];
var a8=arr[7];
var a9=arr[8];
var d=0;
for(var j=0;j<2;j++){
   var s=(j==0)?"o":"x";
   var S=s+s+s;
   if(a1+a2+a3==S){console.log(s);break;}
   if(a4+a5+a6==S){console.log(s);break;}
   if(a7+a8+a9==S){console.log(s);break;}
   if(a1+a4+a7==S){console.log(s);break;}
   if(a2+a5+a8==S){console.log(s);break;}
   if(a3+a6+a9==S){console.log(s);break;}
   if(a1+a5+a9==S){console.log(s);break;}
   if(a3+a5+a7==S){console.log(s);break;}
   d++;
}
if(d==2)console.log("d");
}