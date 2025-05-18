var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift();
   if(n=="0")break;
   var arr=(Arr.shift()).split(" ").map(Number);
   var k=0;
   var S=[];
   while(true){
      for(var i=0;i<arr.length;i++){
         var cnt=0;
         for(var j=0;j<arr.length;j++){
            if(arr[i]==arr[j])cnt++;
         }
         S.push(cnt);
      }
      if(S.join(" ")==arr.join(" "))break;
      arr=S.slice();
      S=[];
      k++;
   }
   console.log(k);
   console.log(S.join(" "));
}