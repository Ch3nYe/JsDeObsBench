function a0_0x48f1() {
    var _0x508706 = [
        'split',
        'map',
        'qhJop',
        'CybFE',
        'Fljig',
        'fill',
        'UMBfX',
        'QOwBc',
        'omkCx',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x48f1 = function () {
        return _0x508706;
    };
    return a0_0x48f1();
}
function a0_0x5110(xZGxYW, key) {
    var stringArray = a0_0x48f1();
    a0_0x5110 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5110(xZGxYW, key);
}
var a0_0x2c5727 = a0_0x5110;
function Main(input) {
    var _0x1e42bf = a0_0x5110;
    input = input[_0x1e42bf(0x0)]('\x0a');
    var N = input[0x0][_0x1e42bf(0x0)]('\x20')[_0x1e42bf(0x1)](a => parseInt(a));
    var K = N[0x1];
    N = N[0x0];
    var x = [], y = [], c = [];
    for (var i = 0x0; i < N; i++) {
        if (_0x1e42bf(0x2) === _0x1e42bf(0x3)) {
            x[i] = input[i + 0x1]['split']('\x20');
            y[i] = parseInt(x[i][0x1]) % (K * 0x2);
            c[i] = x[i][0x2] === 'W' ? 0x0 : 0x1;
            x[i] = parseInt(x[i][0x0]) % (K * 0x2);
        } else {
            x[i] = input[i + 0x1][_0x1e42bf(0x0)]('\x20');
            y[i] = parseInt(x[i][0x1]) % (K * 0x2);
            c[i] = x[i][0x2] === 'W' ? 0x0 : 0x1;
            x[i] = parseInt(x[i][0x0]) % (K * 0x2);
        }
    }
    var ans = 0x0;
    for (i = 0x0; i < K; i++) {
        if (_0x1e42bf(0x4) === _0x1e42bf(0x4)) {
            var now = 0x0;
            var Y1 = new Array(K * 0x2)[_0x1e42bf(0x5)](0x0), Y2 = new Array(K * 0x2)['fill'](0x0);
            for (var k = 0x0; k < N; k++) {
                if (_0x1e42bf(0x6) !== _0x1e42bf(0x7)) {
                    if ((((x[k] + i) / K ^ y[k] / K) & 0x1) === c[k]) {
                        if (_0x1e42bf(0x8) === _0x1e42bf(0x8)) {
                            now++;
                            Y1[y[k]]++;
                        } else {
                            var now = 0x0;
                            var Y1 = new Array(K * 0x2)[_0x1e42bf(0x5)](0x0), Y2 = new Array(K * 0x2)[_0x1e42bf(0x5)](0x0);
                            for (var k = 0x0; k < N; k++) {
                                if ((((x[k] + i) / K ^ y[k] / K) & 0x1) === c[k]) {
                                    now++;
                                    Y1[y[k]]++;
                                } else
                                    Y2[y[k]]++;
                            }
                            if (ans < now)
                                ans = now;
                            if (ans < N - now)
                                ans = N - now;
                            for (var j = 0x0; j < K - 0x1; j++) {
                                now += Y2[j] - Y1[j] + Y2[j + K] - Y1[j + K];
                                if (ans < now)
                                    ans = now;
                                if (ans < N - now)
                                    ans = N - now;
                            }
                        }
                    } else
                        Y2[y[k]]++;
                } else {
                    now += Y2[j] - Y1[j] + Y2[j + K] - Y1[j + K];
                    if (ans < now)
                        ans = now;
                    if (ans < N - now)
                        ans = N - now;
                }
            }
            if (ans < now)
                ans = now;
            if (ans < N - now)
                ans = N - now;
            for (var j = 0x0; j < K - 0x1; j++) {
                now += Y2[j] - Y1[j] + Y2[j + K] - Y1[j + K];
                if (ans < now)
                    ans = now;
                if (ans < N - now)
                    ans = N - now;
            }
        } else {
            now++;
            Y1[y[k]]++;
        }
    }
    console[_0x1e42bf(0x9)](ans);
}
Main(require('fs')[a0_0x2c5727(0xa)]('/dev/stdin', a0_0x2c5727(0xb)));