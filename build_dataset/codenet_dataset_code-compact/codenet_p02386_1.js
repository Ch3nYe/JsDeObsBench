function move(d1,d2,d3,d4,d5,d6){
   var x=this.toString();
   if(x=="N")return [d2,d6,d3,d4,d1,d5];
   if(x=="E")return [d4,d2,d1,d6,d5,d3];
}
function roll(d1,d2,d3,d4,d5,d6){
   return [d1,d3,d5,d2,d4,d6];
}
function rolls(arr){
   for(var i=0;i<4;i++){
      obj[arr.join(",")]=true;
      arr=roll.apply(null,arr);
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var n=Arr.shift()-0;
var OBJ={};
var result="Yes";
for(var i=0;i<n;i++){
   var obj={};
   var dice=Arr[i].split(" ").map(Number);
   for(var j=0;j<4;j++){
      rolls(dice);
      dice=move.apply("N",dice);
   }
   dice=move.apply("E",dice);
   rolls(dice);
   dice=move.apply("E",dice);
   dice=move.apply("E",dice);
   rolls(dice);
   for(var k in obj){
      if(OBJ.hasOwnProperty(k))result= "No";
      else OBJ[k]=true;
   }
   if(result=="No")break;
}
console.log(result);