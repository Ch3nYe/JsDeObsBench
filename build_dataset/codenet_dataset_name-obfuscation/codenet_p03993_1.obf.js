var lines = [];
var result = 0x0;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (_0x578e6f) {
    lines['push'](_0x578e6f);
});
rl['on']('close', function () {
    var _0x48a3f2 = Number(lines[0x0]);
    var _0x192d4d = lines[0x1]['split']('\x20')['map'](_0x104b3d => Number(_0x104b3d));
    for (var _0x4c0af6 = 0x0; _0x4c0af6 < _0x48a3f2; _0x4c0af6++) {
        if (_0x4c0af6 < _0x192d4d[_0x4c0af6]) {
            if (_0x192d4d[_0x192d4d[_0x4c0af6] - 0x1] === _0x4c0af6 + 0x1) {
                result++;
            }
        }
    }
    console['log'](result);
});