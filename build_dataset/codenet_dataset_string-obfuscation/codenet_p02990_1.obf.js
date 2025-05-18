var a0_0x3845e0 = a0_0x3fb9;
(function (stringArrayFunction, comparisonValue) {
    var _0x1828a2 = a0_0x3fb9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1828a2(0x10e)) / 0x1 * (parseInt(_0x1828a2(0x10c)) / 0x2) + parseInt(_0x1828a2(0x113)) / 0x3 * (parseInt(_0x1828a2(0x101)) / 0x4) + -parseInt(_0x1828a2(0x102)) / 0x5 + parseInt(_0x1828a2(0x111)) / 0x6 + parseInt(_0x1828a2(0x10f)) / 0x7 * (-parseInt(_0x1828a2(0x106)) / 0x8) + parseInt(_0x1828a2(0x107)) / 0x9 * (parseInt(_0x1828a2(0x109)) / 0xa) + -parseInt(_0x1828a2(0x10b)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x28bb, 0x9cddb));
function a0_0x3fb9(WGvsFm, key) {
    var stringArray = a0_0x28bb();
    a0_0x3fb9 = function (index, key) {
        index = index - 0xfd;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3fb9(WGvsFm, key);
}
function Main(input) {
    var _0x537041 = a0_0x3fb9;
    input = input['split']('\x0a');
    var N = parseInt(input[0x0][_0x537041(0xff)]('\x20')[0x0]);
    var K = parseInt(input[0x0][_0x537041(0xff)]('\x20')[0x1]);
    var anssub = new Array();
    var mod = Math[_0x537041(0x10a)](0xa, 0x9) + 0x7;
    for (var i = 0x1; i <= K; i++) {
        var a = combination(N - K + 0x1, i) % mod;
        var b = combination(K - 0x1, i - 0x1) % mod;
        var c = a * b % mod;
        anssub[_0x537041(0xfd)](c);
    }
    var ans = anssub['join']('\x0a');
    console['log']('%s', ans);
    return ans;
}
function permutation(n, r) {
    for (var i = 0x0, res = 0x1; i < r; i++) {
        res *= n - i;
    }
    return res;
}
function a0_0x28bb() {
    var _0xa93879 = [
        '7713343zSkhwP',
        '92126UaacyY',
        'result',
        '27DkzlXi',
        '8415547qBKLgF',
        'utf8',
        '855384bkYpZU',
        'input',
        '1271361xCfybW',
        'push',
        'getElementById',
        'split',
        'output',
        '12RYwrCy',
        '3340610uAlCKa',
        'value',
        '/dev/stdin',
        'readFileSync',
        '8QPYZOf',
        '263583iurQZN',
        'innerHTML',
        '190WzDhsz',
        'pow'
    ];
    a0_0x28bb = function () {
        return _0xa93879;
    };
    return a0_0x28bb();
}
function combination(n, r) {
    return permutation(n, r) / permutation(r, r);
}
function debug(n) {
    var _0xab5413 = a0_0x3fb9;
    var input = document['getElementById'](_0xab5413(0x112) + n)[_0xab5413(0x103)];
    var ans = Main(input);
    var result = 'WA';
    if (ans == document[_0xab5413(0xfe)](_0xab5413(0x100) + n)[_0xab5413(0x103)]['split']('\x0a')[0x0]) {
        result = 'AC';
    }
    document[_0xab5413(0xfe)](_0xab5413(0x10d) + n)[_0xab5413(0x108)] = result;
}
Main(require('fs')[a0_0x3845e0(0x105)](a0_0x3845e0(0x104), a0_0x3845e0(0x110)));