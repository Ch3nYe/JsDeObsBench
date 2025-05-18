var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
var nums=[];
for(var i=7;i>=-4;i--){
   nums.push(Math.pow(2,i));
}
while(true){
   var x=Arr.shift()-0;
   if(x==-1)break;
   var str="";
   for(var i=0;i<nums.length;i++){
       if(x>=nums[i]){
          x-=nums[i];
          str+="1";
       }else{
          str+="0";
       }
       if(i==7)str+=".";
   }
   if(x!==0)str="NA";
   console.log(str);
}