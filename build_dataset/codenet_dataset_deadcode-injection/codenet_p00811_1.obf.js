var a0_0x39ad41 = a0_0x16e3;
function a0_0x16e3(OAeMmx, key) {
    var stringArray = a0_0x406d();
    a0_0x16e3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x16e3(OAeMmx, key);
}
function prime(max) {
    var _0x5f007c = a0_0x16e3;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math['floor'](Math[_0x5f007c(0x0)](max));
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
            result[_0x5f007c(0x1)](arr[i]);
    }
    return result;
}
var PRIME = prime(0x186a0);
var input = require('fs')[a0_0x39ad41(0x2)]('/dev/stdin', a0_0x39ad41(0x3));
var arr = input[a0_0x39ad41(0x4)]()['split']('\x0a');
arr[a0_0x39ad41(0x5)](function (v) {
    var _0x285b1f = a0_0x16e3;
    if (v == _0x285b1f(0x6))
        return !![];
    var mab = v[_0x285b1f(0x7)]('\x20')[_0x285b1f(0x8)](Number);
    var m = mab[0x0];
    var a = mab[0x1];
    var b = mab[0x2];
    var ans = [
        0x0,
        0x0,
        0x0
    ];
    for (var p = 0x0; p < PRIME['length']; p++) {
        for (var q = p; q < PRIME[_0x285b1f(0x9)]; q++) {
            var pq = PRIME[p] * PRIME[q];
            if (pq > m)
                break;
            if (PRIME[q] * a <= PRIME[p] * b && ans[0x2] < pq)
                ans = [
                    PRIME[p],
                    PRIME[q],
                    pq
                ];
        }
    }
    console[_0x285b1f(0xa)](ans[0x0] + '\x20' + ans[0x1]);
});
function a0_0x406d() {
    var _0xb885e7 = [
        'sqrt',
        'push',
        'readFileSync',
        'utf8',
        'trim',
        'some',
        '0\x200\x200',
        'split',
        'map',
        'length',
        'log'
    ];
    a0_0x406d = function () {
        return _0xb885e7;
    };
    return a0_0x406d();
}