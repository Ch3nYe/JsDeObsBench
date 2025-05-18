x=require('fs').readFileSync('/dev/stdin', 'utf8');
y=x.trim().split("\n");
while(true){
   if(y.length==0)break;
   var z=y.shift().split(" ");
   var s=[];
   z.forEach(function(v){
      if(/\d/.test(v)){
         s.unshift(v-0);
      }else{
         a=s.shift();
         b=s.shift();
         if(v=="+")s.unshift(b+a);
         if(v=="-")s.unshift(b-a);
         if(v=="*")s.unshift(b*a);
         if(v=="/")s.unshift(b/a);
      }
   });
   console.log(s[0].toFixed(6));
}