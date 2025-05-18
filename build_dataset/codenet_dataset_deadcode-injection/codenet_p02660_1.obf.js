var a0_0x2e045b = a0_0x2b21;
function Main(input) {
    var _0x45ec91 = a0_0x2b21;
    input = input[_0x45ec91(0x0)]('\x0a');
    var N = parseInt(input[0x0]);
    var ans = 0x0;
    var set = new Set();
    var N2 = N;
    for (var i = 0x2; i < Math['sqrt'](N); i++) {
        var x = i;
        for (var j = 0x1; x < N; j++) {
            if (N2 % Math[_0x45ec91(0x1)](i, j) == 0x0) {
                ans++;
                N2 = N2 / Math[_0x45ec91(0x1)](i, j);
            } else {
                break;
            }
            x = Math['pow'](i, j + 0x1);
        }
    }
    if (ans == 0x0 && N != 0x1) {
        ans = 0x1;
    }
    console[_0x45ec91(0x2)]('%s', ans);
    return ans;
}
function debug(n) {
    var _0x578b4f = a0_0x2b21;
    var input = document[_0x578b4f(0x3)]('input' + n)[_0x578b4f(0x4)];
    var ans = Main(input);
    var result = 'WA';
    if (ans == document[_0x578b4f(0x3)]('output' + n)[_0x578b4f(0x4)][_0x578b4f(0x0)]('\x0a')[0x0]) {
        result = 'AC';
    }
    document[_0x578b4f(0x3)](_0x578b4f(0x5) + n)[_0x578b4f(0x6)] = result;
}
function a0_0x2b21(iQAhMs, key) {
    var stringArray = a0_0x7a40();
    a0_0x2b21 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2b21(iQAhMs, key);
}
Main(require('fs')[a0_0x2e045b(0x7)](a0_0x2e045b(0x8), a0_0x2e045b(0x9)));
function a0_0x7a40() {
    var _0x4a698b = [
        'split',
        'pow',
        'log',
        'getElementById',
        'value',
        'result',
        'innerHTML',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x7a40 = function () {
        return _0x4a698b;
    };
    return a0_0x7a40();
}