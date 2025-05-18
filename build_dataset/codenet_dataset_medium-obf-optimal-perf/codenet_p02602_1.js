function Main(input) {
  input = input.replace(/\n/g, ' ');
  input = input.split(" ");
  var A = Number(input[0]);
  var B = Number(input[1]);
  input = input.slice(2)
  for(var i=0;i<input.length-B;i++){
    if(Number(input[i])<Number(input[i+B])){
      console.log("Yes");
    }else{
      console.log("No");
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));