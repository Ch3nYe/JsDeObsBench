function Puzzle() {
    var _0x41be1e = {};
    var _0xb2ce96 = '123,234,345,456,567,678,789,111,222,333,444,555,666,777,888,999'['split'](',');
    var _0x5c5db2 = '11,22,33,44,55,66,77,88,99'['split'](',');
    var _0x270781, _0x439478, _0x4debf7, _0x39876d, _0x217a57;
    for (_0x270781 = 0x0; _0x270781 < 0x10; _0x270781++)
        for (_0x439478 = 0x0; _0x439478 < 0x10; _0x439478++)
            for (_0x4debf7 = 0x0; _0x4debf7 < 0x10; _0x4debf7++)
                for (_0x39876d = 0x0; _0x39876d < 0x10; _0x39876d++)
                    for (_0x217a57 = 0x0; _0x217a57 < 0x9; _0x217a57++) {
                        var _0x2e2daa = _0xb2ce96[_0x270781] + _0xb2ce96[_0x439478] + _0xb2ce96[_0x4debf7] + _0xb2ce96[_0x39876d] + _0x5c5db2[_0x217a57];
                        _0x2e2daa = _0x2e2daa['split']('')['map'](Number)['sort'](function (_0x2e2017, _0x92899e) {
                            return _0x2e2017 - _0x92899e;
                        })['join']('');
                        _0x41be1e[_0x2e2daa] = !![];
                    }
    return _0x41be1e;
}
var P = Puzzle();
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var str = Arr['shift']();
    var ans = [];
    for (var i = 0x1; i <= 0x9; i++) {
        var arr = str['split']('')['map'](Number);
        arr['push'](i);
        arr['sort'](function (_0x401488, _0x46c0b2) {
            return _0x401488 - _0x46c0b2;
        });
        var v = arr['join']('');
        if (/(.)\1\1\1\1/['test'](v))
            continue;
        if (P['hasOwnProperty'](v))
            ans['push'](i);
    }
    console['log'](ans['length'] == 0x0 ? '0' : ans['join']('\x20'));
}