function Main(input) {
    var NKA = input.split('\n')
    var NK = NKA[0].split(' ')
    var N = parseInt(NK[0], 10)
    var K = parseInt(NK[1], 10)
    var A = NKA[1].split(' ').map(v => parseInt(v, 10))

    var minPoint = A.indexOf(1)
    var left = Math.ceil(minPoint / (K - 1))
    var right = Math.ceil((N - minPoint - 1) / (K - 1))
    
    console.log(left + right);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));