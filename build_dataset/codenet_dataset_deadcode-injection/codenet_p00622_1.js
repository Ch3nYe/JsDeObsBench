var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var a=arr.shift().split("");
   if(a.join("")=="-")break;
   var b=arr.shift().split("");
   var c=arr.shift().split("");
   var obj={};
   a.forEach(function(v){
      obj[v]=true;
   });
   var str="";
   var m="";
   c.forEach(function(v){
      if(obj.hasOwnProperty(v)){
         if(m==""){
            m=a.shift();
            m=a.shift();
         }else{
            m=a.shift();
         }
      }else{
         while(true){
            if(m==v){
               m=a.shift();
               break;
            }else{
               str+=m;
               m=b.shift();
            }
         }
      }
   });
   str+=m;
   str+=b.join("");
   console.log(str);
}