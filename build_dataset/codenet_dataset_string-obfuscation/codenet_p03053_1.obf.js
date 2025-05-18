'use strict';
function a0_0x4f77(goqfsv, key) {
    var stringArray = a0_0x5ede();
    a0_0x4f77 = function (index, key) {
        index = index - 0xde;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4f77(goqfsv, key);
}
var a0_0x5d71ab = a0_0x4f77;
function a0_0x5ede() {
    var _0x3fc4a1 = [
        'max',
        'trim',
        '530rRNiDX',
        '5532NNrfRC',
        'push',
        '12BGMvTj',
        '14609smsPfC',
        '37127608IaBmDv',
        'abs',
        'shift',
        '324TLvWBe',
        'length',
        '1650622BWpgOy',
        '13sJcAiO',
        '515830tqDLFu',
        'log',
        '152526FVQhCU',
        'utf8',
        'split',
        '235281PbqNoT',
        '99TCfViz',
        '3032zXygYT',
        '1WAnpyr',
        'MAX_SAFE_INTEGER'
    ];
    a0_0x5ede = function () {
        return _0x3fc4a1;
    };
    return a0_0x5ede();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x2fd268 = a0_0x4f77;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2fd268(0xe3)) / 0x1 * (-parseInt(_0x2fd268(0xf1)) / 0x2) + -parseInt(_0x2fd268(0xe0)) / 0x3 * (-parseInt(_0x2fd268(0xea)) / 0x4) + parseInt(_0x2fd268(0xe7)) / 0x5 * (parseInt(_0x2fd268(0xe8)) / 0x6) + -parseInt(_0x2fd268(0xeb)) / 0x7 * (parseInt(_0x2fd268(0xe2)) / 0x8) + parseInt(_0x2fd268(0xe1)) / 0x9 * (-parseInt(_0x2fd268(0xf3)) / 0xa) + -parseInt(_0x2fd268(0xf5)) / 0xb * (parseInt(_0x2fd268(0xef)) / 0xc) + parseInt(_0x2fd268(0xf2)) / 0xd * (parseInt(_0x2fd268(0xec)) / 0xe);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5ede, 0x6839a));
function main(arg) {
    var _0xa02493 = a0_0x4f77;
    arg = arg[_0xa02493(0xe6)]()[_0xa02493(0xdf)]('\x0a');
    arg[_0xa02493(0xee)]();
    var H = arg[_0xa02493(0xf0)];
    var W = arg[0x0][_0xa02493(0xf0)];
    var m1 = [];
    for (var i = 0x0; i < arg[_0xa02493(0xf0)]; i++) {
        m1[_0xa02493(0xe9)](arg[i][_0xa02493(0xdf)](''));
    }
    var i = 0x0;
    var slist = [];
    for (var y = 0x0; y < H; y++)
        for (var x = 0x0; x < W; x++) {
            if (m1[y][x] === '#') {
                slist[_0xa02493(0xe9)]([
                    y,
                    x
                ]);
            }
        }
    var tmp = [];
    for (var y = 0x0; y < H; y++)
        for (var x = 0x0; x < W; x++) {
            if (m1[y][x] === '.') {
                var minD = Number[_0xa02493(0xe4)];
                for (var i = 0x0; i < slist[_0xa02493(0xf0)]; i++) {
                    var _y = slist[i][0x0];
                    var _x = slist[i][0x1];
                    var d = Math[_0xa02493(0xed)](_y - y) + Math[_0xa02493(0xed)](_x - x);
                    if (d < minD) {
                        minD = d;
                    }
                }
                tmp[_0xa02493(0xe9)](minD);
            }
        }
    console[_0xa02493(0xf4)](Math[_0xa02493(0xe5)](...tmp));
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x5d71ab(0xde)));