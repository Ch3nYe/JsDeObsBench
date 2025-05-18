function a0_0x4e87(ucwkJG, key) {
    var stringArray = a0_0x12af();
    a0_0x4e87 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4e87(ucwkJG, key);
}
var a0_0x2cb2d9 = a0_0x4e87;
function a0_0x12af() {
    var _0x57b3bb = [
        'split',
        'slice',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x12af = function () {
        return _0x57b3bb;
    };
    return a0_0x12af();
}
function Main(input) {
    var _0x39b5e9 = a0_0x4e87;
    input = input[_0x39b5e9(0x0)]('\x0a');
    var tmp0 = input[0x0][_0x39b5e9(0x0)]('\x20');
    var N = tmp0[0x0] - 0x0;
    var K = tmp0[0x1] - 0x0;
    var tmp1 = input[0x1][_0x39b5e9(0x0)]('\x20');
    var point = {
        'r': tmp1[0x2] - 0x0,
        's': tmp1[0x0] - 0x0,
        'p': tmp1[0x1] - 0x0
    };
    var str = input[0x2];
    var sum = 0x0;
    for (var i = 0x0; i < N; i++) {
        var char = str[i];
        var charBK = '';
        if (i - K >= 0x0) {
            charBK = str[i - K];
        }
        if (char == charBK) {
            str = str[_0x39b5e9(0x1)](0x0, i) + 'B' + str[_0x39b5e9(0x1)](i + 0x1);
            continue;
        }
        sum += point[char];
    }
    console['log'](sum);
}
Main(require('fs')[a0_0x2cb2d9(0x2)](a0_0x2cb2d9(0x3), a0_0x2cb2d9(0x4)));