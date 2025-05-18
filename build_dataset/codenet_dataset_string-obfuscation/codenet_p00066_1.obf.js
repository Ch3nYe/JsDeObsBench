var a0_0x106587 = a0_0x24bb;
(function (stringArrayFunction, comparisonValue) {
    var _0x5aab2d = a0_0x24bb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5aab2d(0xc5)) / 0x1 * (-parseInt(_0x5aab2d(0xbb)) / 0x2) + -parseInt(_0x5aab2d(0xc1)) / 0x3 * (parseInt(_0x5aab2d(0xc6)) / 0x4) + -parseInt(_0x5aab2d(0xc7)) / 0x5 * (-parseInt(_0x5aab2d(0xca)) / 0x6) + parseInt(_0x5aab2d(0xbd)) / 0x7 + parseInt(_0x5aab2d(0xc0)) / 0x8 * (-parseInt(_0x5aab2d(0xc4)) / 0x9) + parseInt(_0x5aab2d(0xc9)) / 0xa * (parseInt(_0x5aab2d(0xc3)) / 0xb) + parseInt(_0x5aab2d(0xbc)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xf6a0, 0xace7f));
var input = require('fs')[a0_0x106587(0xc8)](a0_0x106587(0xbf), a0_0x106587(0xcb));
var Arr = input['trim']()[a0_0x106587(0xba)]('\x0a');
function a0_0x24bb(JmjJOz, key) {
    var stringArray = a0_0xf6a0();
    a0_0x24bb = function (index, key) {
        index = index - 0xba;
        var value = stringArray[index];
        return value;
    };
    return a0_0x24bb(JmjJOz, key);
}
for (var i = 0x0; i < Arr[a0_0x106587(0xc2)]; i++) {
    var arr = Arr[i]['split']('');
    var a1 = arr[0x0];
    var a2 = arr[0x1];
    var a3 = arr[0x2];
    var a4 = arr[0x3];
    var a5 = arr[0x4];
    var a6 = arr[0x5];
    var a7 = arr[0x6];
    var a8 = arr[0x7];
    var a9 = arr[0x8];
    var d = 0x0;
    for (var j = 0x0; j < 0x2; j++) {
        var s = j == 0x0 ? 'o' : 'x';
        var S = s + s + s;
        if (a1 + a2 + a3 == S) {
            console[a0_0x106587(0xbe)](s);
            break;
        }
        if (a4 + a5 + a6 == S) {
            console[a0_0x106587(0xbe)](s);
            break;
        }
        if (a7 + a8 + a9 == S) {
            console[a0_0x106587(0xbe)](s);
            break;
        }
        if (a1 + a4 + a7 == S) {
            console[a0_0x106587(0xbe)](s);
            break;
        }
        if (a2 + a5 + a8 == S) {
            console[a0_0x106587(0xbe)](s);
            break;
        }
        if (a3 + a6 + a9 == S) {
            console[a0_0x106587(0xbe)](s);
            break;
        }
        if (a1 + a5 + a9 == S) {
            console[a0_0x106587(0xbe)](s);
            break;
        }
        if (a3 + a5 + a7 == S) {
            console[a0_0x106587(0xbe)](s);
            break;
        }
        d++;
    }
    if (d == 0x2)
        console['log']('d');
}
function a0_0xf6a0() {
    var _0x5b6718 = [
        '74691LCoBmj',
        '9wuPXVX',
        '4kanyEe',
        '2005sLAKRz',
        'readFileSync',
        '4221010nAvEQQ',
        '2214xLJzVg',
        'utf8',
        'split',
        '216054RmKCsi',
        '30698460IVDoZj',
        '1352015baQqOK',
        'log',
        '/dev/stdin',
        '1352eaUNHs',
        '715269CBgtqD',
        'length',
        '11LBaTfz'
    ];
    a0_0xf6a0 = function () {
        return _0x5b6718;
    };
    return a0_0xf6a0();
}