var input = require('fs').readFileSync('/dev/stdin', 'utf8');
   var Arr=(input.trim()).split("\n");
   for(var i=0;i<Arr.length;i=i+2){
      var n=Arr[i]-0;
      var str=Arr[i+1];
      for(var j=0;j<n;j++){
      str=str.replace(/0+|1+|2+|3+|4+|5+|6+|7+|8+|9+/g,function(s){
      return s.length+s[0];
      });
      }
      console.log(str);
      if(Arr[i+2]=="0")break;
}