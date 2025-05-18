var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (_0x36375b) {
    var _0x13ca20 = _0x36375b['split']('\x20');
    var _0x3d9555 = parseInt(_0x13ca20[0x0], 0xa);
    var _0x4405d7 = parseInt(_0x13ca20[0x1], 0xa);
    var _0x4b8154 = parseInt(_0x13ca20[0x2], 0xa);
    var _0xf8bac2 = parseInt(_0x13ca20[0x3], 0xa);
    _0x3d9555 = Math['sqrt']((_0x3d9555 - _0x4b8154) * (_0x3d9555 - _0x4b8154) + (_0x4405d7 - _0xf8bac2) * (_0x4405d7 - _0xf8bac2));
    console['log'](_0x3d9555['toFixed'](0x8));
    process['exit']();
});
process['stdin']['on']('end', function () {
});