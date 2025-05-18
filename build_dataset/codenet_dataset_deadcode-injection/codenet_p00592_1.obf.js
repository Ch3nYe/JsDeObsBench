function a0_0x3edd(CMpTDj, key) {
    var stringArray = a0_0xc571();
    a0_0x3edd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3edd(CMpTDj, key);
}
var a0_0x4403c0 = a0_0x3edd;
function time(x) {
    var _0x23160c = a0_0x3edd;
    x = x['split']('')[_0x23160c(0x0)](Number);
    return x[0x0] * 0xa * 0x3c + x[0x1] * 0x3c + x[0x2] * 0xa + x[0x3];
}
var input = require('fs')[a0_0x4403c0(0x1)]('/dev/stdin', a0_0x4403c0(0x2));
function a0_0xc571() {
    var _0x66df9b = [
        'map',
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        '0\x200\x200',
        'max',
        'log'
    ];
    a0_0xc571 = function () {
        return _0x66df9b;
    };
    return a0_0xc571();
}
var arr = input[a0_0x4403c0(0x3)]()[a0_0x4403c0(0x4)]('\x0a');
while (!![]) {
    var npq = arr[a0_0x4403c0(0x5)]();
    if (npq == a0_0x4403c0(0x6))
        break;
    npq = npq[a0_0x4403c0(0x4)]('\x20');
    var n = npq[0x0] - 0x0;
    var p = time(npq[0x1]);
    var q = time(npq[0x2]);
    var tv = [];
    for (var i = p; i < q; i++)
        tv[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var cm = arr[a0_0x4403c0(0x5)]();
        var ary = arr[a0_0x4403c0(0x5)]()['split']('\x20');
        for (var j = 0x0; j < cm; j++) {
            var start = time(ary[a0_0x4403c0(0x5)]());
            var stop = time(ary['shift']());
            for (var k = start; k < stop; k++)
                tv[k]++;
        }
    }
    var max = 0x0;
    var cnt = 0x0;
    for (var i = p; i < q; i++) {
        if (tv[i] != n) {
            cnt++;
        } else {
            max = Math['max'](max, cnt);
            cnt = 0x0;
        }
    }
    max = Math[a0_0x4403c0(0x7)](max, cnt);
    console[a0_0x4403c0(0x8)](max);
}