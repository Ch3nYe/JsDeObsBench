var d = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
var info = line = '';
var map = [];
while (line = d['shift']()) {
    info = line['split']('\x20');
    map['push']([
        info[0x0],
        +info[0x1]
    ]);
}
map['sort'](function (a, b) {
    var tDUiNA = {
        'CpLIm': function (x, y) {
            return x < y;
        },
        'WuTfi': function (x, y) {
            return x > y;
        },
        'TqREH': function (x, y) {
            return x < y;
        }
    };
    if (tDUiNA['CpLIm'](a[0x0], b[0x0]))
        return -0x1;
    if (tDUiNA['WuTfi'](a[0x0], b[0x0]))
        return 0x1;
    if (tDUiNA['TqREH'](a[0x1], b[0x1]))
        return -0x1;
    if (tDUiNA['WuTfi'](a[0x1], b[0x1]))
        return 0x1;
    return 0x0;
});
var word = '';
var pages = [];
map['forEach'](function (info, i) {
    var LlfRFU = {
        'UIxfL': function (x, y) {
            return x !== y;
        }
    };
    if (word !== info[0x0]) {
        if (LlfRFU['UIxfL'](i, 0x0)) {
            console['log'](pages['join']('\x20'));
            pages = [];
        }
        console['log'](info[0x0]);
    }
    pages['push'](info[0x1]);
    word = info[0x0];
});
console['log'](pages['join']('\x20'));