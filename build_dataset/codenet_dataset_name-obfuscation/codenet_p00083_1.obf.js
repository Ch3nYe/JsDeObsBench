var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var lines = input['split']('\x0a');
var line;
while (line = lines['shift']()) {
    var arr = line['split']('\x20')['map'](function (_0x4f0db3) {
        return +_0x4f0db3;
    });
    var year = arr[0x0];
    var month = arr[0x1];
    var day = arr[0x2];
    var era = '';
    var today = new Date(year, month - 0x1, day);
    if (today < new Date(0x74c, 0x8, 0x8)) {
        era = 'pre-meiji';
    } else if (today < new Date(0x778, 0x6, 0x1e)) {
        era = 'meiji';
        year -= 0x74b;
    } else if (today < new Date(0x786, 0xb, 0x19)) {
        era = 'taisho';
        year -= 0x777;
    } else if (today < new Date(0x7c5, 0x0, 0x8)) {
        era = 'showa';
        year -= 0x785;
    } else {
        era = 'heisei';
        year -= 0x7c4;
    }
    if (era == 'pre-meiji') {
        console['log']('pre-meiji');
        continue;
    }
    console['log'](era, year, month, day);
}