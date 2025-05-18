var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var NK=Arr.shift();
   if(NK=="0 0")break;
   var nk=NK.split(" ").map(Number);
   var S=(Arr.shift()).split(" ").map(Number);
   for(var i=0;i<nk[0];i++){
      var B=(Arr.shift()).split(" ").map(Number);
      B.forEach(function(v,index){S[index]-=v;});
   }
   var flag=S.every(function(v){return (v>=0);});
   console.log(flag?"Yes":"No");
}