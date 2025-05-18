function a0_0xd189(zvsAzv, key) {
    var stringArray = a0_0x511a();
    a0_0xd189 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xd189(zvsAzv, key);
}
function a0_0x511a() {
    var _0x249c8a = [
        'split',
        'map',
        'fill',
        'toString',
        'filter',
        '000000',
        'slice',
        'forEach',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x511a = function () {
        return _0x249c8a;
    };
    return a0_0x511a();
}
var a0_0x39f542 = a0_0xd189;
function Main(input) {
    var _0x4e5d9a = a0_0xd189;
    input = input[_0x4e5d9a(0x0)]('\x20')[_0x4e5d9a(0x1)](a => ~~a);
    var H = input[0x0];
    var W = input[0x1];
    var K = input[0x2];
    var mod = 0xa ** 0x9 + 0x7;
    if (W == 0x1)
        return 0x1;
    var validAmidaList = Array(0x2 ** (W - 0x1))[_0x4e5d9a(0x2)](0x0)[_0x4e5d9a(0x1)]((a, b) => b)['map'](a => a[_0x4e5d9a(0x3)](0x2))[_0x4e5d9a(0x4)](a => !/11/['test'](a))[_0x4e5d9a(0x1)](a => _0x4e5d9a(0x5) + a)['map'](a => a[_0x4e5d9a(0x6)](0x1 - W))[_0x4e5d9a(0x1)](a => '0' + a + '0');
    var dp = Array(H + 0x1);
    for (var i = 0x0; i <= H; i++) {
        dp[i] = Array(W)[_0x4e5d9a(0x2)](0x0);
    }
    dp[0x0][0x0] = 0x1;
    for (var i = 0x1; i <= H; i++) {
        validAmidaList[_0x4e5d9a(0x7)](function (elem) {
            for (var j = 0x0; j < W; j++) {
                ({
                    '10': a => dp[i][j] += dp[i - 0x1][j - 0x1],
                    '01': a => dp[i][j] += dp[i - 0x1][j + 0x1],
                    '00': a => dp[i][j] += dp[i - 0x1][j]
                }[elem[j] + elem[j + 0x1]]());
                dp[i][j] %= mod;
            }
        });
    }
    return dp[H][K - 0x1];
}
if (typeof require !== 'undefined')
    console[a0_0x39f542(0x8)](Main(require('fs')[a0_0x39f542(0x9)](a0_0x39f542(0xa), a0_0x39f542(0xb))));