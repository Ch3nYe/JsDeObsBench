var a0_0x882135 = a0_0x4fe0;
var input = require('fs')[a0_0x882135(0x0)](a0_0x882135(0x1), a0_0x882135(0x2));
var Arr = input[a0_0x882135(0x3)]()['split']('\x0a');
function a0_0x2c27() {
    var _0x109906 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'length',
        'split',
        'log'
    ];
    a0_0x2c27 = function () {
        return _0x109906;
    };
    return a0_0x2c27();
}
function a0_0x4fe0(gYOhhG, key) {
    var stringArray = a0_0x2c27();
    a0_0x4fe0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4fe0(gYOhhG, key);
}
for (var i = 0x0; i < Arr[a0_0x882135(0x4)]; i++) {
    var arr = Arr[i][a0_0x882135(0x5)]('');
    var a1 = arr[0x0];
    var a2 = arr[0x1];
    var a3 = arr[0x2];
    var a4 = arr[0x3];
    var a5 = arr[0x4];
    var a6 = arr[0x5];
    var a7 = arr[0x6];
    var a8 = arr[0x7];
    var a9 = arr[0x8];
    var d = 0x0;
    for (var j = 0x0; j < 0x2; j++) {
        var s = j == 0x0 ? 'o' : 'x';
        var S = s + s + s;
        if (a1 + a2 + a3 == S) {
            console[a0_0x882135(0x6)](s);
            break;
        }
        if (a4 + a5 + a6 == S) {
            console[a0_0x882135(0x6)](s);
            break;
        }
        if (a7 + a8 + a9 == S) {
            console[a0_0x882135(0x6)](s);
            break;
        }
        if (a1 + a4 + a7 == S) {
            console[a0_0x882135(0x6)](s);
            break;
        }
        if (a2 + a5 + a8 == S) {
            console['log'](s);
            break;
        }
        if (a3 + a6 + a9 == S) {
            console[a0_0x882135(0x6)](s);
            break;
        }
        if (a1 + a5 + a9 == S) {
            console[a0_0x882135(0x6)](s);
            break;
        }
        if (a3 + a5 + a7 == S) {
            console[a0_0x882135(0x6)](s);
            break;
        }
        d++;
    }
    if (d == 0x2)
        console['log']('d');
}