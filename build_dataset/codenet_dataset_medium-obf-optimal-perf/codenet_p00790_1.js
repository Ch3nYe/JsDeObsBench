function move(d1,d2,d3,d4,d5,d6){
   var x=this.toString();
   if(x=="s")return [d2,d6,d3,d4,d1,d5];
   else if(x=="n")return [d5,d1,d3,d4,d6,d2];
   else if(x=="w")return [d4,d2,d1,d6,d5,d3];
   else if(x=="e")return [d3,d2,d6,d1,d5,d4];
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var dice=[1,2,3,4,5,6];
   while(n--){
      var str=arr.shift();
      dice=move.apply(str[0],dice);
   }
   console.log(dice[0]);
}