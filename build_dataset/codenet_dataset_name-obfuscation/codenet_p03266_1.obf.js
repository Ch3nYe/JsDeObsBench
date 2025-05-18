var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (_0x4537c5) {
    lines['push'](_0x4537c5);
});
rl['on']('close', function () {
    var _0x5a4ffb = Number(lines[0x0]['split']('\x20')[0x0]);
    var _0x4253bd = Number(lines[0x0]['split']('\x20')[0x1]);
    var _0x5afe54 = 0x0;
    for (var _0x4e7e71 = 0x1; _0x4e7e71 <= _0x4253bd; _0x4e7e71++) {
        if (_0x4e7e71 * 0x2 % _0x4253bd === 0x0) {
            if (0x1 <= Math['floor']((_0x5a4ffb - _0x4e7e71) / _0x4253bd)) {
                _0x5afe54 += Math['pow'](Math['floor']((_0x5a4ffb - _0x4e7e71) / _0x4253bd) + 0x1, 0x3);
            } else {
                _0x5afe54++;
            }
        }
    }
    console['log'](_0x5afe54);
});