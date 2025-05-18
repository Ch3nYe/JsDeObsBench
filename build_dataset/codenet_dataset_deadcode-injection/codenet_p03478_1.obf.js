function a0_0x4f70(MXryTw, key) {
    var stringArray = a0_0x222f();
    a0_0x4f70 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4f70(MXryTw, key);
}
function a0_0x222f() {
    var _0x4b2f1a = [
        'split',
        'LAzVs',
        'KdcXH',
        'map',
        'reduce',
        'CUzLw',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x222f = function () {
        return _0x4b2f1a;
    };
    return a0_0x222f();
}
var a0_0x3aaf4f = a0_0x4f70;
function Main(input) {
    var _0x3c78a4 = a0_0x4f70;
    var input = input[_0x3c78a4(0x0)]('\x20');
    var n = input[0x0];
    var a = input[0x1];
    var b = input[0x2];
    var Sum = 0x0;
    for (j = 0x1; j <= n; j++) {
        if (_0x3c78a4(0x1) !== _0x3c78a4(0x2)) {
            if (0x0 <= j && j <= 0x9) {
                if (a <= j && j <= b) {
                    Sum += j;
                }
            } else {
                var str = j['toString']();
                var arr = str[_0x3c78a4(0x0)]('')[_0x3c78a4(0x3)](n => parseInt(n));
                var x = arr[_0x3c78a4(0x4)](function (prev, current, i, arr) {
                    return prev + current;
                });
            }
            ;
            if (a <= x && x <= b) {
                if ('SZwSI' === _0x3c78a4(0x5)) {
                    Sum += j;
                } else {
                    Sum += j;
                }
            }
        } else {
            if (a <= j && j <= b) {
                Sum += j;
            }
        }
    }
    console[_0x3c78a4(0x6)](Sum);
}
Main(require('fs')[a0_0x3aaf4f(0x7)](a0_0x3aaf4f(0x8), 'utf8'));