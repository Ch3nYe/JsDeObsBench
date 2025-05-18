var a0_0x5de25a = a0_0x49fb;
(function (stringArrayFunction, comparisonValue) {
    var _0x586ebe = a0_0x49fb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x586ebe(0x163)) / 0x1 * (-parseInt(_0x586ebe(0x15f)) / 0x2) + -parseInt(_0x586ebe(0x167)) / 0x3 + -parseInt(_0x586ebe(0x168)) / 0x4 * (-parseInt(_0x586ebe(0x165)) / 0x5) + -parseInt(_0x586ebe(0x16a)) / 0x6 * (-parseInt(_0x586ebe(0x160)) / 0x7) + -parseInt(_0x586ebe(0x15c)) / 0x8 + -parseInt(_0x586ebe(0x15d)) / 0x9 + parseInt(_0x586ebe(0x15a)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2474, 0x80da9));
function time(x) {
    var _0x1cad4b = a0_0x49fb;
    x = x[_0x1cad4b(0x15b)]('')['map'](Number);
    return x[0x0] * 0xa * 0x3c + x[0x1] * 0x3c + x[0x2] * 0xa + x[0x3];
}
function a0_0x2474() {
    var _0x5265c4 = [
        '4769181BmggUa',
        '0\x200\x200',
        '1018106rXAbKB',
        '2380343owHVOV',
        'max',
        'utf8',
        '1lPBeoy',
        'readFileSync',
        '5XXWOFn',
        'shift',
        '2930517lyntYe',
        '2891576lLsJme',
        'trim',
        '12KyJHIn',
        '/dev/stdin',
        '4282500pJRLjr',
        'split',
        '2446096GJJsIa'
    ];
    a0_0x2474 = function () {
        return _0x5265c4;
    };
    return a0_0x2474();
}
var input = require('fs')[a0_0x5de25a(0x164)](a0_0x5de25a(0x159), a0_0x5de25a(0x162));
var arr = input[a0_0x5de25a(0x169)]()[a0_0x5de25a(0x15b)]('\x0a');
function a0_0x49fb(RJoiHa, key) {
    var stringArray = a0_0x2474();
    a0_0x49fb = function (index, key) {
        index = index - 0x159;
        var value = stringArray[index];
        return value;
    };
    return a0_0x49fb(RJoiHa, key);
}
while (!![]) {
    var npq = arr[a0_0x5de25a(0x166)]();
    if (npq == a0_0x5de25a(0x15e))
        break;
    npq = npq['split']('\x20');
    var n = npq[0x0] - 0x0;
    var p = time(npq[0x1]);
    var q = time(npq[0x2]);
    var tv = [];
    for (var i = p; i < q; i++)
        tv[i] = 0x0;
    for (var i = 0x0; i < n; i++) {
        var cm = arr[a0_0x5de25a(0x166)]();
        var ary = arr[a0_0x5de25a(0x166)]()[a0_0x5de25a(0x15b)]('\x20');
        for (var j = 0x0; j < cm; j++) {
            var start = time(ary[a0_0x5de25a(0x166)]());
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
            max = Math[a0_0x5de25a(0x161)](max, cnt);
            cnt = 0x0;
        }
    }
    max = Math[a0_0x5de25a(0x161)](max, cnt);
    console['log'](max);
}