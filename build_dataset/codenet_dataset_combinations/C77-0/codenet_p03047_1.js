function Main(input){
  
  var str = input.trim();
    var h = str.split(" ");
  var n = h[0];
  var k = h[1];

  var kekka = 0;
  
  var kekka = n-k+1;
  
  console.log(kekka);
 
}//function end
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));