function Main(input) {
  input = input.split("\n");
  
  const N = parseInt(input[0], 10);

  for (var i = 1; i > 0; i++) {
    var n = 0.5*(Math.sqrt((8*N*i)+1)-1);
    if(Number.isInteger(n) == true){
      console.log(n);
      break;
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));