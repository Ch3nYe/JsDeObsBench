function Main(input) {
    var n = parseInt(input, 10);
    var count = 0;
    for (i = 1; i < n; i++) {
        if (gcd(n, i) == 1) count++;
    }
    console.log(count);
}

function gcd(n, m) {
    var a, b, c;
    a = Math.max(n, m);
    b = Math.min(n, m);
    c = a % b; 
    if (c == 0) {
        return b;
    } else {
        return gcd(b, c);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));