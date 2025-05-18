var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
var q=arr.shift()-0;
var str="";
var  set = new Set();
for(var i=0;i<q;i++){
   var [a,b]=arr[i].split(" ");
   if(a=="0"){
      set.add(b);
      str+=set.size+"\n";
   }else {
      str+=((set.has(b))?1:0)+"\n";
   }
}
console.log(str.trim());
