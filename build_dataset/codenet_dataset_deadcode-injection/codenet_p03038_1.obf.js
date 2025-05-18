function a0_0x3fac() {
    var _0x1953f6 = [
        'createInterface',
        'stdin',
        'stdout',
        'line',
        'split',
        'map',
        'sort',
        'yetdz',
        'pjEHW',
        'log',
        'push'
    ];
    a0_0x3fac = function () {
        return _0x1953f6;
    };
    return a0_0x3fac();
}
function a0_0x4d3f(nHzRQW, key) {
    var stringArray = a0_0x3fac();
    a0_0x4d3f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4d3f(nHzRQW, key);
}
var a0_0x231f3f = a0_0x4d3f;
var lines = [];
var readline = require('readline');
var rl = readline[a0_0x231f3f(0x0)]({
    'input': process[a0_0x231f3f(0x1)],
    'output': process[a0_0x231f3f(0x2)]
});
rl['on'](a0_0x231f3f(0x3), x => {
    lines['push'](x);
});
var A;
rl['on']('close', () => {
    var _0x2ce06d = a0_0x4d3f;
    var N = Number(lines[0x0][_0x2ce06d(0x4)]('\x20')[0x0]);
    var M = Number(lines[0x0][_0x2ce06d(0x4)]('\x20')[0x1]);
    A = lines[0x1][_0x2ce06d(0x4)]('\x20')[_0x2ce06d(0x5)](i => Number(i));
    lines['shift']();
    lines['shift']();
    var BC = lines[_0x2ce06d(0x5)](i => i[_0x2ce06d(0x4)]('\x20')[_0x2ce06d(0x5)](i => Number(i)));
    A['sort']((a, b) => a - b);
    BC[_0x2ce06d(0x6)]((a, b) => b[0x1] - a[0x1]);
    var k = 0x0;
    var ans = 0x0;
    for (var i = 0x0; i < M; i++) {
        if (_0x2ce06d(0x7) === _0x2ce06d(0x7)) {
            var b = BC[i][0x0];
            var c = BC[i][0x1];
            var cnt = 0x1;
            for (var j = k; j < N; j++) {
                if (b < cnt) {
                    if (_0x2ce06d(0x8) === _0x2ce06d(0x8)) {
                        k = j;
                        break;
                    } else {
                        ans += A[x];
                    }
                }
                if (A[j] < c) {
                    ans += c;
                } else {
                    for (var x = j; x < N; x++) {
                        ans += A[x];
                    }
                    console[_0x2ce06d(0x9)](ans);
                    return 0x0;
                }
                cnt++;
            }
        } else {
            lines[_0x2ce06d(0xa)](x);
        }
    }
    for (var x = j; x < N; x++) {
        ans += A[x];
    }
    console[_0x2ce06d(0x9)](ans);
});