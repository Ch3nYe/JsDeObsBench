const Main = (input) => {
input = input.split('\n')
const a = input[0];
const s = input[1];

if(a>=3200){
  console.log(s);
}
else{
  console.log("red");
}
  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"))