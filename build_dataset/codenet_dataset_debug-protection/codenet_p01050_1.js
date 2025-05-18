var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var s=input.trim();
var len=s.length;
var abc="0123456789AabcdefghijklmnopqrstuvwxyzA".split("");
var sum=0;
while(true){
   if(s=="")break;
   var cnt=0;
   var flag=false;
   abc.forEach(v=>{
      var re = new RegExp( v );
      if(re.test(s)){
         if(flag)cnt++;
         flag=true;
         s=s.replace(re,"");
      }else{
         if(cnt>=3)sum+=cnt-2;
         cnt=0;
         flag=false;
      }
   });
}
console.log(len-sum);
