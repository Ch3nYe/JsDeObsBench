function main(arg) {
    var lXNKMT = {
        'kjDzD': function (x, y) {
            return x < y;
        },
        'PvHhF': function (x, y) {
            return x > y;
        },
        'mullr': function (x, y) {
            return x * y;
        },
        'GktmN': function (x, y) {
            return x % y;
        }
    };
    var arg2 = arg['split']('\x0a')[0x1]['split'](/\s/g);
    var kazoe = [];
    for (i = 0x0; lXNKMT['kjDzD'](i, arg['split']('\x0a')[0x0]); i++) {
        if (!kazoe[arg2[i]]) {
            kazoe[arg2[i]] = 0x0;
        }
        kazoe[arg2[i]] += 0x1;
    }
    var ans = 0x1;
    for (j = 0x0; j < kazoe['length']; j++) {
        if (lXNKMT['PvHhF'](j, 0x1)) {
            ans = lXNKMT['mullr'](ans, Math['pow'](kazoe[j - 0x1], kazoe[j]));
        }
        if (!kazoe[j]) {
            ans = 0x0;
            break;
        }
    }
    console['log'](lXNKMT['GktmN'](ans, 0x3b800001));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));