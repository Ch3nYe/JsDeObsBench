function Main(input) {
  var [a, b] = input.split(" ").map(Number);
  if(b > a) [a, b] = [b, a];
  var r;
  do {
    r = a % b;
    a = b;
    b = r;
  } while(r)
  console.log(a);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

