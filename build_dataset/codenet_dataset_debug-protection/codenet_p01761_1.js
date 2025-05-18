var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var n=arr.shift()-0;
var book=[];
for(var i=0;i<n;i++)book[i]=arr.shift();
var q=arr.shift()-0;
for(var i=0;i<q;i++){
   if(i!=0)console.log("");
   var ans=[];
   var v=arr.shift().split(" ");
   var a=v[0];
   var b=v[1];
   var c=(v[2]!="*")?(new Date(v[2])).getTime():"*";
   var d=(v[3]!="*")?(new Date(v[3])).getTime():"*";
   book.forEach(function(V){
      V=V.split(" ");
      var A=V[0];
      var B=V[1];
      var C=(new Date(V[2])).getTime();
      var flag=true;
      if(a!="*"){
         var regex = new RegExp(a);
         if(regex.test(A)==false)flag=false;
      }
      if(b!="*"){
         var regex = new RegExp(b);
         if(regex.test(B)==false)flag=false;
      }
      if(c!="*"){
         if(c>C)flag=false;
      }
      if(d!="*"){
         if(d<C)flag=false;
      }
      if(flag)ans.push(A);
   });
   ans.forEach(function(value){
       console.log(value);
   });
}