function Main(input) {
    var bZJVEe = {
        'qcmdQ': function (callee, param1) {
            return callee(param1);
        },
        'iLKNp': function (x, y) {
            return x / y;
        },
        'fNraf': function (x, y) {
            return x - y;
        },
        'fQYAM': function (x, y) {
            return x >= y;
        },
        'PelOz': function (x, y) {
            return x < y;
        },
        'icHRe': function (x, y) {
            return x != y;
        },
        'kyJOd': function (x, y) {
            return x > y;
        },
        'BkqHt': function (x, y) {
            return x != y;
        },
        'NBTlG': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    tmp = input[0x1]['split']('\x20');
    var c = Math['pow'](bZJVEe['qcmdQ'](parseInt, bZJVEe['iLKNp'](tmp['length'], 0x2)), 0x2);
    var d = 0x0;
    for (j = bZJVEe['fNraf'](tmp['length'], 0x1); bZJVEe['fQYAM'](j, 0x0); j--) {
        for (i = 0x0; bZJVEe['PelOz'](i, tmp['length']); i++) {
            if (tmp[i] == j) {
                d++;
            }
        }
        if (bZJVEe['icHRe'](d, 0x2) && bZJVEe['kyJOd'](j, 0x0)) {
            c = 0x0;
            break;
        }
        if (bZJVEe['BkqHt'](d, 0x1) && j == 0x0) {
            c = 0x0;
            break;
        }
        d = 0x0;
        j--;
    }
    c = c % bZJVEe['NBTlG'](Math['pow'](0xa, 0x9), 0x7);
    console['log']('%s', c);
}
function debug() {
    var VMawTY = {
        'JCoTV': function (callee, param1) {
            return callee(param1);
        }
    };
    var input = document['getElementById']('input')['value'];
    VMawTY['JCoTV'](Main, input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));