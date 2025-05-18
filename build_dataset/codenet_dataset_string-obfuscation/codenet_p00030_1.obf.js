function a0_0x1451(cSQAJa, key) {
    var stringArray = a0_0x1d19();
    a0_0x1451 = function (index, key) {
        index = index - 0x1a1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1451(cSQAJa, key);
}
var a0_0x1f6538 = a0_0x1451;
function a0_0x1d19() {
    var _0x4ca56e = [
        'reduce',
        'utf8',
        '28264148KCRaeb',
        'shift',
        '1ydNgwM',
        '103998khjnOz',
        '/dev/stdin',
        '152GecYvd',
        '511qfZUky',
        '4EbQOwG',
        '1095045XbpAbK',
        '3509770hsbdEl',
        '1018046vcMhLk',
        'trim',
        'log',
        '2656767UhRwUY',
        'split',
        '447651xYiQrj',
        'push'
    ];
    a0_0x1d19 = function () {
        return _0x4ca56e;
    };
    return a0_0x1d19();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x31d5e6 = a0_0x1451;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x31d5e6(0x1ac)) / 0x1 * (parseInt(_0x31d5e6(0x1a1)) / 0x2) + -parseInt(_0x31d5e6(0x1a4)) / 0x3 * (parseInt(_0x31d5e6(0x1b1)) / 0x4) + parseInt(_0x31d5e6(0x1b2)) / 0x5 + parseInt(_0x31d5e6(0x1ad)) / 0x6 * (-parseInt(_0x31d5e6(0x1b0)) / 0x7) + -parseInt(_0x31d5e6(0x1af)) / 0x8 * (-parseInt(_0x31d5e6(0x1a6)) / 0x9) + -parseInt(_0x31d5e6(0x1b3)) / 0xa + parseInt(_0x31d5e6(0x1aa)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1d19, 0xb06bc));
function comb(r) {
    var _0x4bde67 = a0_0x1451;
    var c = [];
    c[0x0] = -0x1;
    var k = 0x1;
    c[0x1] = 0x0;
    var ret = [];
    while (k != 0x0) {
        for (var i = k + 0x1; i <= r; i++) {
            c[i] = c[i - 0x1] + 0x1;
        }
        var arr = [];
        for (var i = 0x1; i <= r; i++) {
            arr[_0x4bde67(0x1a7)](c[i]);
        }
        ret[_0x4bde67(0x1a7)](arr);
        k = r;
        while (c[k] == 0x9 - r + k)
            k = k - 0x1;
        c[k] = c[k] + 0x1;
    }
    return ret;
}
var input = require('fs')['readFileSync'](a0_0x1f6538(0x1ae), a0_0x1f6538(0x1a9));
var lines = input[a0_0x1f6538(0x1a2)]()[a0_0x1f6538(0x1a5)]('\x0a');
var line;
while (line = lines[a0_0x1f6538(0x1ab)]()) {
    var nums = line['split']('\x20');
    var n = +nums[0x0];
    var s = +nums[0x1];
    if (n + s == 0x0)
        break;
    var c = comb(n);
    var cnt = 0x0;
    for (var i = 0x0; i < c['length']; i++) {
        var arr = c[i];
        if (s == arr[a0_0x1f6538(0x1a8)](function (prev, now) {
                return prev + now;
            })) {
            cnt++;
        }
    }
    console[a0_0x1f6538(0x1a3)](cnt);
}