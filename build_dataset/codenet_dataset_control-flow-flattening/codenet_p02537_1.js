const main = (arg) => {
    const [N,K] = arg.split("\n")[0].split(" ").map(Number)
    arg = arg.split("\n").slice(1)
    const a = arg.map(Number)
    
    let b = []
    b.push(a[0])
    for(let i=1; i<N; i++) {
        if(Math.abs(a[i]-b[b.length-1]) <= K) {
            // last = a[i]
            b.push(a[i])
        }
    }
    console.log(b.length)

}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
