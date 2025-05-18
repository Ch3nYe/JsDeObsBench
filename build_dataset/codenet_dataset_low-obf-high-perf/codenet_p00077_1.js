var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
Arr.forEach(function(v){
   v=v.replace(/@(\d)(.)/g,function(s,s1,s2){
      return Array((s1-0)+1).join(s2);
   });
   console.log(v);
});