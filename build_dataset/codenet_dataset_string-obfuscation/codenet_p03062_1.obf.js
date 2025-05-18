var a0_0x14c4a1 = a0_0x4dc8;
(function (stringArrayFunction, comparisonValue) {
    var _0x1165cc = a0_0x4dc8;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1165cc(0x104)) / 0x1 + -parseInt(_0x1165cc(0x102)) / 0x2 + parseInt(_0x1165cc(0xfe)) / 0x3 + parseInt(_0x1165cc(0x103)) / 0x4 * (-parseInt(_0x1165cc(0xfb)) / 0x5) + -parseInt(_0x1165cc(0x101)) / 0x6 + parseInt(_0x1165cc(0x106)) / 0x7 + parseInt(_0x1165cc(0x100)) / 0x8 * (parseInt(_0x1165cc(0xfd)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5511, 0x2bf60));
function main(input) {
    var _0x494024 = a0_0x4dc8;
    const formatted_input = input[_0x494024(0x105)]('\x0a');
    const N = parseInt(formatted_input[0x0], 0xa);
    const As = formatted_input[0x1][_0x494024(0x105)]('\x20')['map'](x => parseInt(x));
    dp = [];
    for (var i = 0x0; i < N; i++) {
        var results = [];
        if (i == 0x0) {
            results = [
                As[i],
                As[i] * -0x1
            ];
        } else {
            var not_flipped = Math['max'](dp[i - 0x1][0x0] + As[i], dp[i - 0x1][0x1] - As[i]);
            var flipped = Math['max'](dp[i - 0x1][0x0] - As[i], dp[i - 0x1][0x1] + As[i]);
            results = [
                not_flipped,
                flipped
            ];
        }
        dp[_0x494024(0xff)](results);
    }
    console['log'](dp[N - 0x1][0x0]);
}
main(require('fs')['readFileSync'](a0_0x14c4a1(0xfc), 'utf8'));
function a0_0x4dc8(iuYlaX, key) {
    var stringArray = a0_0x5511();
    a0_0x4dc8 = function (index, key) {
        index = index - 0xfb;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4dc8(iuYlaX, key);
}
function a0_0x5511() {
    var _0x5a66cb = [
        '14325hNchii',
        '/dev/stdin',
        '138807FzHTqE',
        '868101UXpjjj',
        'push',
        '248zOClOK',
        '1828770CsUnlW',
        '452496yOaVxJ',
        '500YaMcfl',
        '198749lenCRC',
        'split',
        '721021onArqm'
    ];
    a0_0x5511 = function () {
        return _0x5a66cb;
    };
    return a0_0x5511();
}