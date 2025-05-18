var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var arr = Arr['shift']()['split']('')['reverse']();
    var str = Arr['shift']();
    var x = str['length'];
    arr['forEach'](function (v) {
        var QffXMV = {
            'okNWp': function (x, y) {
                return x == y;
            },
            'aBRcJ': function (x, y) {
                return x - y;
            },
            'ZkILa': function (x, y) {
                return x + y;
            },
            'dtQsz': function (x, y) {
                return x + y;
            },
            'NleMU': function (x, y) {
                return x % y;
            },
            'NDAgb': function (x, y) {
                return x + y;
            },
            'esfJo': function (x, y) {
                return x / y;
            },
            'RZlrP': function (x, y) {
                return x + y;
            },
            'rEOsk': function (x, y) {
                return x / y;
            },
            'HnbXA': function (x, y) {
                return x == y;
            }
        };
        if (v == 'J')
            str = str['slice'](-0x1) + str['slice'](0x0, -0x1);
        else if (v == 'C')
            str = QffXMV['dtQsz'](str['slice'](0x1), str['slice'](0x0, 0x1));
        else if (v == 'E' && QffXMV['okNWp'](QffXMV['NleMU'](x, 0x2), 0x0))
            str = QffXMV['NDAgb'](str['slice'](x / 0x2, x), str['slice'](0x0, QffXMV['esfJo'](x, 0x2)));
        else if (QffXMV['okNWp'](v, 'E') && QffXMV['NleMU'](x, 0x2) == 0x1)
            str = QffXMV['dtQsz'](QffXMV['RZlrP'](str['slice'](QffXMV['NDAgb'](~~QffXMV['rEOsk'](x, 0x2), 0x1), x), str[~~(x / 0x2)]), str['slice'](0x0, ~~(x / 0x2)));
        else if (v == 'A')
            str = str['split']('')['reverse']()['join']('');
        else if (QffXMV['HnbXA'](v, 'P'))
            str = str['replace'](/\d/g, function (s) {
                return QffXMV['okNWp'](s, '0') ? '9' : QffXMV['aBRcJ'](QffXMV['aBRcJ'](s, 0x0), 0x1);
            });
        else if (QffXMV['HnbXA'](v, 'M'))
            str = str['replace'](/\d/g, function (s) {
                return QffXMV['okNWp'](s, '9') ? '0' : QffXMV['ZkILa'](QffXMV['aBRcJ'](s, 0x0), 0x1);
            });
    });
    console['log'](str);
}