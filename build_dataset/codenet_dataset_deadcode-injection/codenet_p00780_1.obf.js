var a0_0x2eb9b7 = a0_0x2b28;
function prime(max) {
    var _0x54bd93 = a0_0x2b28;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x54bd93(0x0)](Math[_0x54bd93(0x1)](max));
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
            result[_0x54bd93(0x2)](arr[i]);
    }
    return result;
}
var p = prime(0xc350);
var input = require('fs')[a0_0x2eb9b7(0x3)](a0_0x2eb9b7(0x4), 'utf8');
var Arr = input[a0_0x2eb9b7(0x5)]()[a0_0x2eb9b7(0x6)]('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var cnt = 0x0;
    var k = p['length'] - 0x1;
    for (var i = 0x0; i < p[a0_0x2eb9b7(0x7)]; i++) {
        while (p[i] + p[k] > n)
            k--;
        if (k < i)
            break;
        if (p[i] + p[k] == n)
            cnt++;
    }
    console[a0_0x2eb9b7(0x8)](cnt);
}
function a0_0x2b28(pSdGbN, key) {
    var stringArray = a0_0x4ddd();
    a0_0x2b28 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b28(pSdGbN, key);
}
function a0_0x4ddd() {
    var _0x268905 = [
        'floor',
        'sqrt',
        'push',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'length',
        'log'
    ];
    a0_0x4ddd = function () {
        return _0x268905;
    };
    return a0_0x4ddd();
}