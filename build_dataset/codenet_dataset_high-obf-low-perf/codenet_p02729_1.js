function Main(input) {
    var a = input[0].split(" ").map(v=>v-0);
    if(a[0]+a[1] == 0) console.log(0);
    else console.log(~~(a[0]*(a[0]-1)/2+(a[1]*(a[1]-1)/2)));
}



Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));