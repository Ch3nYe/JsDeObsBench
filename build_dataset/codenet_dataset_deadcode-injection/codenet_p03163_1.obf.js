function main(input) {
    var _0x25d8a7 = a0_0xfcab;
    const lines = input[_0x25d8a7(0x0)]('\x0a');
    const NW = lines['shift']()[_0x25d8a7(0x0)]('\x20')[_0x25d8a7(0x1)](x => parseInt(x));
    const N = NW[0x0];
    const W = NW[0x1];
    const items = lines[_0x25d8a7(0x1)](line => line[_0x25d8a7(0x0)]('\x20')[_0x25d8a7(0x1)](x => parseInt(x)));
    dp = [];
    for (var i = 0x0; i < W + 0x1; i++) {
        if (_0x25d8a7(0x2) !== _0x25d8a7(0x2)) {
            dp[w][i + 0x1] = Math[_0x25d8a7(0x3)](dp[w][i], dp[w - weight][i] + value);
        } else {
            dp[_0x25d8a7(0x4)](Array(N + 0x1)['fill'](0x0));
        }
    }
    var result = 0x0;
    for (var i = 0x0; i < N; i++) {
        for (var w = 0x0; w <= W; w++) {
            var weight = items[i][0x0];
            var value = items[i][0x1];
            if (weight <= w) {
                if (_0x25d8a7(0x5) === 'ZwsiJ') {
                    dp[w][i + 0x1] = Math[_0x25d8a7(0x3)](dp[w][i], dp[w - weight][i] + value);
                } else {
                    dp[w][i + 0x1] = dp[w][i];
                }
            } else {
                if (_0x25d8a7(0x6) === _0x25d8a7(0x7)) {
                    dp['push'](Array(N + 0x1)[_0x25d8a7(0x8)](0x0));
                } else {
                    dp[w][i + 0x1] = dp[w][i];
                }
            }
            if (dp[w][i + 0x1] > result) {
                result = dp[w][i + 0x1];
            }
        }
    }
    console[_0x25d8a7(0x9)](result);
}
function a0_0xfcab(otcPjB, key) {
    var stringArray = a0_0x44ab();
    a0_0xfcab = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xfcab(otcPjB, key);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x44ab() {
    var _0x42d2e7 = [
        'split',
        'map',
        'gDort',
        'max',
        'push',
        'ZwsiJ',
        'VfyFS',
        'xKfvQ',
        'fill',
        'log'
    ];
    a0_0x44ab = function () {
        return _0x42d2e7;
    };
    return a0_0x44ab();
}