function a0_0x1af5() {
    var _0x27a51f = [
        'slice',
        'length',
        'concat',
        'join',
        'replace',
        'toString',
        'stdin',
        'data',
        'split',
        'shift',
        'log',
        'overflow',
        'resume'
    ];
    a0_0x1af5 = function () {
        return _0x27a51f;
    };
    return a0_0x1af5();
}
var a0_0x2d8fa8 = a0_0x1dac;
function pad(n) {
    while (n['length'] < 0x7) {
        n = '0' + n;
    }
    return n;
}
function divide(s) {
    var _0xb87574 = a0_0x1dac;
    var a = [], i = 0x0, l = s['length'], d = 0x7;
    for (; (a[i] = s[_0xb87574(0x0)]((i + 0x1) * -d, l + i * -d))[_0xb87574(0x1)] > d - 0x1; i++);
    return a;
}
function unite(a) {
    var _0x502514 = a0_0x1dac;
    return a[_0x502514(0x2)]()['reverse']()[_0x502514(0x3)]('')[_0x502514(0x4)](/^0*/, '');
}
function a0_0x1dac(hazgwk, key) {
    var stringArray = a0_0x1af5();
    a0_0x1dac = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1dac(hazgwk, key);
}
function largeSum(n, m) {
    var _0x4c4d01 = a0_0x1dac;
    for (var h = 0x0, o = [], i = 0x0, l = Math['max'](n[_0x4c4d01(0x1)], m[_0x4c4d01(0x1)]); i < l || h != 0x0; i++) {
        var a = ((parseInt(n[i], 0xa) || 0x0) + (parseInt(m[i], 0xa) || 0x0) + +h)[_0x4c4d01(0x5)](0xa);
        o[i] = a['length'] > 0x7 ? (h = a['slice'](0x0, 0x1), a[_0x4c4d01(0x0)](0x1)) : (h = 0x0, pad(a));
    }
    return o;
}
process[a0_0x2d8fa8(0x6)]['on'](a0_0x2d8fa8(0x7), function (c) {
    var _0x1a4880 = a0_0x1dac;
    var a = (c + '')['trim']()[_0x1a4880(0x8)]('\x0a');
    for (var i = 0x0, l = +a[_0x1a4880(0x9)]() * 0x2; i < l; i += 0x2) {
        var s = unite(largeSum(divide(a[i]), divide(a[i + 0x1])));
        console[_0x1a4880(0xa)](s == '' ? 0x0 : s[_0x1a4880(0x1)] > 0x50 ? _0x1a4880(0xb) : s);
    }
})[a0_0x2d8fa8(0xc)]();