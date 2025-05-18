function prime(max){
   var arr=[];
   for(var i=0;i<=max;i++)arr[i]=i;
   arr[0]=false;
   arr[1]=false;
   var sqrt=Math.floor(Math.sqrt(max));
   for(var i=2;i<=sqrt;i++){
      if(arr[i]==false)continue;
         for(var j=i+i;j<=max;j+=i){
            arr[j]=false;
         }
   }
   var result={};
   for(var i=0;i<=max;i++){
      if(arr[i]!==false)result[arr[i]]=true;
   }
   return result;
}
var p=prime(999999);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var v=Arr.shift();
   if(v=="0 0 0")break;
   var adn=v.split(" ").map(Number);
   var cnt=0;
   var sum=adn[0]-adn[1];
   while(cnt!=adn[2]){
      sum+=adn[1];
      if(p.hasOwnProperty(sum))cnt++;
   }
   console.log(sum);
}