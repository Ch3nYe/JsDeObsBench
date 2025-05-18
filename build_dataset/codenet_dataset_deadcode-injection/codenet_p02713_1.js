function main(input) {
    input = parseInt(input);
    var ans = 0;
    for (var i = 1; i < input+1; i++) {
        for (var j = 1; j < input+1; j++) {
            for (var k = 1; k < input+1; k++) {
                ans += gcd(k, gcd(i, j));
            }
        }
    }

    console.log(ans);
}

function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    return gcd(b, a%b);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));