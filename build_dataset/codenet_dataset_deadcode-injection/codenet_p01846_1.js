var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var data = input.trim().split("\n");
while (true) {
   var str = data.shift();
   if(str=="#")break;
   str=str.replace(/\d/g,function(v){
      return "n".repeat(v-0);
   });
   var arr = str.split("/");
   arr = arr.map(v=> v.split(""));
   var [a,b,c,d] = data.shift().split(" ").map(Number);
   arr[a-1][b-1]="n";
   arr[c-1][d-1]="b";
   arr = arr.map(v=> v.join(""));
   str = arr.join("/");
   str=str.replace(/n+/g,function(v){
      return v.length;
   });
   console.log(str);
}
