var a0_0x2384e7 = a0_0x55eb;
function a0_0x55eb(ZyBIXS, key) {
    var stringArray = a0_0xd3f5();
    a0_0x55eb = function (index, key) {
        index = index - 0x19c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x55eb(ZyBIXS, key);
}
function a0_0xd3f5() {
    var _0x3bed21 = [
        'push',
        '1123969ssFEWO',
        '188qwAOWE',
        '42jxTwbi',
        '13188065AeipzF',
        'utf8',
        '382osPKxL',
        '660BInpyk',
        '3730490VHYxXW',
        '12PWwkix',
        'sort',
        '9SlyOEA',
        'length',
        'readFileSync',
        '15892jraKWr',
        'split',
        'floor',
        'log',
        '7459930MjszGN',
        '/dev/stdin',
        '2678384ztmfxy'
    ];
    a0_0xd3f5 = function () {
        return _0x3bed21;
    };
    return a0_0xd3f5();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x3b13f9 = a0_0x55eb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x3b13f9(0x1aa)) / 0x1 * (parseInt(_0x3b13f9(0x1a6)) / 0x2) + -parseInt(_0x3b13f9(0x1ab)) / 0x3 * (-parseInt(_0x3b13f9(0x19d)) / 0x4) + -parseInt(_0x3b13f9(0x1ac)) / 0x5 + parseInt(_0x3b13f9(0x1a7)) / 0x6 * (-parseInt(_0x3b13f9(0x1a5)) / 0x7) + -parseInt(_0x3b13f9(0x1a3)) / 0x8 + parseInt(_0x3b13f9(0x1af)) / 0x9 * (parseInt(_0x3b13f9(0x1a1)) / 0xa) + -parseInt(_0x3b13f9(0x1a8)) / 0xb * (-parseInt(_0x3b13f9(0x1ad)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xd3f5, 0x8d293));
function median(l) {
    var _0x294622 = a0_0x55eb;
    return l[_0x294622(0x1ae)]()[Math[_0x294622(0x19f)](l[_0x294622(0x1b0)] / 0x2)];
}
function Main(input) {
    var _0x47edbb = a0_0x55eb;
    input = input[_0x47edbb(0x19e)]('\x0a');
    N = parseInt(input[0x0]);
    a = input[0x1]['split']('\x20');
    m = [];
    for (var i = 0x0; i < N; i++) {
        for (var j = i + 0x1; j < N + 0x1; j++) {
            m[_0x47edbb(0x1a4)](median(a['slice'](i, j)));
        }
    }
    console[_0x47edbb(0x1a0)](median(m));
}
Main(require('fs')[a0_0x2384e7(0x19c)](a0_0x2384e7(0x1a2), a0_0x2384e7(0x1a9)));