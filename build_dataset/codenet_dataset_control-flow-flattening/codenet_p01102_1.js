var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while (true) {
   var a = arr.shift();
   if(a==".")break;
   var b = arr.shift();
   var memo=[];
   var aa = a.replace(/".*?"/g,function(s){
      memo.push(s);
      return "\"";
   });
   var cnt =0;
   var bb = b.replace(/".*?"/g,function(s){
      if(s != memo.shift())cnt++;
      return "\"";
   });
   if(aa==bb && cnt==0) console.log("IDENTICAL");
   else if( aa==bb && cnt==1) console.log("CLOSE");
   else if(aa != bb || (aa==bb && cnt>1))console.log("DIFFERENT");
}
