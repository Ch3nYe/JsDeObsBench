function a0_0xad9a(jxQjyv, key) {
    var stringArray = a0_0x273e();
    a0_0xad9a = function (index, key) {
        index = index - 0x112;
        var value = stringArray[index];
        return value;
    };
    return a0_0xad9a(jxQjyv, key);
}
var a0_0x5e1915 = a0_0xad9a;
(function (stringArrayFunction, comparisonValue) {
    var _0x758400 = a0_0xad9a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x758400(0x118)) / 0x1 * (parseInt(_0x758400(0x119)) / 0x2) + -parseInt(_0x758400(0x123)) / 0x3 * (-parseInt(_0x758400(0x11c)) / 0x4) + parseInt(_0x758400(0x114)) / 0x5 * (-parseInt(_0x758400(0x11e)) / 0x6) + parseInt(_0x758400(0x11f)) / 0x7 * (-parseInt(_0x758400(0x11d)) / 0x8) + -parseInt(_0x758400(0x117)) / 0x9 * (parseInt(_0x758400(0x120)) / 0xa) + -parseInt(_0x758400(0x121)) / 0xb + parseInt(_0x758400(0x112)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x273e, 0xe99c3));
function Main(input) {
    var _0x4b967a = a0_0xad9a;
    var N = parseInt(input[0x0], 0xa);
    var A = input[0x1][_0x4b967a(0x116)]('\x20');
    var total = 0x0;
    for (var i = 0x0; i < N; i++) {
        A[i] = parseInt(A[i], 0xa);
        total += A[i];
    }
    var result = 0x0;
    var mae = 0x0;
    var ato = 0x0;
    var target = 0x0;
    for (var i = 0x0; i < N; i++) {
        if (mae + A[i] < total / 0x2) {
            mae += A[i];
        } else if (mae + A[i] == total / 0x2) {
            console[_0x4b967a(0x11b)]('%s', 0x0);
            return;
        } else {
            target = i;
            ato = total - mae - A[i];
            break;
        }
    }
    var diff = Math[_0x4b967a(0x122)](ato - mae);
    var result = Math[_0x4b967a(0x122)](A[i] - diff);
    console[_0x4b967a(0x11b)]('%s', result);
}
function a0_0x273e() {
    var _0x1e4e24 = [
        '574165NoKGGe',
        'readFileSync',
        'split',
        '504ekdLgd',
        '117NCRRQn',
        '4964pbmHRq',
        'utf8',
        'log',
        '324zYFmgO',
        '16VEPiMK',
        '42oeGhsM',
        '2661589SDqphB',
        '103780qVNXBM',
        '15625500KNRMhW',
        'abs',
        '38664dRjTph',
        '38261976ejdgyp',
        '/dev/stdin'
    ];
    a0_0x273e = function () {
        return _0x1e4e24;
    };
    return a0_0x273e();
}
Main(require('fs')[a0_0x5e1915(0x115)](a0_0x5e1915(0x113), a0_0x5e1915(0x11a))[a0_0x5e1915(0x116)]('\x0a'));