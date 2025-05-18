function Main(s){
  const n = s.length;
  const p = s.match(/p/g).length;
  console.log(Math.floor(n / 2 - p));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());