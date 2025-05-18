var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var ary=arr.slice(0,n);
   ary=ary.map(v=> v.split(" ").map(Number).slice(1));
   var flag=true;
   var h=[];
   for(var i=0;i<n;i++)h.push([i]);
   for(var i=1;i<=30;i++){
      var a=[];
      ary.forEach((v,j)=>{
         if(v.includes(i))a.push(j);
      });
      var b=[];
      a.forEach(v=>b.push(...h[v]));
      b= b.filter((x, i, self) => self.indexOf(x) == i);
      if(b.length==n){
         flag=false;
         console.log(i);
         break;
      }
      a.forEach(v=> h[v]=b);
   }
   if(flag)console.log(-1);
   arr=arr.slice(n);
}
