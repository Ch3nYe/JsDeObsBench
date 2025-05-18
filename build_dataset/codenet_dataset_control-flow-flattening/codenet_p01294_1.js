var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var [n,d]=arr.shift().split(" ").map(Number);
   if(n==0 && d==0)break;
   var S=[];
   var C=[];
   for(var i=0;i<n;i++){
      var mc=arr[i].split(" ");
      mc.shift();
      var c=mc.map(Number).reverse();
      var sum= (c.length!=0)?c.reduce((a,b)=> a+b):0;
      S[i]=sum;
      C[i]=c;
   }
   while(true){ 
      var f=false;
      for(var i=0;i<S.length;i++){
         if(S[i]==0)continue;
         S[i] -= C[i][0];
         if(Math.max(...S) - Math.min(...S) <=d){
            C[i].shift();
            f=true;
            break;
         }else{
            S[i] +=C[i][0];
         }
      }
      if(f==false)break;
   }
   var sum=S.reduce((a,b)=> a+b);
   if(sum==0)console.log("Yes");
   else console.log("No");
   arr=arr.slice(n);
}
