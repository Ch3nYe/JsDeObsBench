function Main(input) {
    input = input.split("\n");
    var line = input[0].split(" ");
    var m = parseInt(line[0]);
    var n = parseInt(line[1]);
    
    var ans = (m-1)*(n-1);
    console.log(ans);
    
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
