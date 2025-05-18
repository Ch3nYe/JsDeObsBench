main = function (input) {
    var oTVBUZ = {
        'ZTzBa': '3|1|4|2|0|5',
        'CSOPt': function (x, y) {
            return x + y;
        },
        'QisHj': function (x, y) {
            return x * y;
        },
        'Tmsao': function (x, y) {
            return x - y;
        },
        'ZVRYI': function (callee, param1) {
            return callee(param1);
        },
        'LazUB': function (callee, param1) {
            return callee(param1);
        }
    };
    var gikVUH = oTVBUZ['ZTzBa']['split']('|');
    var NtvdHu = 0x0;
    while (!![]) {
        switch (gikVUH[NtvdHu++]) {
        case '0':
            var ans = oTVBUZ['CSOPt'](oTVBUZ['QisHj'](n - 0x2, oTVBUZ['Tmsao'](b, a)), 0x1);
            continue;
        case '1':
            var n = oTVBUZ['ZVRYI'](parseInt, data[0x0]);
            continue;
        case '2':
            var b = parseInt(data[0x2]);
            continue;
        case '3':
            var data = input['split']('\x20');
            continue;
        case '4':
            var a = oTVBUZ['LazUB'](parseInt, data[0x1]);
            continue;
        case '5':
            console['log'](Math['max'](ans, 0x0));
            continue;
        }
        break;
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));