var a0_0x186ac2 = a0_0xee24;
var input = require('fs')[a0_0x186ac2(0x0)](a0_0x186ac2(0x1), 'utf8');
function a0_0xee24(CIZBUt, key) {
    var stringArray = a0_0x4d73();
    a0_0xee24 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xee24(CIZBUt, key);
}
var Arr = input[a0_0x186ac2(0x2)](/\n$/, '')[a0_0x186ac2(0x3)]('\x0a');
while (!![]) {
    var arr = Arr['shift']()[a0_0x186ac2(0x3)]('\x20')['map'](Number);
    if (arr[a0_0x186ac2(0x4)]('') == a0_0x186ac2(0x5))
        break;
    var y = Arr[a0_0x186ac2(0x6)]()[a0_0x186ac2(0x3)]('\x20')[a0_0x186ac2(0x7)](Number);
    (function (N, A, B, C, X) {
        var _0x415ee1 = a0_0xee24;
        var i = 0x0;
        while (!![]) {
            if (y[0x0] == X)
                y[_0x415ee1(0x6)]();
            if (y[_0x415ee1(0x8)] == 0x0) {
                console[_0x415ee1(0x9)](i);
                break;
            }
            X = (A * X + B) % C;
            i++;
            if (i == 0x2711) {
                console['log'](-0x1);
                break;
            }
        }
    }['apply'](null, arr));
}
function a0_0x4d73() {
    var _0x495d14 = [
        'readFileSync',
        '/dev/stdin',
        'replace',
        'split',
        'join',
        '00000',
        'shift',
        'map',
        'length',
        'log'
    ];
    a0_0x4d73 = function () {
        return _0x495d14;
    };
    return a0_0x4d73();
}