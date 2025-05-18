var a0_0x9c8014 = a0_0x45c4;
(function (stringArrayFunction, comparisonValue) {
    var _0x388625 = a0_0x45c4;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x388625(0x175)) / 0x1 * (parseInt(_0x388625(0x17f)) / 0x2) + -parseInt(_0x388625(0x17d)) / 0x3 + -parseInt(_0x388625(0x17e)) / 0x4 * (-parseInt(_0x388625(0x182)) / 0x5) + parseInt(_0x388625(0x184)) / 0x6 * (parseInt(_0x388625(0x178)) / 0x7) + -parseInt(_0x388625(0x187)) / 0x8 * (parseInt(_0x388625(0x179)) / 0x9) + -parseInt(_0x388625(0x177)) / 0xa * (parseInt(_0x388625(0x181)) / 0xb) + parseInt(_0x388625(0x185)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2e02, 0x7e681));
process[a0_0x9c8014(0x186)][a0_0x9c8014(0x17c)]();
process['stdin']['setEncoding'](a0_0x9c8014(0x183));
function a0_0x45c4(fDRsMw, key) {
    var stringArray = a0_0x2e02();
    a0_0x45c4 = function (index, key) {
        index = index - 0x175;
        var value = stringArray[index];
        return value;
    };
    return a0_0x45c4(fDRsMw, key);
}
function a0_0x2e02() {
    var _0x3183f5 = [
        '8fHeJex',
        'split',
        '6AbwBOJ',
        'log',
        '90840COOqZM',
        '9023IyvetT',
        '7641009UlwMbO',
        'No\x20cats.',
        'pow',
        'resume',
        '679374sgOqht',
        '3676QHOESB',
        '280846sHbzRV',
        'data',
        '803wpKdjj',
        '2425yEvtoM',
        'utf8',
        '3444VWsVWb',
        '22959468KAQIOx',
        'stdin'
    ];
    a0_0x2e02 = function () {
        return _0x3183f5;
    };
    return a0_0x2e02();
}
var n = -0x1, i = function (d) {
        var _0x226502 = a0_0x9c8014;
        return Math[_0x226502(0x17b)](0xa, ~~d);
    }, l, p, c, r, o, a, b, am, bm, d;
process['stdin']['on'](a0_0x9c8014(0x180), function (ip) {
    var _0x548af9 = a0_0x9c8014;
    p = ip['split']('\x0a');
    l = ~~p[0x0];
    for (c = 0x0; c < l; ++c) {
        r = [], o = p[c + 0x1][_0x548af9(0x188)]('\x20'), d = 0x0;
        for (a = i(o[0x0] - 0x1), am = i(o[0x0]) - 0x1; a < am; ++a)
            for (b = i(o[0x1] - 0x1), bm = i(o[0x1]) - 0x1; b < bm; ++b)
                (b * b + b - a * a + a) / 0x2 == '' + a + b && (console[_0x548af9(0x176)](a + '\x20' + b), ++d);
        d || console[_0x548af9(0x176)](_0x548af9(0x17a));
    }
});