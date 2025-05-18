var a0_0x55fe58 = a0_0xe184;
(function (stringArrayFunction, comparisonValue) {
    var _0x28220e = a0_0xe184;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x28220e(0x14f)) / 0x1 * (parseInt(_0x28220e(0x145)) / 0x2) + -parseInt(_0x28220e(0x14e)) / 0x3 * (parseInt(_0x28220e(0x144)) / 0x4) + -parseInt(_0x28220e(0x146)) / 0x5 + parseInt(_0x28220e(0x14b)) / 0x6 + parseInt(_0x28220e(0x150)) / 0x7 * (-parseInt(_0x28220e(0x14a)) / 0x8) + -parseInt(_0x28220e(0x152)) / 0x9 + parseInt(_0x28220e(0x143)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4823, 0xb1dc7));
function maxCards(arr, max) {
    var _0x3ba342 = a0_0xe184;
    for (var i = 0x0; i < n - (k - 0x1); i++) {
        var x = 0x1;
        var j = 0x0;
        while (j < k) {
            x *= arr[i + j];
            j++;
        }
        max = Math[_0x3ba342(0x14c)](max, x);
    }
    return max;
}
var input = require('fs')[a0_0x55fe58(0x147)](a0_0x55fe58(0x151), a0_0x55fe58(0x148));
var Arr = input['trim']()[a0_0x55fe58(0x153)]('\x0a');
function a0_0xe184(wOkUVt, key) {
    var stringArray = a0_0x4823();
    a0_0xe184 = function (index, key) {
        index = index - 0x142;
        var value = stringArray[index];
        return value;
    };
    return a0_0xe184(wOkUVt, key);
}
function a0_0x4823() {
    var _0x5a41b9 = [
        '7327456ZMGhwS',
        '880626hkPnMf',
        'max',
        'push',
        '6CALOys',
        '598571KpqAAz',
        '7yldmoE',
        '/dev/stdin',
        '4954131mspeZZ',
        'split',
        'log',
        '33097120esuqNw',
        '1995984IcZDoC',
        '2WoEprV',
        '4310760ansVXx',
        'readFileSync',
        'utf8',
        'map'
    ];
    a0_0x4823 = function () {
        return _0x5a41b9;
    };
    return a0_0x4823();
}
var I = 0x0;
while (!![]) {
    var nk = Arr[I][a0_0x55fe58(0x153)]('\x20')[a0_0x55fe58(0x149)](Number);
    I++;
    var n = nk[0x0];
    var k = nk[0x1];
    if (n == 0x0 && k == 0x0)
        break;
    var c = [];
    for (var i = 0x0; i < n; i++) {
        c[a0_0x55fe58(0x14d)](Arr[I]);
        I++;
    }
    var maxA = 0x1;
    maxA = maxCards(c, maxA);
    var maxB = 0x1;
    for (var i = 0x0; i < n; i++) {
        for (var j = i + 0x1; j < n; j++) {
            var memo = c[i];
            c[i] = c[j];
            c[j] = memo;
            maxB = maxCards(c, maxB);
            c[j] = c[i];
            c[i] = memo;
        }
    }
    console[a0_0x55fe58(0x142)](maxA > maxB ? 'NO\x20GAME' : maxB - maxA);
}