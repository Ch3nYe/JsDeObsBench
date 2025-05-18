var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var ret = lines['filter'](function (line) {
    var ZqraOK = {
        'AZXQq': function (x, y) {
            return x >= y;
        },
        'jfFCi': function (x, y) {
            return x / y;
        },
        'mTDtZ': function (x, y) {
            return x * y;
        }
    };
    var items = line['split'](',');
    var w = +items[0x1];
    var h = +items[0x2];
    return ZqraOK['AZXQq'](ZqraOK['jfFCi'](w, ZqraOK['mTDtZ'](h, h)), 0x19);
});
ret['forEach'](function (line) {
    console['log'](line['split'](',')[0x0]);
});