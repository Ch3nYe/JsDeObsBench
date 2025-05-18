var a0_0x559e05 = a0_0x4efe;
function a0_0x4efe(jjBRYH, key) {
    var stringArray = a0_0x3311();
    a0_0x4efe = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4efe(jjBRYH, key);
}
var input = require('fs')[a0_0x559e05(0x0)](a0_0x559e05(0x1), a0_0x559e05(0x2));
var arr = input[a0_0x559e05(0x3)]()[a0_0x559e05(0x4)]('\x0a');
while (!![]) {
    var str = arr[a0_0x559e05(0x5)]();
    if (str == a0_0x559e05(0x6))
        break;
    var ary = str[a0_0x559e05(0x4)]('\x20')[a0_0x559e05(0x7)](Number);
    var h = [];
    var w = [];
    for (var i = 0x0; i < ary[0x0]; i++)
        h['push'](arr[a0_0x559e05(0x5)]() - 0x0);
    for (var i = 0x0; i < ary[0x1]; i++)
        w[a0_0x559e05(0x8)](arr[a0_0x559e05(0x5)]() - 0x0);
    var H = {};
    for (var i = 0x0; i < h['length']; i++) {
        var sum = 0x0;
        for (var j = i; j < h[a0_0x559e05(0x9)]; j++) {
            if (j != i)
                sum += h[j];
            H['hasOwnProperty'](h[i] + sum) ? H[h[i] + sum]++ : H[h[i] + sum] = 0x1;
        }
    }
    var W = {};
    for (var i = 0x0; i < w[a0_0x559e05(0x9)]; i++) {
        var sum = 0x0;
        for (var j = i; j < w['length']; j++) {
            if (j != i)
                sum += w[j];
            W[a0_0x559e05(0xa)](w[i] + sum) ? W[w[i] + sum]++ : W[w[i] + sum] = 0x1;
        }
    }
    var cnt = 0x0;
    for (var k in H) {
        if (W[a0_0x559e05(0xa)](k))
            cnt += H[k] * W[k];
    }
    console[a0_0x559e05(0xb)](cnt);
}
function a0_0x3311() {
    var _0xdc00a1 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        '0\x200',
        'map',
        'push',
        'length',
        'hasOwnProperty',
        'log'
    ];
    a0_0x3311 = function () {
        return _0xdc00a1;
    };
    return a0_0x3311();
}