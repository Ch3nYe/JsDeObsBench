var a0_0x1623a7 = a0_0x115c;
function a0_0x44d5() {
    var _0x37e630 = [
        'split',
        'log',
        'floor',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x44d5 = function () {
        return _0x37e630;
    };
    return a0_0x44d5();
}
function Main(input) {
    var _0x57c132 = a0_0x115c;
    input = input[_0x57c132(0x0)]('\x0a');
    for (var i = 0x0; 0x1; i++) {
        input[i] = input[i][_0x57c132(0x0)]('\x20');
        var r0 = parseInt(input[i][0x0], 0xa);
        var w0 = parseInt(input[i][0x1], 0xa);
        var c = parseInt(input[i][0x2], 0xa);
        var r = parseInt(input[i][0x3], 0xa);
        if (r0 == 0x0 && w0 == 0x0 && c == 0x0 && r == 0x0)
            break;
        var a = c * w0;
        if (a <= r0)
            console[_0x57c132(0x1)]('0');
        else {
            console[_0x57c132(0x1)](Math[_0x57c132(0x2)]((a - r0 + r - 0x1) / r));
        }
    }
}
function a0_0x115c(YrNQnF, key) {
    var stringArray = a0_0x44d5();
    a0_0x115c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x115c(YrNQnF, key);
}
Main(require('fs')[a0_0x1623a7(0x3)](a0_0x1623a7(0x4), a0_0x1623a7(0x5)));