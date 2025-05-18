function Main(input) {
  const arr = input.split("");
  if(arr.length % 2 !== 0){
    console.log("No");
    return;
  }
  const a = arr.slice(0, arr.length/2);
  const b = arr.slice(arr.length/2, arr.length);
  if(a.join("") === b.reverse().map(mirror).join("")){
    console.log("Yes");
  }else{ console.log("No"); }
  function mirror(a){
    switch (a) {
        case "b": return "d";
        case "d": return "b";
        case "p": return "q";
        case "q": return "p";
    }
  }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));