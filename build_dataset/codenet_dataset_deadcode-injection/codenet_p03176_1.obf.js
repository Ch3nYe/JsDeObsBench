function a0_0x4a61(kWTYDe, key) {
    var stringArray = a0_0x4755();
    a0_0x4a61 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4a61(kWTYDe, key);
}
var a0_0x6399ef = a0_0x4a61;
function Main(input) {
    var _0x2991fb = a0_0x4a61;
    input = input['split']('\x0a');
    var N = parseInt(input[0x0]);
    var h = input[0x1]['split']('\x20')['map'](i => parseInt(i));
    var a = input[0x2][_0x2991fb(0x0)]('\x20')[_0x2991fb(0x1)](i => parseInt(i));
    var dp = new Array(N + 0x1)[_0x2991fb(0x2)](0x0);
    var ans = 0x0;
    for (var i = 0x0; i < N; i++) {
        var max = 0x0;
        tmp = a[i] + dp[h[i]];
        for (var j = h[i]; j < N + 0x1; j++) {
            if (tmp > dp[j]) {
                dp[j] = tmp;
            } else {
                break;
            }
        }
        ans = Math[_0x2991fb(0x3)](ans, dp[h[i]]);
    }
    console[_0x2991fb(0x4)]('%s', ans);
    return ans;
}
function debug(n) {
    var _0x144bd5 = a0_0x4a61;
    var input = document[_0x144bd5(0x5)](_0x144bd5(0x6) + n)[_0x144bd5(0x7)];
    var ans = Main(input);
    var result = 'WA';
    if (ans == document[_0x144bd5(0x5)](_0x144bd5(0x8) + n)[_0x144bd5(0x7)][_0x144bd5(0x0)]('\x0a')[0x0]) {
        result = 'AC';
    }
    document[_0x144bd5(0x5)](_0x144bd5(0x9) + n)[_0x144bd5(0xa)] = result;
}
function a0_0x4755() {
    var _0x15b922 = [
        'split',
        'map',
        'fill',
        'max',
        'log',
        'getElementById',
        'input',
        'value',
        'output',
        'result',
        'innerHTML',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4755 = function () {
        return _0x15b922;
    };
    return a0_0x4755();
}
Main(require('fs')[a0_0x6399ef(0xb)](a0_0x6399ef(0xc), a0_0x6399ef(0xd)));