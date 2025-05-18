process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on("data",function(chunk){
   var nums=chunk.trim().split("\n");
   function digit (e){
       var a=e.split(" ");
       var wa = parseInt(a[0]) + parseInt(a[1]);
       return  wa.toString().length;
       }
   console.log(nums.map(digit).join("\n"));
   
});