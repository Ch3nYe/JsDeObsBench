function main(input) {
  input = input.trim();
  const a = input.split(" ").map(Number);
  if(a[0]<=a[1]){
    console.log("0");
  }else{
    console.log(a[0]-a[1]);
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
