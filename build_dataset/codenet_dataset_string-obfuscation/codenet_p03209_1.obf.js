var a0_0x20a58f = a0_0x5541;
function a0_0x5bcd() {
    var _0x1a430d = [
        'log',
        '6oLqILH',
        '16505xrWUmY',
        '5TvmQQk',
        '5477124DQcFzH',
        '/dev/stdin',
        '1952570mlozbC',
        '6634705WGQQuJ',
        '153dvaklj',
        'utf8',
        '14HKwEyU',
        'getElementById',
        'readFileSync',
        '17144YMPHhW',
        'split',
        '26625698FtaGmS',
        'value',
        '1711304MJxUSj'
    ];
    a0_0x5bcd = function () {
        return _0x1a430d;
    };
    return a0_0x5bcd();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x32b017 = a0_0x5541;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x32b017(0xef)) / 0x1 * (parseInt(_0x32b017(0xe5)) / 0x2) + -parseInt(_0x32b017(0xee)) / 0x3 * (-parseInt(_0x32b017(0xec)) / 0x4) + -parseInt(_0x32b017(0xf0)) / 0x5 * (-parseInt(_0x32b017(0xf1)) / 0x6) + parseInt(_0x32b017(0xe2)) / 0x7 + -parseInt(_0x32b017(0xe8)) / 0x8 * (-parseInt(_0x32b017(0xe3)) / 0x9) + parseInt(_0x32b017(0xe1)) / 0xa + -parseInt(_0x32b017(0xea)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5bcd, 0x9cfd2));
function a0_0x5541(tHLwIv, key) {
    var stringArray = a0_0x5bcd();
    a0_0x5541 = function (index, key) {
        index = index - 0xe0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5541(tHLwIv, key);
}
function Main(input) {
    var _0x1b7a3a = a0_0x5541;
    input = input[_0x1b7a3a(0xe9)]('\x0a');
    var N = parseInt(input[0x0][_0x1b7a3a(0xe9)]('\x20')[0x0]);
    var X = parseInt(input[0x0][_0x1b7a3a(0xe9)]('\x20')[0x1]);
    bans = new Array(0x32);
    all = new Array(0x32);
    bans[0x0] = 0x1;
    all[0x0] = 0x1;
    var ans = 0x0;
    for (i = 0x1; i <= 0x32; i++) {
        bans[i] = bans[i - 0x1] * 0x2 + 0x1;
        all[i] = all[i - 0x1] * 0x2 + 0x3;
    }
    var full = all[N];
    var bs = bans[N];
    var flag = 0x0;
    if (X % 0x2 == 0x0) {
        X = all[N] - X;
        flag = 0x1;
    }
    while (X > 0x0) {
        if (X > (full - 0x1) / 0x2) {
            X = X - (full - 0x1) / 0x2 - 0x1;
            ans = ans + (bs - 0x1) / 0x2 + 0x1;
            full = (full - 0x1) / 0x2 - 0x1;
            bs = (bs - 0x1) / 0x2;
        } else {
            X = X - 0x1;
            full = (full - 0x1) / 0x2 - 0x1;
            bs = (bs - 0x1) / 0x2;
        }
    }
    if (flag == 0x1) {
        ans = bans[N] - ans;
    }
    console[_0x1b7a3a(0xed)]('%s', ans);
}
function debug() {
    var _0x483d20 = a0_0x5541;
    var input = document[_0x483d20(0xe6)]('input')[_0x483d20(0xeb)];
    Main(input);
}
Main(require('fs')[a0_0x20a58f(0xe7)](a0_0x20a58f(0xe0), a0_0x20a58f(0xe4)));