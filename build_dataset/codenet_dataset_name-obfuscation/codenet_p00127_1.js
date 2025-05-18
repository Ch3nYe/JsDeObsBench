var table={};
    table[11] = "a";
    table[12] = "b";
    table[13] = "c";
    table[14] = "d";
    table[15] = "e";
 
    table[21] = "f";
    table[22] = "g";
    table[23] = "h";
    table[24] = "i";
    table[25] = "j";
 
    table[31] = "k";
    table[32] = "l";
    table[33] = "m";
    table[34] = "n";
    table[35] = "o";
 
    table[41] = "p";
    table[42] = "q";
    table[43] = "r";
    table[44] = "s";
    table[45] = "t";
 
    table[51] = "u";
    table[52] = "v";
    table[53] = "w";
    table[54] = "x";
    table[55] = "y";
 
    table[61] = "z";
    table[62] = ".";
    table[63] = "?";
    table[64] = "!";
    table[65] = " ";
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
Arr.forEach(function(str){
   str=str.replace(/\d\d/g,function(s){
      if(table.hasOwnProperty(s))s=table[s];
      return s;
   });
   if(str.match(/\d/))str="NA";
   console.log(str);
});