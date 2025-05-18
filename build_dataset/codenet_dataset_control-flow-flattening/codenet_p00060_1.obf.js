var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (v) {
    var EnsKhr = {
        'LlrDO': function (x, y) {
            return x != y;
        },
        'jFQGz': function (x, y) {
            return x != y;
        },
        'Kwfff': function (x, y) {
            return x + y;
        },
        'kRqlF': function (x, y) {
            return x + y;
        },
        'pqfYD': function (x, y) {
            return x >= y;
        },
        'HvrAg': 'YES'
    };
    var arr = v['split']('\x20')['map'](Number);
    var m = [
        0x1,
        0x2,
        0x3,
        0x4,
        0x5,
        0x6,
        0x7,
        0x8,
        0x9,
        0xa
    ];
    m = m['filter'](function (v) {
        return EnsKhr['LlrDO'](v, arr[0x0]) || EnsKhr['jFQGz'](v, arr[0x1]) || EnsKhr['jFQGz'](v, arr[0x2]);
    });
    var y = 0x0;
    var n = 0x0;
    m['forEach'](function (v) {
        EnsKhr['Kwfff'](EnsKhr['kRqlF'](arr[0x0], arr[0x1]), v) <= 0x14 ? y++ : n++;
    });
    console['log'](EnsKhr['pqfYD'](y, n) ? EnsKhr['HvrAg'] : 'NO');
});