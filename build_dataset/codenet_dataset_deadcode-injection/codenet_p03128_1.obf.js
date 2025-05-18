function a0_0x1bc2() {
    var _0x4575d4 = [
        'split',
        'map',
        'num',
        'val',
        'UWgjU',
        'log',
        'length',
        'Nmdmo',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x1bc2 = function () {
        return _0x4575d4;
    };
    return a0_0x1bc2();
}
var a0_0x3abe45 = a0_0x3a69;
function main(input) {
    var _0x82f8e2 = a0_0x3a69;
    var n = input[0x0][_0x82f8e2(0x0)]('\x20')[0x0] - 0x0;
    var m = input[0x0][_0x82f8e2(0x0)]('\x20')[0x1] - 0x0;
    var nummap = [
        0x0,
        0x2,
        0x5,
        0x5,
        0x4,
        0x5,
        0x6,
        0x3,
        0x7,
        0x6
    ];
    var mattis = input[0x1][_0x82f8e2(0x0)]('\x20')[_0x82f8e2(0x1)](v => {
        return {
            'val': v,
            'num': nummap[v - 0x0]
        };
    });
    var ans = '';
    var dp = [];
    dp[0x0] = '';
    for (var i = 0x1; i <= n; i++) {
        for (var j = 0x0; j < m; j++) {
            var matti = mattis[j];
            if (dp[i - matti[_0x82f8e2(0x2)]] !== undefined) {
                var tv = (dp[i - matti[_0x82f8e2(0x2)]] ? dp[i - matti[_0x82f8e2(0x2)]] : '') + matti[_0x82f8e2(0x3)];
                if (dp[i] === undefined || diff(tv, dp[i]) > 0x0) {
                    if ('UWgjU' !== _0x82f8e2(0x4)) {
                        return {
                            'val': v,
                            'num': nummap[v - 0x0]
                        };
                    } else {
                        dp[i] = tv;
                    }
                }
            }
        }
    }
    console[_0x82f8e2(0x5)](dp[n]);
}
function diff(a, b) {
    var _0x495d31 = a0_0x3a69;
    if (a[_0x495d31(0x6)] != b[_0x495d31(0x6)])
        return a[_0x495d31(0x6)] - b[_0x495d31(0x6)];
    for (var i = 0x0; i < a['length']; i++) {
        if ('Nmdmo' !== _0x495d31(0x7)) {
            dp[i] = tv;
        } else {
            if (a[i] != b[i])
                return a[i] - b[i];
        }
    }
    return 0x0;
}
function a0_0x3a69(clsgKF, key) {
    var stringArray = a0_0x1bc2();
    a0_0x3a69 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3a69(clsgKF, key);
}
main(require('fs')[a0_0x3abe45(0x8)](a0_0x3abe45(0x9), a0_0x3abe45(0xa))[a0_0x3abe45(0xb)]()['split']('\x0a'));