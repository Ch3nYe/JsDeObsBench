function maxCards(arr,max){
   for(var i=0;i<n-(k-1);i++){
      var x=1;
      var j=0;
      while(j<k){
         x*=arr[i+j];
         j++;
      }
      max=Math.max(max,x);
   }
   return max;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var I=0;
while(true){
   var nk=Arr[I].split(" ").map(Number);
   I++;
   var n=nk[0];
   var k=nk[1];
   if(n==0 && k==0)break;
   var c=[];
   for(var i=0;i<n;i++){
      c.push(Arr[I]);
      I++;
   }
   var maxA=1;
   maxA=maxCards(c,maxA);
   var maxB=1;
   for(var i=0;i<n;i++){
      for(var j=i+1;j<n;j++){
         var memo=c[i];
         c[i]=c[j];
         c[j]=memo;
         maxB=maxCards(c,maxB);
         c[j]=c[i];
         c[i]=memo;
      }
   }
   console.log((maxA>maxB)?"NO GAME":maxB-maxA);
}