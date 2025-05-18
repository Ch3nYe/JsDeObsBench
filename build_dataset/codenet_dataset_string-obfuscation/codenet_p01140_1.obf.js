var a0_0x44ad30 = a0_0x48c6;
(function (stringArrayFunction, comparisonValue) {
    var _0x4ed5f4 = a0_0x48c6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4ed5f4(0x132)) / 0x1 * (parseInt(_0x4ed5f4(0x126)) / 0x2) + -parseInt(_0x4ed5f4(0x12f)) / 0x3 + -parseInt(_0x4ed5f4(0x12c)) / 0x4 * (-parseInt(_0x4ed5f4(0x122)) / 0x5) + -parseInt(_0x4ed5f4(0x11e)) / 0x6 * (-parseInt(_0x4ed5f4(0x12b)) / 0x7) + -parseInt(_0x4ed5f4(0x130)) / 0x8 * (-parseInt(_0x4ed5f4(0x12e)) / 0x9) + parseInt(_0x4ed5f4(0x127)) / 0xa + parseInt(_0x4ed5f4(0x11f)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1380, 0x6b461));
var input = require('fs')[a0_0x44ad30(0x128)](a0_0x44ad30(0x11d), a0_0x44ad30(0x12d));
function a0_0x48c6(xnRxGe, key) {
    var stringArray = a0_0x1380();
    a0_0x48c6 = function (index, key) {
        index = index - 0x11d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x48c6(xnRxGe, key);
}
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var str = arr[a0_0x44ad30(0x121)]();
    if (str == a0_0x44ad30(0x120))
        break;
    var ary = str[a0_0x44ad30(0x12a)]('\x20')[a0_0x44ad30(0x124)](Number);
    var h = [];
    var w = [];
    for (var i = 0x0; i < ary[0x0]; i++)
        h[a0_0x44ad30(0x131)](arr[a0_0x44ad30(0x121)]() - 0x0);
    for (var i = 0x0; i < ary[0x1]; i++)
        w['push'](arr[a0_0x44ad30(0x121)]() - 0x0);
    var H = {};
    for (var i = 0x0; i < h[a0_0x44ad30(0x129)]; i++) {
        var sum = 0x0;
        for (var j = i; j < h['length']; j++) {
            if (j != i)
                sum += h[j];
            H[a0_0x44ad30(0x125)](h[i] + sum) ? H[h[i] + sum]++ : H[h[i] + sum] = 0x1;
        }
    }
    var W = {};
    for (var i = 0x0; i < w['length']; i++) {
        var sum = 0x0;
        for (var j = i; j < w[a0_0x44ad30(0x129)]; j++) {
            if (j != i)
                sum += w[j];
            W[a0_0x44ad30(0x125)](w[i] + sum) ? W[w[i] + sum]++ : W[w[i] + sum] = 0x1;
        }
    }
    var cnt = 0x0;
    for (var k in H) {
        if (W[a0_0x44ad30(0x125)](k))
            cnt += H[k] * W[k];
    }
    console[a0_0x44ad30(0x123)](cnt);
}
function a0_0x1380() {
    var _0x3d5628 = [
        '1208RavYkQ',
        'push',
        '14871XtbeAM',
        '/dev/stdin',
        '449400SGhmFP',
        '4629834hZrApa',
        '0\x200',
        'shift',
        '756970SdlGWl',
        'log',
        'map',
        'hasOwnProperty',
        '98sFnMLo',
        '3214620uJeeZg',
        'readFileSync',
        'length',
        'split',
        '77jVHMDr',
        '8vlPnou',
        'utf8',
        '819DFrntI',
        '2144139TXSmwQ'
    ];
    a0_0x1380 = function () {
        return _0x3d5628;
    };
    return a0_0x1380();
}