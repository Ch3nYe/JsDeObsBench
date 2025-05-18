function a0_0x4f18(pgdxHZ, key) {
    var stringArray = a0_0x29e6();
    a0_0x4f18 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4f18(pgdxHZ, key);
}
var a0_0x74c3e1 = a0_0x4f18;
var lines = [];
var readline = require(a0_0x74c3e1(0x0));
function a0_0x29e6() {
    var _0x456b49 = [
        'readline',
        'stdin',
        'line',
        'push',
        'split',
        'pow',
        'floor',
        'pMPOL',
        'log'
    ];
    a0_0x29e6 = function () {
        return _0x456b49;
    };
    return a0_0x29e6();
}
var rl = readline['createInterface']({
    'input': process[a0_0x74c3e1(0x1)],
    'output': process['stdout']
});
rl['on'](a0_0x74c3e1(0x2), function (x) {
    var _0x5c9a7a = a0_0x4f18;
    lines[_0x5c9a7a(0x3)](x);
});
rl['on']('close', function () {
    var _0x594209 = a0_0x4f18;
    var N = Number(lines[0x0][_0x594209(0x4)]('\x20')[0x0]);
    var K = Number(lines[0x0][_0x594209(0x4)]('\x20')[0x1]);
    var ans = 0x0;
    for (var i = 0x1; i <= K; i++) {
        if (i * 0x2 % K === 0x0) {
            if (0x1 <= Math['floor']((N - i) / K)) {
                ans += Math[_0x594209(0x5)](Math[_0x594209(0x6)]((N - i) / K) + 0x1, 0x3);
            } else {
                if (_0x594209(0x7) === 'yimML') {
                    lines[_0x594209(0x3)](x);
                } else {
                    ans++;
                }
            }
        }
    }
    console[_0x594209(0x8)](ans);
});