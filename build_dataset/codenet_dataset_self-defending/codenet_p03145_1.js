function Main(input){ 
  var inputs = input.split(" ");
  var ab = parseInt(inputs[0],10);
  var bc = parseInt(inputs[1],10);
  console.log(ab*bc/2); 
  
}
    Main(require('fs').readFileSync('/dev/stdin','utf8'));