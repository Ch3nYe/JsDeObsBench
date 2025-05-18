function a0_0x1bbb(cJDLsC, key) {
    var stringArray = a0_0x3f99();
    a0_0x1bbb = function (index, key) {
        index = index - 0xf4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1bbb(cJDLsC, key);
}
var a0_0x3b18e3 = a0_0x1bbb;
(function (stringArrayFunction, comparisonValue) {
    var _0x228374 = a0_0x1bbb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x228374(0xfa)) / 0x1 * (-parseInt(_0x228374(0x100)) / 0x2) + -parseInt(_0x228374(0x105)) / 0x3 + parseInt(_0x228374(0x101)) / 0x4 + -parseInt(_0x228374(0xf9)) / 0x5 * (parseInt(_0x228374(0xf4)) / 0x6) + -parseInt(_0x228374(0xf6)) / 0x7 * (parseInt(_0x228374(0xfc)) / 0x8) + -parseInt(_0x228374(0x102)) / 0x9 * (parseInt(_0x228374(0xfd)) / 0xa) + parseInt(_0x228374(0x106)) / 0xb * (parseInt(_0x228374(0xff)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f99, 0x381f0));
var input = require('fs')[a0_0x3b18e3(0xf8)](a0_0x3b18e3(0xfb), 'utf8');
function a0_0x3f99() {
    var _0x3c641c = [
        '132GMqEZg',
        '0\x200',
        '7nwdyuF',
        'END',
        'readFileSync',
        '33670EMkTmq',
        '38882KTBdHF',
        '/dev/stdin',
        '1500856NGuACh',
        '799380thBXnK',
        'split',
        '1691268wHuoYC',
        '6ImtAar',
        '811876azliNk',
        '36PxJLaU',
        'trim',
        'log',
        '985368SJykha',
        '88AUzxfO',
        'map',
        'shift'
    ];
    a0_0x3f99 = function () {
        return _0x3c641c;
    };
    return a0_0x3f99();
}
var arr = input[a0_0x3b18e3(0x103)]()[a0_0x3b18e3(0xfe)]('\x0a');
while (!![]) {
    var wq = arr[a0_0x3b18e3(0x108)]();
    if (wq == a0_0x3b18e3(0xf5))
        break;
    wq = wq['split']('\x20')[a0_0x3b18e3(0x107)](Number);
    var w = wq[0x0];
    var W = [];
    for (var i = 0x0; i < w; i++)
        W[i] = !![];
    var cat = {};
    while (wq[0x1]--) {
        var sw = arr[a0_0x3b18e3(0x108)]()[a0_0x3b18e3(0xfe)]('\x20');
        if (sw[0x0] == 's') {
            var id = sw[0x1];
            var width = sw[0x2] - 0x0;
            var cnt = 0x0;
            var ans = 'impossible';
            for (var i = 0x0; i < w; i++) {
                cnt = W[i] ? cnt + 0x1 : 0x0;
                if (cnt == width) {
                    while (cnt--) {
                        W[i] = ![];
                        i--;
                    }
                    i++;
                    cat[id] = [
                        i,
                        width
                    ];
                    ans = i;
                    break;
                }
            }
            console[a0_0x3b18e3(0x104)](ans);
        }
        if (sw[0x0] == 'w') {
            var id = sw[0x1];
            var width = cat[id][0x1];
            var i = cat[id][0x0];
            while (width--) {
                W[i] = !![];
                i++;
            }
        }
    }
    console[a0_0x3b18e3(0x104)](a0_0x3b18e3(0xf7));
}