var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (_0x50a842) {
    _0x50a842 = _0x50a842['replace'](/@(\d)(.)/g, function (_0x1d98cf, _0x52096c, _0x353985) {
        return Array(_0x52096c - 0x0 + 0x1)['join'](_0x353985);
    });
    console['log'](_0x50a842);
});