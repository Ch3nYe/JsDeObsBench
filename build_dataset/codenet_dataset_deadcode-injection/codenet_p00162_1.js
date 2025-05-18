function hamming(){
   var obj={};
   for(var i=1;i<=1000000;i++){
      var h=i;
      while(h%2==0)h/=2;
      while(h%3==0)h/=3;
      while(h%5==0)h/=5;
      if(h==1)obj[i]=true
   }
   return obj;
}
var Numbers=hamming();
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var mn=(Arr.shift()).split(" ").map(Number);
   if(mn[0]==0)break;
   var cnt=0;
   for(var i=mn[0];i<=mn[1];i++){
      if(Numbers[i])cnt++;
   }
   console.log(cnt);
}