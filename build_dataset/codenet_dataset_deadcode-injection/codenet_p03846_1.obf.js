function a0_0x1502() {
    var _0x523818 = [
        'split',
        'pow',
        'length',
        'log',
        'getElementById',
        'input',
        'value',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x1502 = function () {
        return _0x523818;
    };
    return a0_0x1502();
}
function a0_0x5aa4(ryRxwQ, key) {
    var stringArray = a0_0x1502();
    a0_0x5aa4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5aa4(ryRxwQ, key);
}
var a0_0x1e68b8 = a0_0x5aa4;
function Main(input) {
    var _0x5c2c6b = a0_0x5aa4;
    input = input[_0x5c2c6b(0x0)]('\x0a');
    tmp = input[0x1][_0x5c2c6b(0x0)]('\x20');
    var c = Math[_0x5c2c6b(0x1)](parseInt(tmp[_0x5c2c6b(0x2)] / 0x2), 0x2);
    var d = 0x0;
    for (j = tmp[_0x5c2c6b(0x2)] - 0x1; j >= 0x0; j--) {
        for (i = 0x0; i < tmp[_0x5c2c6b(0x2)]; i++) {
            if (tmp[i] == j) {
                d++;
            }
        }
        if (d != 0x2 && j > 0x0) {
            c = 0x0;
            break;
        }
        if (d != 0x1 && j == 0x0) {
            c = 0x0;
            break;
        }
        d = 0x0;
        j--;
    }
    c = c % (Math[_0x5c2c6b(0x1)](0xa, 0x9) + 0x7);
    console[_0x5c2c6b(0x3)]('%s', c);
}
function debug() {
    var _0x24041c = a0_0x5aa4;
    var input = document[_0x24041c(0x4)](_0x24041c(0x5))[_0x24041c(0x6)];
    Main(input);
}
Main(require('fs')[a0_0x1e68b8(0x7)](a0_0x1e68b8(0x8), 'utf8'));