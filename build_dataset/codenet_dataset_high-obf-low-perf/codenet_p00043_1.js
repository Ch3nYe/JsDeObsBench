function Puzzle(){
   var obj={};
   var arrA="123,234,345,456,567,678,789,111,222,333,444,555,666,777,888,999".split(",");
   var arrB="11,22,33,44,55,66,77,88,99".split(",");
   var i,j,k,l,m;
   for(i=0;i<16;i++)for(j=0;j<16;j++)for(k=0;k<16;k++)for(l=0;l<16;l++)for(m=0;m<9;m++){
      var str=arrA[i]+arrA[j]+arrA[k]+arrA[l]+arrB[m];
      str=str.split("").map(Number).sort(function(a,b){return a-b;}).join("");
      obj[str]=true;
   }
   return obj;
}
var P=Puzzle();
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   if(Arr.length==0)break;
   var str=Arr.shift();
   var ans=[];
   for(var i=1;i<=9;i++){
      var v=(str+i).split("").map(Number).sort(function(a,b){return a-b;}).join("");
      if(/(.)\1\1\1\1/.test(v))continue;
      if(P.hasOwnProperty(v))ans.push(i);
   }
   console.log((ans.length==0)?"0":ans.join(" "));
}