function a0_0x39ac(ZJWrGw, key) {
    var stringArray = a0_0x3e49();
    a0_0x39ac = function (index, key) {
        index = index - 0x1e7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x39ac(ZJWrGw, key);
}
var a0_0x4fa3ca = a0_0x39ac;
(function (stringArrayFunction, comparisonValue) {
    var _0x52a5e9 = a0_0x39ac;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x52a5e9(0x1ee)) / 0x1 * (-parseInt(_0x52a5e9(0x1f8)) / 0x2) + parseInt(_0x52a5e9(0x1f2)) / 0x3 + parseInt(_0x52a5e9(0x1f1)) / 0x4 * (-parseInt(_0x52a5e9(0x1fb)) / 0x5) + -parseInt(_0x52a5e9(0x1e8)) / 0x6 + -parseInt(_0x52a5e9(0x1eb)) / 0x7 + parseInt(_0x52a5e9(0x1ec)) / 0x8 + -parseInt(_0x52a5e9(0x1f3)) / 0x9 * (-parseInt(_0x52a5e9(0x1f7)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3e49, 0x8c553));
function gcd(arr) {
    var _0x29f352 = a0_0x39ac;
    var f = (a, b) => b ? f(b, a % b) : a;
    var ans = arr[0x0];
    for (var i = 0x1; i < arr[_0x29f352(0x1ed)]; i++) {
        ans = f(ans, arr[i]);
    }
    return ans;
}
function getExcep(c) {
    var _0x3807db = a0_0x39ac;
    var min = Math[_0x3807db(0x1fa)](...c);
    var max = Math[_0x3807db(0x1f6)](...c);
    var mincount = 0x0;
    var maxcount = 0x0;
    var findValue = 0x0;
    for (var i = 0x0; i < c[_0x3807db(0x1ed)]; i++) {
        if (c[i] === min) {
            mincount++;
        }
    }
    if (mincount === 0x1) {
        findValue = min;
    } else {
        findValue = max;
    }
    for (var i = 0x0; i < c[_0x3807db(0x1ed)]; i++) {
        if (c[i] === findValue) {
            return i;
        }
    }
}
function main(arg) {
    var _0x13ad63 = a0_0x39ac;
    arg = arg['trim']()[_0x13ad63(0x1e9)]('\x0a');
    var N = Number(arg[0x0]);
    var A = arg[0x1][_0x13ad63(0x1e9)]('\x20')['map'](Number);
    var c = new Array(A[_0x13ad63(0x1ed)])[_0x13ad63(0x1f4)](0x0);
    var result = 0x0;
    for (var i = 0x0; i < A[_0x13ad63(0x1ed)]; i++) {
        var _A = A[_0x13ad63(0x1e7)]();
        _A[_0x13ad63(0x1f0)](i, 0x1);
        var n = gcd(_A);
        c[i] = n;
    }
    var idx = getExcep(c);
    A[idx] = A[idx + 0x1];
    console[_0x13ad63(0x1f5)](gcd(A));
}
main(require('fs')[a0_0x4fa3ca(0x1ea)](a0_0x4fa3ca(0x1f9), a0_0x4fa3ca(0x1ef)));
function a0_0x3e49() {
    var _0x58bf70 = [
        'split',
        'readFileSync',
        '1391586TGhJpZ',
        '1257320fPsXcD',
        'length',
        '103cxkKkF',
        'utf8',
        'splice',
        '42396vFTmgC',
        '671763jirdEr',
        '20269341NvplKY',
        'fill',
        'log',
        'max',
        '10OYrEzp',
        '7538paAnUZ',
        '/dev/stdin',
        'min',
        '415ArSSYW',
        'slice',
        '3550260oAJRqf'
    ];
    a0_0x3e49 = function () {
        return _0x58bf70;
    };
    return a0_0x3e49();
}