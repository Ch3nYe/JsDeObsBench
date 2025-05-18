function Main(input){
  input = input.split(" ").map(Number);
  if(input[0]%2==0&&input[1]%2==0&&input[2]%2==0){
    console.log(0);
  }else{
    input = input.sort(function(a,b){return a-b;});
    console.log(input[1]*input[0]);
  }
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
