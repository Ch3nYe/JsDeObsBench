var a0_0x1d3ad7 = a0_0x21d8;
function main(input) {
    var _0x3e2dd0 = a0_0x21d8;
    const formatted_input = input[_0x3e2dd0(0x0)]('\x0a');
    const N = parseInt(formatted_input[0x0], 0xa);
    const As = formatted_input[0x1][_0x3e2dd0(0x0)]('\x20')[_0x3e2dd0(0x1)](x => parseInt(x));
    dp = [];
    for (var i = 0x0; i < N; i++) {
        var results = [];
        if (i == 0x0) {
            results = [
                As[i],
                As[i] * -0x1
            ];
        } else {
            var not_flipped = Math[_0x3e2dd0(0x2)](dp[i - 0x1][0x0] + As[i], dp[i - 0x1][0x1] - As[i]);
            var flipped = Math[_0x3e2dd0(0x2)](dp[i - 0x1][0x0] - As[i], dp[i - 0x1][0x1] + As[i]);
            results = [
                not_flipped,
                flipped
            ];
        }
        dp[_0x3e2dd0(0x3)](results);
    }
    console[_0x3e2dd0(0x4)](dp[N - 0x1][0x0]);
}
main(require('fs')[a0_0x1d3ad7(0x5)](a0_0x1d3ad7(0x6), a0_0x1d3ad7(0x7)));
function a0_0x21d8(ZcAQXC, key) {
    var stringArray = a0_0x43df();
    a0_0x21d8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x21d8(ZcAQXC, key);
}
function a0_0x43df() {
    var _0x1e1c41 = [
        'split',
        'map',
        'max',
        'push',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x43df = function () {
        return _0x1e1c41;
    };
    return a0_0x43df();
}