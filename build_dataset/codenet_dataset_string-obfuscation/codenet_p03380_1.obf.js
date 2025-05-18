function a0_0x25c5() {
    var _0x304508 = [
        '13475kAPRQz',
        '117170gOFwWO',
        '27eWgNKN',
        '2864266CNIxML',
        'map',
        'max',
        '2920MIIlac',
        '1432050raVLmK',
        'readFileSync',
        '5509625XtVsVi',
        'split',
        '3wnpGRe',
        '324MsTMpY',
        '1830076OYGEtl',
        '785760vPFIFH',
        '/dev/stdin',
        '%d\x20%d',
        'utf8',
        '24FqAVVA',
        'sort'
    ];
    a0_0x25c5 = function () {
        return _0x304508;
    };
    return a0_0x25c5();
}
var a0_0x56cffc = a0_0x3b6c;
(function (stringArrayFunction, comparisonValue) {
    var _0x558c37 = a0_0x3b6c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x558c37(0x162)) / 0x1 + -parseInt(_0x558c37(0x16b)) / 0x2 + parseInt(_0x558c37(0x15f)) / 0x3 * (-parseInt(_0x558c37(0x161)) / 0x4) + -parseInt(_0x558c37(0x169)) / 0x5 * (-parseInt(_0x558c37(0x160)) / 0x6) + -parseInt(_0x558c37(0x168)) / 0x7 * (-parseInt(_0x558c37(0x16e)) / 0x8) + -parseInt(_0x558c37(0x16a)) / 0x9 * (-parseInt(_0x558c37(0x16f)) / 0xa) + -parseInt(_0x558c37(0x171)) / 0xb * (-parseInt(_0x558c37(0x166)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x25c5, 0xb0c2e));
function a0_0x3b6c(IttZmp, key) {
    var stringArray = a0_0x25c5();
    a0_0x3b6c = function (index, key) {
        index = index - 0x15e;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3b6c(IttZmp, key);
}
function Main(s) {
    var _0x3e8998 = a0_0x3b6c;
    s = s[_0x3e8998(0x15e)]('\x0a');
    var a = s[0x1]['split']('\x20')[_0x3e8998(0x16c)](a => +a);
    const n = +s[0x0];
    var m = Math[_0x3e8998(0x16d)](...a);
    var b = [...a][_0x3e8998(0x167)]((a, b) => a - b);
    var c = 0x218711a00;
    for (var i = 0x0; i < n - 0x1; i++) {
        if (Math['abs'](m / 0x2 - b[i]) < c)
            c = Math['abs'](m / 0x2 - b[i]);
        else
            break;
    }
    console['log'](_0x3e8998(0x164), m, b[i - 0x1]);
}
Main(require('fs')[a0_0x56cffc(0x170)](a0_0x56cffc(0x163), a0_0x56cffc(0x165)));