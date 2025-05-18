var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var lines = input['trim']()['split']('\x0a');
var lm = [];
var line;
while (line = lines['shift']()) {
    lm['push'](line['split'](',')[0x0]);
}
var tm = [];
while (line = lines['shift']()) {
    tm['push'](line['split'](',')[0x0]);
}
lm['sort'](function (a, b) {
    var BNghYi = {
        'nqZgU': function (x, y) {
            return x - y;
        }
    };
    return BNghYi['nqZgU'](a, b);
});
lm['forEach'](function (c) {
    var YiwMTd = {
        'lZuNO': function (x, y) {
            return x == y;
        },
        'aVQyp': function (x, y) {
            return x == y;
        },
        'Sdqrh': function (x, y) {
            return x > y;
        },
        'FhXFm': function (x, y) {
            return x + y;
        }
    };
    var cnt = tm['filter'](function (n) {
        return YiwMTd['lZuNO'](n, c);
    })['length'];
    if (YiwMTd['Sdqrh'](cnt, 0x0)) {
        var tcnt = lm['filter'](function (n) {
            return YiwMTd['aVQyp'](n, c);
        })['length'];
        console['log'](c, YiwMTd['FhXFm'](cnt, tcnt));
    }
});