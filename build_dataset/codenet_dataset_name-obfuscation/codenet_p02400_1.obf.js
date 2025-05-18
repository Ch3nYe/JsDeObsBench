var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (_0x5e0d32) {
    var _0x335d5e = _0x5e0d32['split']('\x20');
    var _0x5a76de = parseInt(_0x335d5e[0x0], 0xa);
    var _0x48f12e = _0x5a76de * _0x5a76de * Math['PI'];
    var _0x5db537 = _0x5a76de * 0x2 * Math['PI'];
    console['log'](_0x48f12e['toFixed'](0x6) + '\x20' + _0x5db537['toFixed'](0x6));
    process['exit']();
});
process['stdin']['on']('end', function () {
});