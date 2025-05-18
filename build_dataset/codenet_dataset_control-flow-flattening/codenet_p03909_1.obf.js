'use strict';
const main = arg => {
    const NQwPEd = {
        'HsPso': function (callee, param1) {
            return callee(param1);
        },
        'idTyj': function (callee, param1) {
            return callee(param1);
        },
        'XTsrh': function (x, y) {
            return x + y;
        },
        'omKqG': 'ABCDEFGHIJ',
        'ErvOK': function (x, y) {
            return x < y;
        },
        'haECT': function (x, y) {
            return x === y;
        },
        'GXlTn': 'snuke',
        'QnAek': function (x, y) {
            return x + y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const H = NQwPEd['HsPso'](parseInt, arg[0x0]['split']('\x20')[0x0]);
    const W = NQwPEd['idTyj'](parseInt, arg[0x0]['split']('\x20')[0x1]);
    const words = arg['slice'](0x1, NQwPEd['XTsrh'](H, 0x1))['map'](s => s['split']('\x20'));
    const alpha = NQwPEd['omKqG']['split']('');
    for (let i = 0x0; NQwPEd['ErvOK'](i, H); i++) {
        for (let j = 0x0; j < W; j++) {
            if (NQwPEd['haECT'](words[i][j], NQwPEd['GXlTn'])) {
                console['log'](NQwPEd['XTsrh'](alpha[j], NQwPEd['QnAek'](i, 0x1)));
                return;
            }
        }
    }
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));