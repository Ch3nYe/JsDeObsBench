var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['shift']();
var obj = {};
Arr['forEach'](function (_0x58cc6f) {
    var _0x4d2f27 = _0x58cc6f['split']('\x20');
    if (_0x4d2f27[0x0] == 'insert')
        obj[_0x4d2f27[0x1]] = !![];
    if (_0x4d2f27[0x0] == 'find')
        console['log'](obj['hasOwnProperty'](_0x4d2f27[0x1]) ? 'yes' : 'no');
});