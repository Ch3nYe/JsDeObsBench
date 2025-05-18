function Main(input) {
    const Param = input.split(' ')
    const N = i(Param[0])
    const M = i(Param[1])
    const K = i(Param[2])
    for(var n = 0; n < N;n++){
        for(var m = 0; m < M;m++){
            var b = calcBlack(n, m, N, M)
            if(b == K) return console.log('Yes')
        }    
    }
    console.log('No')
}
function calcBlack(n, m, N, M){
    return (N * n - m * n) + (M * m - n * m)
}
function i(x){ return parseInt(x, 10)}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));