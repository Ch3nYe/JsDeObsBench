var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var q=arr.shift()-0;
var str="";
var  set = new Map();
for(var i=0;i<q;i++){
   var [a,b]=arr[i].split(" ");
   if(a=="0"){
      set.set(b,0);
      str+=set.size+"\n";
   }else if(a=="1") {
      str+=((set.has(b))?1:0)+"\n";
   } else{
      set.delete(b);
   }
}
console.log(str.trim());
