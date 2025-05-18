
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var nmp=(Arr.shift()).split(" ").map(Number);
   if(nmp[0]==0 && nmp[1]==0 && nmp[2]==0)break;
   var n=nmp[0];
   var m=nmp[1]-1;
   var p=nmp[2];
   var arr=[];
   var sum=0;
   for(var i=0;i<n;i++){
      var v=Arr.shift()-0;
      arr.push(v);
      sum+=(v*100);
   }
   sum=sum*(100-p)/100;
   var ans=0;
   if(arr[m]!=0)ans=Math.floor(sum/arr[m]);
   console.log(ans);
}
