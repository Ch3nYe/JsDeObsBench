function Main(input) {
    var input  = input.split(' ');
    var n = input[0];
    var a = input[1];
    var b = input[2];
    var Sum = 0;
    for (j = 1; j <= n; j++) {
        if(0 <= j && j <= 9) {
            if(a <= j && j <= b) {
                Sum += j;
            }
        } else {
        var str = j.toString();
        var arr = str.split('').map(n => parseInt(n));
        var x = arr.reduce(function(prev, current, i, arr) {
                return prev+current;
            });
        };
        if(a <= x && x <= b) {
            Sum += j;
        }
    
    }
    console.log(Sum);

    }
Main(require('fs').readFileSync('/dev/stdin', 'utf8'));