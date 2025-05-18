var a0_0x5d420b = a0_0x2bbf;
function prime(max) {
    var _0x88c43c = a0_0x2bbf;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math[_0x88c43c(0x0)](max));
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
            result['push'](arr[i]);
    }
    return result;
}
var p = prime(0x13d4fd);
function a0_0x3626() {
    var _0x4641b9 = [
        'sqrt',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'length',
        'log'
    ];
    a0_0x3626 = function () {
        return _0x4641b9;
    };
    return a0_0x3626();
}
var input = require('fs')[a0_0x5d420b(0x1)](a0_0x5d420b(0x2), a0_0x5d420b(0x3));
var Arr = input['trim']()[a0_0x5d420b(0x4)]('\x0a')[a0_0x5d420b(0x5)](Number);
function a0_0x2bbf(FJjiGY, key) {
    var stringArray = a0_0x3626();
    a0_0x2bbf = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2bbf(FJjiGY, key);
}
for (var i = 0x0; i < Arr[a0_0x5d420b(0x6)]; i++) {
    var a = Arr[i];
    if (a == 0x0)
        break;
    for (var j = 0x0; j < p[a0_0x5d420b(0x6)]; j++) {
        if (p[j] == a) {
            console[a0_0x5d420b(0x7)](0x0);
            break;
        }
        if (p[j] > a) {
            console['log'](p[j] - p[j - 0x1]);
            break;
        }
    }
}