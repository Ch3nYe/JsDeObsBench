function a0_0x4616(qAEXqB, key) {
    var stringArray = a0_0x172a();
    a0_0x4616 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4616(qAEXqB, key);
}
var a0_0x33a8cc = a0_0x4616;
function prime(max) {
    var _0x4fe5af = a0_0x4616;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x4fe5af(0x0)](Math[_0x4fe5af(0x1)](max));
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
var p = prime(0xf423f);
var input = require('fs')[a0_0x33a8cc(0x2)]('/dev/stdin', a0_0x33a8cc(0x3));
function a0_0x172a() {
    var _0x40c2ae = [
        'floor',
        'sqrt',
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'hasOwnProperty',
        'log'
    ];
    a0_0x172a = function () {
        return _0x40c2ae;
    };
    return a0_0x172a();
}
var Arr = input[a0_0x33a8cc(0x4)]()[a0_0x33a8cc(0x5)]('\x0a');
while (!![]) {
    var v = Arr['shift']();
    if (v == '0\x200\x200')
        break;
    var adn = v[a0_0x33a8cc(0x5)]('\x20')['map'](Number);
    var cnt = 0x0;
    var sum = adn[0x0] - adn[0x1];
    while (cnt != adn[0x2]) {
        sum += adn[0x1];
        if (p[a0_0x33a8cc(0x6)](sum))
            cnt++;
    }
    console[a0_0x33a8cc(0x7)](sum);
}