var a=[""];
a[1]="',.,!?".split("");
a[2]="abcABC".split("");
a[3]="defDEF".split("");
a[4]="ghiGHI".split("");
a[5]="jklJKL".split("");
a[6]="mnoMNO".split("");
a[7]="pqrsPQRS".split("");
a[8]="tuvTUV".split("");
a[9]="wxyzWXYZ".split("");

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
arr.forEach(function(v){
   v=v.replace(/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g,function(x){
      if(x[0]=="0")return x.slice(1).replace(/0/g," ");
      else return a[x[0]-0][x.length-1];
   });
   console.log(v);
});