var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var x=Arr.shift().split("");
   if(x[0]=="0")break;
   var y=Arr.shift().split("");
   var z=Arr.shift().split("");
   var ans="NA";
   for(var i=0;i<2;i++){
      var s=(["b","w"])[i];
      if(x[0]+x[1]+x[2]==s+s+s)ans=s;
      if(y[0]+y[1]+y[2]==s+s+s)ans=s;
      if(z[0]+z[1]+z[2]==s+s+s)ans=s;
      if(x[0]+y[0]+z[0]==s+s+s)ans=s;
      if(x[1]+y[1]+z[1]==s+s+s)ans=s;
      if(x[2]+y[2]+z[2]==s+s+s)ans=s;
      if(x[0]+y[1]+z[2]==s+s+s)ans=s;
      if(x[2]+y[1]+z[0]==s+s+s)ans=s;
   }
   console.log(ans);
}