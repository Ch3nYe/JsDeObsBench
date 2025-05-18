var a0_0x52a77e = a0_0x3c62;
function prime(max) {
    var _0x5e06cd = a0_0x3c62;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x5e06cd(0x0)](Math[_0x5e06cd(0x1)](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result[_0x5e06cd(0x2)](arr[i]);
    }
    return result;
}
var p = prime(0x98967f);
var input = require('fs')[a0_0x52a77e(0x3)](a0_0x52a77e(0x4), a0_0x52a77e(0x5));
function a0_0x4971() {
    var _0x3dd3c9 = [
        'floor',
        'sqrt',
        'push',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'map',
        'length'
    ];
    a0_0x4971 = function () {
        return _0x3dd3c9;
    };
    return a0_0x4971();
}
function a0_0x3c62(TdAdgO, key) {
    var stringArray = a0_0x4971();
    a0_0x3c62 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c62(TdAdgO, key);
}
var Arr = input[a0_0x52a77e(0x6)]()['split']('\x0a')[a0_0x52a77e(0x7)](Number);
for (var i = 0x0; i < Arr[a0_0x52a77e(0x8)]; i++) {
    var a = Arr[i];
    if (a == 0x0)
        break;
    var quad = '';
    for (var j = 0x5; j < p[a0_0x52a77e(0x8)]; j++) {
        if (p[j] > a)
            break;
        var x = p[j] - 0x8;
        if (x == p[j - 0x3] && x + 0x2 == p[j - 0x2] && x + 0x6 == p[j - 0x1])
            quad = p[j];
    }
    console['log'](quad);
}