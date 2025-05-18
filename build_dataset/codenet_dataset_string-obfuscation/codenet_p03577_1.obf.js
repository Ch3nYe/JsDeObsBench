var a0_0x5492cc = a0_0x11e3;
function a0_0x11e3(PdDLtN, key) {
    var stringArray = a0_0x21b5();
    a0_0x11e3 = function (index, key) {
        index = index - 0xb9;
        var value = stringArray[index];
        return value;
    };
    return a0_0x11e3(PdDLtN, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x411fa2 = a0_0x11e3;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x411fa2(0xc3)) / 0x1 + -parseInt(_0x411fa2(0xc5)) / 0x2 * (parseInt(_0x411fa2(0xbf)) / 0x3) + -parseInt(_0x411fa2(0xc6)) / 0x4 * (parseInt(_0x411fa2(0xc4)) / 0x5) + parseInt(_0x411fa2(0xcc)) / 0x6 + parseInt(_0x411fa2(0xca)) / 0x7 + -parseInt(_0x411fa2(0xc0)) / 0x8 * (-parseInt(_0x411fa2(0xbb)) / 0x9) + parseInt(_0x411fa2(0xc9)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x21b5, 0x22d62));
process[a0_0x5492cc(0xbd)][a0_0x5492cc(0xcb)]();
process[a0_0x5492cc(0xbd)][a0_0x5492cc(0xc7)](a0_0x5492cc(0xbc));
var g_input = '';
function a0_0x21b5() {
    var _0x9c6f7d = [
        'resume',
        '1471356KBoUpt',
        'slice',
        'log',
        '63783nNBUoB',
        'utf8',
        'stdin',
        'length',
        '147tvZGam',
        '8AFgzfm',
        'end',
        'split',
        '6182WruTFK',
        '20555KyPABW',
        '1898dzHlCq',
        '236JNQHob',
        'setEncoding',
        'FESTIVAL',
        '741700djKwVP',
        '693525CBvRny'
    ];
    a0_0x21b5 = function () {
        return _0x9c6f7d;
    };
    return a0_0x21b5();
}
process[a0_0x5492cc(0xbd)]['on']('data', function (chunk) {
    g_input += chunk;
});
process[a0_0x5492cc(0xbd)]['on'](a0_0x5492cc(0xc1), function () {
    var _0x2d83a4 = a0_0x5492cc;
    Main(g_input[_0x2d83a4(0xc2)](/\r?\n/));
});
function Main(input) {
    var _0x2925cc = a0_0x5492cc;
    console[_0x2925cc(0xba)](input[0x0][_0x2925cc(0xb9)](0x0, input[0x0][_0x2925cc(0xbe)] - _0x2925cc(0xc8)['length']));
    return 0x0;
}