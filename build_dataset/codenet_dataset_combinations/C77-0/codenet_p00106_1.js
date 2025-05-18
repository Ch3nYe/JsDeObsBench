var obj={};
for(var i=0;i<=25;i++){
   for(var j=0;j<=16;j++){
      for(var k=0;k<=10;k++){
         var weight=200*i+300*j+500*k;
         if(weight>5000)continue;
         var money=0;
         money+=380*5*0.8*Math.floor(i/5);
         money+=550*4*0.85*Math.floor(j/4);
         money+=850*3*0.88*Math.floor(k/3);
         money+=380*(i%5);
         money+=550*(j%4);
         money+=850*(k%3);
         if(obj.hasOwnProperty(weight))obj[weight]=Math.min(obj[weight],money);
         else obj[weight]=money;
      }
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   console.log(obj[n]);
}