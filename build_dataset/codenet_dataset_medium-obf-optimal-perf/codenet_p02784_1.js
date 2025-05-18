function main(input) {
    var line = input.split(/\r?\n/g);
    var arr = line[0].split(" ");
    const H = arr[0], N = arr[1];
    var A = line[1].split(" ").map(Number);
    A = A.reduce((A, x) => A + x)
    console.log(1 < Math.ceil(H / A) ? "No" : "Yes");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));