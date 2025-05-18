var a0_0x1ed04d = a0_0x3496;
function Main(input) {
    var _0x159e1f = a0_0x3496;
    input = input[_0x159e1f(0x0)]('\x0a');
    var N = parseInt(input[0x0]['split']('\x20')[0x0]);
    var K = parseInt(input[0x0][_0x159e1f(0x0)]('\x20')[0x1]);
    var anssub = new Array();
    var mod = Math[_0x159e1f(0x1)](0xa, 0x9) + 0x7;
    for (var i = 0x1; i <= K; i++) {
        var a = combination(N - K + 0x1, i) % mod;
        var b = combination(K - 0x1, i - 0x1) % mod;
        var c = a * b % mod;
        anssub[_0x159e1f(0x2)](c);
    }
    var ans = anssub[_0x159e1f(0x3)]('\x0a');
    console[_0x159e1f(0x4)]('%s', ans);
    return ans;
}
function permutation(n, r) {
    var _0x396508 = a0_0x3496;
    for (var i = 0x0, res = 0x1; i < r; i++) {
        if (_0x396508(0x5) === _0x396508(0x6)) {
            res *= n - i;
        } else {
            res *= n - i;
        }
    }
    return res;
}
function combination(n, r) {
    return permutation(n, r) / permutation(r, r);
}
function a0_0x3496(PTRJKG, key) {
    var stringArray = a0_0x5480();
    a0_0x3496 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3496(PTRJKG, key);
}
function debug(n) {
    var _0x33f234 = a0_0x3496;
    var input = document[_0x33f234(0x7)]('input' + n)[_0x33f234(0x8)];
    var ans = Main(input);
    var result = 'WA';
    if (ans == document[_0x33f234(0x7)](_0x33f234(0x9) + n)[_0x33f234(0x8)]['split']('\x0a')[0x0]) {
        if ('YWKlr' === _0x33f234(0xa)) {
            var input = document[_0x33f234(0x7)](_0x33f234(0xb) + n)[_0x33f234(0x8)];
            var ans = Main(input);
            var result = 'WA';
            if (ans == document['getElementById'](_0x33f234(0x9) + n)['value'][_0x33f234(0x0)]('\x0a')[0x0]) {
                result = 'AC';
            }
            document[_0x33f234(0x7)](_0x33f234(0xc) + n)[_0x33f234(0xd)] = result;
        } else {
            result = 'AC';
        }
    }
    document[_0x33f234(0x7)](_0x33f234(0xc) + n)[_0x33f234(0xd)] = result;
}
Main(require('fs')[a0_0x1ed04d(0xe)](a0_0x1ed04d(0xf), a0_0x1ed04d(0x10)));
function a0_0x5480() {
    var _0x245f5f = [
        'split',
        'pow',
        'push',
        'join',
        'log',
        'IswEf',
        'mpflA',
        'getElementById',
        'value',
        'output',
        'LIbiR',
        'input',
        'result',
        'innerHTML',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5480 = function () {
        return _0x245f5f;
    };
    return a0_0x5480();
}