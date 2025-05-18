'use strict';
var a0_0x1ae8fc = a0_0x4ecd;
function a0_0x4ecd(NHryRA, key) {
    var stringArray = a0_0x3160();
    a0_0x4ecd = function (index, key) {
        index = index - 0x19d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ecd(NHryRA, key);
}
function a0_0x3160() {
    var _0x71722 = [
        '97602OgUXMi',
        '8104580YnMsCu',
        '/dev/stdin',
        '4386604JONXeX',
        '518rCjnbX',
        'shift',
        'readFileSync',
        '162962AVDdyg',
        '29035611TYjaem',
        'log',
        '934134krmmTI',
        'utf8',
        'pow',
        '14byfjHe',
        'not\x20yet',
        '6819520HKDZPz'
    ];
    a0_0x3160 = function () {
        return _0x71722;
    };
    return a0_0x3160();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5b2183 = a0_0x4ecd;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5b2183(0x1aa)) / 0x1 * (parseInt(_0x5b2183(0x1a4)) / 0x2) + -parseInt(_0x5b2183(0x1a7)) / 0x3 + -parseInt(_0x5b2183(0x1a0)) / 0x4 + -parseInt(_0x5b2183(0x19e)) / 0x5 + parseInt(_0x5b2183(0x19d)) / 0x6 * (-parseInt(_0x5b2183(0x1a1)) / 0x7) + parseInt(_0x5b2183(0x1ac)) / 0x8 + parseInt(_0x5b2183(0x1a5)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3160, 0xf0e1a));
function Main(input) {
    var _0x1f1c6a = a0_0x4ecd;
    input = input['trim']()['split'](/\s+/)['map'](x => x - 0x0);
    var N = input[_0x1f1c6a(0x1a2)]();
    var last = [];
    for (let i = 0x0; i < 0x1e8480; i++)
        last[i] = _0x1f1c6a(0x1ab);
    last[input[0x0]] = 0x0;
    var dp = [0x1];
    var M = Math[_0x1f1c6a(0x1a9)](0xa, 0x9) + 0x7;
    for (let i = 0x1; i < N; i++) {
        let c = input[i];
        if (last[c] === _0x1f1c6a(0x1ab) || last[c] === i - 0x1) {
            last[c] = i;
            dp[i] = dp[i - 0x1];
            continue;
        }
        dp[i] = (dp[i - 0x1] + dp[last[c]]) % M;
        last[c] = i;
    }
    console[_0x1f1c6a(0x1a6)](dp['pop']());
}
Main(require('fs')[a0_0x1ae8fc(0x1a3)](a0_0x1ae8fc(0x19f), a0_0x1ae8fc(0x1a8)));