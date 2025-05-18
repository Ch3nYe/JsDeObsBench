function saiki(str,flag){
   while(true){
      if(/\[{2}\d.*?\]{2}/.test(str)){
         str=str.replace(/\[{2}\d.*?\]{2}/,function(s){
               var d =s.slice(2,-2).split("][").map(Number);
               d.sort((a,b)=> a-b);
               var sum=0;
               for(var i=0;i<Math.ceil(d.length/2);i++){
                  if(flag) sum+=Math.floor(d[i]/2)+1;
                  else sum+=Math.floor(d[i]);
               }
               return "("+sum+")";
            });
      }else break;
   }
   str=str.replace(/\(/g,"[");
   str=str.replace(/\)/g,"]");
   return str;
 }
  
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;

arr.forEach(str=>{
   str=saiki(str,true);
   while(/\[\[/.test(str))str=saiki(str,false);
    console.log(str.replace(/\[|\]/g,""));
});
