function Main(input) {
    input = input.split("\n");
    for (i=0; i < input.length; i=i+2) {
        var N = parseInt(input[i])
        var a = input[i+1].split("")
        var aa = a.map(Number)
        for (j=N; j > 1; j--) {
            for (k=0; k < j; k++) {
                var e = Math.abs(aa[0]-aa[1])
                aa.push(e)
                aa.shift()
            }
            aa.pop()
        }
        console.log(aa[0])
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
