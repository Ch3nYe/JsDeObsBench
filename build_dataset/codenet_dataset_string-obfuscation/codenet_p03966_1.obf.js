function a0_0x261d() {
    var _0x1bacd5 = [
        '1121730kHDhHJ',
        '2098938clToCc',
        '3QhDLlA',
        'ceil',
        'max',
        '54SLRWCd',
        '516610AdfNIU',
        '21575850hitbFt',
        '7RvQOMO',
        '1984690njkGSy',
        'readFileSync',
        '2532316jTSxKS',
        '683976EZLPsz',
        'split',
        'utf8'
    ];
    a0_0x261d = function () {
        return _0x1bacd5;
    };
    return a0_0x261d();
}
var a0_0x29f7fc = a0_0x2fab;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b7d44 = a0_0x2fab;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5b7d44(0xb4)) / 0x1 + -parseInt(_0x5b7d44(0xba)) / 0x2 * (parseInt(_0x5b7d44(0xb6)) / 0x3) + parseInt(_0x5b7d44(0xb0)) / 0x4 + parseInt(_0x5b7d44(0xae)) / 0x5 + -parseInt(_0x5b7d44(0xb5)) / 0x6 * (parseInt(_0x5b7d44(0xad)) / 0x7) + parseInt(_0x5b7d44(0xb1)) / 0x8 * (-parseInt(_0x5b7d44(0xb9)) / 0x9) + parseInt(_0x5b7d44(0xac)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x261d, 0xe6a7a));
function a0_0x2fab(DvPDVy, key) {
    var stringArray = a0_0x261d();
    a0_0x2fab = function (index, key) {
        index = index - 0xac;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fab(DvPDVy, key);
}
function Main(input) {
    var _0xd987fb = a0_0x2fab;
    TT = 0x0;
    AA = 0x0;
    input = input[_0xd987fb(0xb2)]('\x0a');
    N = input[0x0];
    for (i = 0x1; i <= N; i++) {
        tmp = input[i]['split']('\x20');
        T = tmp[0x0] * 0x1;
        A = tmp[0x1] * 0x1;
        if (TT <= T && AA <= A) {
            TT = T;
            AA = A;
        } else {
            ratioT = TT / T;
            ratioA = AA / A;
            ratio = Math[_0xd987fb(0xb7)](Math[_0xd987fb(0xb8)](ratioT, ratioA));
            TT = T * ratio;
            AA = A * ratio;
        }
    }
    console['log'](TT + AA);
}
Main(require('fs')[a0_0x29f7fc(0xaf)]('/dev/stdin', a0_0x29f7fc(0xb3)));