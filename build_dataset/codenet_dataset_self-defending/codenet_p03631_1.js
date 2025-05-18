function Main(input) {
        var tmp = String(input);
        var truecount = 0;
        if(tmp[2] == tmp[0]) {
           console.log("Yes");
        } else {
           console.log("No");
        }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
