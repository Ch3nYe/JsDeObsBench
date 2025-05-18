var input = require('fs').readFileSync('/dev/stdin', 'utf8');
input=input.replace(/T|J|Q|K/g,"10");
input=input.replace(/A/g,"11");
var arr=input.trim().split("\n");
var n=arr.shift()-0;
while(n--){
   var a=arr.shift().split(" ").map(Number);
   var b=arr.shift().split(" ").map(Number);
   var flag=false;
   var sum=a[0]+a[1];
   if(a[0]==11 || a[1]==11)flag=true;
   if(sum==21){console.log("blackjack");continue;}
   var ans="";
   for(var i=0;i<b.length;i++){
      if(sum<=16){
         if(b[i]==11)flag=true;
         if(b[i]==11 && sum+11>21)b[i]=1;
         sum+=b[i];
      }else if(sum==17 && flag){
         if(b[i]==11)flag=true;
         if(b[i]==11 && sum+11>21)b[i]=1;
         sum+=b[i];
      }else {
         break;
      }
   }
   if(sum>21)sum="bust";
   console.log(sum);
}