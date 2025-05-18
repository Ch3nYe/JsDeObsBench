function a0_0xd195() {
    var _0x308fc4 = [
        'floor',
        'sqrt',
        '/dev/stdin',
        'utf8',
        'trim',
        'map',
        'length',
        'hasOwnProperty',
        'log'
    ];
    a0_0xd195 = function () {
        return _0x308fc4;
    };
    return a0_0xd195();
}
var a0_0x2be654 = a0_0x50c1;
function a0_0x50c1(rZQqdn, key) {
    var stringArray = a0_0xd195();
    a0_0x50c1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x50c1(rZQqdn, key);
}
function prime(max) {
    var _0x28f753 = a0_0x50c1;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x28f753(0x0)](Math[_0x28f753(0x1)](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = {};
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result[arr[i]] = !![];
    }
    return result;
}
var p = prime(0xf4240);
var input = require('fs')['readFileSync'](a0_0x2be654(0x2), a0_0x2be654(0x3));
var Arr = input[a0_0x2be654(0x4)]()['split']('\x0a')[a0_0x2be654(0x5)](Number);
for (var I = 0x0; I < Arr[a0_0x2be654(0x6)]; I++) {
    var v = Arr[I];
    if (v == 0x0)
        break;
    var cnt = 0x0;
    var obj = {};
    for (var k in p) {
        if (k >= v)
            break;
        if (obj[a0_0x2be654(0x7)](k))
            continue;
        obj[v - k] = !![];
        if (p[a0_0x2be654(0x7)](v - k))
            cnt++;
    }
    console[a0_0x2be654(0x8)](cnt);
}