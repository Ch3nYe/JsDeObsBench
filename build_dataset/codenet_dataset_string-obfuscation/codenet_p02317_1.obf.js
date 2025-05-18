var a0_0x55c5d4 = a0_0x5619;
(function (stringArrayFunction, comparisonValue) {
    var _0x248ccb = a0_0x5619;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x248ccb(0xf2)) / 0x1 * (-parseInt(_0x248ccb(0xf5)) / 0x2) + -parseInt(_0x248ccb(0xf8)) / 0x3 + -parseInt(_0x248ccb(0xf3)) / 0x4 + parseInt(_0x248ccb(0xf0)) / 0x5 * (parseInt(_0x248ccb(0xf7)) / 0x6) + parseInt(_0x248ccb(0xec)) / 0x7 * (-parseInt(_0x248ccb(0xed)) / 0x8) + -parseInt(_0x248ccb(0xea)) / 0x9 + parseInt(_0x248ccb(0xe8)) / 0xa * (parseInt(_0x248ccb(0xf4)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3ca8, 0x66460));
function main() {
    var _0x2db580 = a0_0x5619;
    var input = getInput();
    var ls = input['split']('\x0a');
    var n = parseInt(ls[0x0]);
    var nums = ls[_0x2db580(0xe9)](0x1, n + 0x1)['map'](function (s) {
        return parseInt(s);
    });
    console[_0x2db580(0xef)](lis(nums));
}
function a0_0x3ca8() {
    var _0x1ba6d2 = [
        '300146jhaRkd',
        'getElementById',
        '2994714uFTzIe',
        '2090382PyQGJD',
        'input',
        '10431830bQVBPo',
        'slice',
        '4589721RpNyBc',
        'toString',
        '7lhPprb',
        '660952DcPyXL',
        'length',
        'log',
        '5SmuwXY',
        'undefined',
        '3yWeBkn',
        '1136908NuOSlg',
        '11WMoLfn'
    ];
    a0_0x3ca8 = function () {
        return _0x1ba6d2;
    };
    return a0_0x3ca8();
}
function lis(xs) {
    var _0xce0e8d = a0_0x5619;
    var table = [xs[0x0]];
    for (var i = 0x1; i < xs[_0xce0e8d(0xee)]; i++) {
        var x = xs[i];
        table[search(table, x) + 0x1] = x;
    }
    return table[_0xce0e8d(0xee)];
}
function search(table, x) {
    var l = 0x0, h = table['length'];
    if (table['length'] == 0x0 || x <= table[0x0]) {
        return -0x1;
    }
    while (l + 0x1 < h) {
        var pivot = (l + h + 0x1) / 0x2;
        if (table[pivot] < x) {
            l = pivot;
        } else {
            h = pivot;
        }
    }
    return l;
}
function a0_0x5619(SFbTfK, key) {
    var stringArray = a0_0x3ca8();
    a0_0x5619 = function (index, key) {
        index = index - 0xe7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5619(SFbTfK, key);
}
nodeJS = typeof require != a0_0x55c5d4(0xf1);
function getInput() {
    var _0x48e7a8 = a0_0x55c5d4;
    if (!nodeJS) {
        return document[_0x48e7a8(0xf6)](_0x48e7a8(0xe7))['value'];
    }
    return require('fs')['readFileSync']('/dev/stdin')[_0x48e7a8(0xeb)]();
}
if (nodeJS) {
    main();
}