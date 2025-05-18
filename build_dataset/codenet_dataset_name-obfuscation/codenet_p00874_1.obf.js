var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var wd = arr['shift']();
    if (wd == '0\x200')
        break;
    var W = arr['shift']()['split']('\x20')['map'](Number);
    var D = arr['shift']()['split']('\x20')['map'](Number);
    var sum = W['reduce'](function (_0x3260a6, _0x4ee66a) {
        return _0x3260a6 + _0x4ee66a;
    });
    D['forEach'](function (_0x26b630) {
        var _0x3cdb0e = W['indexOf'](_0x26b630);
        if (_0x3cdb0e != -0x1)
            W[_0x3cdb0e] = '';
        else
            sum += _0x26b630;
    });
    console['log'](sum);
}