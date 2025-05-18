function str1(x){
   x=x+"";
   while(x.length!=b)x="0"+x;
   return x;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var ab=(Arr.shift()).split(" ").map(Number);
   if(ab[0]==0 && ab[1]==0)break;
   var str=ab[0]+"";
   var b=ab[1];
   var arr=[];
   str=str1(str);
   arr.push(str);
   var i=0;
   while(true){
      i++;
      var s=str.split("");
      s.sort(function(a,b){return b-a;});
      var A=parseInt(s.join(""),10);
      var B=parseInt(s.reverse().join(""),10); 
      var C=A-B;
      var Cstr=str1(C);     
      if(arr.indexOf(Cstr)!=-1)break;
      arr.push(Cstr);
      str=Cstr; 
   }
   console.log(arr.indexOf(Cstr)+" "+parseInt(Cstr,10)+" "+(i-arr.indexOf(Cstr)));
}