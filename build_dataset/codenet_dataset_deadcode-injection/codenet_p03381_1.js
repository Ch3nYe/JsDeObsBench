function Main(input) {
    const lines = input.split("\n");
    let N = parseInt(lines[0]);
    let a = lines[1].split(" ").map(function(i) { return parseInt(i);});
    let sortedA = a.slice().sort(function(a,b) { return a - b;});
    const med1 = sortedA[N/2-1];
    const med2 = sortedA[N/2];
    a.forEach(function(i) {console.log(i<=med1 ? med2 : med1);})
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));