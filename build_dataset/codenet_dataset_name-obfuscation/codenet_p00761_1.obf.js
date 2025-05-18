function str1(_0x35c9a4) {
    _0x35c9a4 = _0x35c9a4 + '';
    while (_0x35c9a4['length'] != b)
        _0x35c9a4 = '0' + _0x35c9a4;
    return _0x35c9a4;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var ab = Arr['shift']()['split']('\x20')['map'](Number);
    if (ab[0x0] == 0x0 && ab[0x1] == 0x0)
        break;
    var str = ab[0x0] + '';
    var b = ab[0x1];
    var arr = [];
    str = str1(str);
    arr['push'](str);
    var i = 0x0;
    while (!![]) {
        i++;
        var s = str['split']('');
        s['sort'](function (_0x3977d6, _0x68c26a) {
            return _0x68c26a - _0x3977d6;
        });
        var A = parseInt(s['join'](''), 0xa);
        var B = parseInt(s['reverse']()['join'](''), 0xa);
        var C = A - B;
        var Cstr = str1(C);
        if (arr['indexOf'](Cstr) != -0x1)
            break;
        arr['push'](Cstr);
        str = Cstr;
    }
    console['log'](arr['indexOf'](Cstr) + '\x20' + parseInt(Cstr, 0xa) + '\x20' + (i - arr['indexOf'](Cstr)));
}