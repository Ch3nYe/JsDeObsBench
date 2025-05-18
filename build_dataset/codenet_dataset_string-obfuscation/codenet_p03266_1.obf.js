var a0_0x588615 = a0_0x3aa1;
(function (stringArrayFunction, comparisonValue) {
    var _0x5c271d = a0_0x3aa1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5c271d(0x1b7)) / 0x1 + parseInt(_0x5c271d(0x1b1)) / 0x2 * (parseInt(_0x5c271d(0x1b2)) / 0x3) + parseInt(_0x5c271d(0x1b6)) / 0x4 * (parseInt(_0x5c271d(0x1a4)) / 0x5) + parseInt(_0x5c271d(0x1a9)) / 0x6 + -parseInt(_0x5c271d(0x1b5)) / 0x7 * (-parseInt(_0x5c271d(0x1b4)) / 0x8) + -parseInt(_0x5c271d(0x1a6)) / 0x9 + parseInt(_0x5c271d(0x1ab)) / 0xa * (-parseInt(_0x5c271d(0x1b3)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x8e6a, 0x85abe));
var lines = [];
var readline = require(a0_0x588615(0x1ae));
var rl = readline[a0_0x588615(0x1a7)]({
    'input': process[a0_0x588615(0x1af)],
    'output': process[a0_0x588615(0x1b0)]
});
function a0_0x8e6a() {
    var _0xa119c3 = [
        'log',
        '5907402XEcwrl',
        'createInterface',
        'floor',
        '2003994qkdRIG',
        'close',
        '10YULmaX',
        'line',
        'split',
        'readline',
        'stdin',
        'stdout',
        '4894FCJNyb',
        '1209lyOjnv',
        '17813158tISwts',
        '572632qNYflA',
        '49SBhRhU',
        '4IfwDsc',
        '898136mJJNcr',
        '519725DDkiIs'
    ];
    a0_0x8e6a = function () {
        return _0xa119c3;
    };
    return a0_0x8e6a();
}
rl['on'](a0_0x588615(0x1ac), function (x) {
    lines['push'](x);
});
function a0_0x3aa1(VJODjb, key) {
    var stringArray = a0_0x8e6a();
    a0_0x3aa1 = function (index, key) {
        index = index - 0x1a4;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3aa1(VJODjb, key);
}
rl['on'](a0_0x588615(0x1aa), function () {
    var _0x57802b = a0_0x588615;
    var N = Number(lines[0x0][_0x57802b(0x1ad)]('\x20')[0x0]);
    var K = Number(lines[0x0]['split']('\x20')[0x1]);
    var ans = 0x0;
    for (var i = 0x1; i <= K; i++) {
        if (i * 0x2 % K === 0x0) {
            if (0x1 <= Math[_0x57802b(0x1a8)]((N - i) / K)) {
                ans += Math['pow'](Math['floor']((N - i) / K) + 0x1, 0x3);
            } else {
                ans++;
            }
        }
    }
    console[_0x57802b(0x1a5)](ans);
});