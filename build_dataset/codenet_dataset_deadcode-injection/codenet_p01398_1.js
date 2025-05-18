var objStr={};
var objNum={};
var abc="abcdefghijklmnopqrstuvwxyz".split("");
abc.forEach(function(v,i){
   objStr[v]=i;
   objNum[i]=v;
});

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var N=Arr.shift()-0;
   if(N==0)break;
   var str=Arr.shift();
   var AB=[];
   for(var i=0;i<N;i++){
      var ab=(Arr.shift()).split(" ").map(Number);
      AB.push(ab);
   }
   AB.reverse();
   var s=str.split("");
   for(var i=0;i<N;i++){
      var ab=AB[i];
      var plus=ab[1]-ab[0];
      var m1=s[ab[0]-1];
      var m2=s[ab[1]-1];
      var n1=objStr[m1]+plus;
      var n2=objStr[m2]+plus;
      s[ab[0]-1]=objNum[n2%abc.length];
      s[ab[1]-1]=objNum[n1%abc.length];
   }
   console.log(s.join(""));
}