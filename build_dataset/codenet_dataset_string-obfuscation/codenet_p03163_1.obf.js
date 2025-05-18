var a0_0x543585 = a0_0x5e64;
(function (stringArrayFunction, comparisonValue) {
    var _0x14faee = a0_0x5e64;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x14faee(0xda)) / 0x1 + parseInt(_0x14faee(0xdd)) / 0x2 * (-parseInt(_0x14faee(0xe6)) / 0x3) + -parseInt(_0x14faee(0xd8)) / 0x4 * (parseInt(_0x14faee(0xdb)) / 0x5) + parseInt(_0x14faee(0xe9)) / 0x6 * (parseInt(_0x14faee(0xdc)) / 0x7) + parseInt(_0x14faee(0xe7)) / 0x8 + parseInt(_0x14faee(0xe3)) / 0x9 + -parseInt(_0x14faee(0xe8)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x40c1, 0xc66bc));
function a0_0x5e64(bBytNK, key) {
    var stringArray = a0_0x40c1();
    a0_0x5e64 = function (index, key) {
        index = index - 0xd7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e64(bBytNK, key);
}
function main(input) {
    var _0x2f1be5 = a0_0x5e64;
    const lines = input[_0x2f1be5(0xd9)]('\x0a');
    const NW = lines[_0x2f1be5(0xe1)]()[_0x2f1be5(0xd9)]('\x20')['map'](x => parseInt(x));
    const N = NW[0x0];
    const W = NW[0x1];
    const items = lines[_0x2f1be5(0xe2)](line => line[_0x2f1be5(0xd9)]('\x20')[_0x2f1be5(0xe2)](x => parseInt(x)));
    dp = [];
    for (var i = 0x0; i < W + 0x1; i++) {
        dp[_0x2f1be5(0xe5)](Array(N + 0x1)[_0x2f1be5(0xdf)](0x0));
    }
    var result = 0x0;
    for (var i = 0x0; i < N; i++) {
        for (var w = 0x0; w <= W; w++) {
            var weight = items[i][0x0];
            var value = items[i][0x1];
            if (weight <= w) {
                dp[w][i + 0x1] = Math[_0x2f1be5(0xe0)](dp[w][i], dp[w - weight][i] + value);
            } else {
                dp[w][i + 0x1] = dp[w][i];
            }
            if (dp[w][i + 0x1] > result) {
                result = dp[w][i + 0x1];
            }
        }
    }
    console[_0x2f1be5(0xde)](result);
}
function a0_0x40c1() {
    var _0x137d12 = [
        '1132194eKywPB',
        '5rKxJtM',
        '7hDxNnt',
        '1133998kJZdTM',
        'log',
        'fill',
        'max',
        'shift',
        'map',
        '3438126UgilHw',
        '/dev/stdin',
        'push',
        '6TVGCfD',
        '12382536SXcFpi',
        '14127500oiKJjX',
        '6004716nBTzsh',
        'utf8',
        '2813324BQgoZV',
        'split'
    ];
    a0_0x40c1 = function () {
        return _0x137d12;
    };
    return a0_0x40c1();
}
main(require('fs')['readFileSync'](a0_0x543585(0xe4), a0_0x543585(0xd7)));