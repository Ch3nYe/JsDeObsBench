var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var str=Arr.shift();
   if(str=="#")break;
   var p="A";
   for(var i=0;i<str.length;i++){
      var s=str[i]-0;
      if(p=="A" && s===0)p="X";
      else if(p=="A" && s===1)p="Y";
      else if(p=="B" && s===0)p="Y";
      else if(p=="B" && s===1)p="X";
      else if(p=="W" && s===0)p="B";
      else if(p=="W" && s===1)p="Y";
      else if(p=="X" && s===0)p="";
      else if(p=="X" && s===1)p="Z";
      else if(p=="Y" && s===0)p="X";
      else if(p=="Y" && s===1)p="";
      else if(p=="Z" && s===0)p="W";
      else if(p=="Z" && s===1)p="B";
   }
   console.log((p=="B")?"Yes":"No");
}