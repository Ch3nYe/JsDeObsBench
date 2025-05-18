'use strict';
const main = input => {
    const EoDfeE = {
        'fPwxQ': function (x, y) {
            return x < y;
        },
        'pttoL': function (x, y) {
            return x === y;
        },
        'iGCaC': function (x, y) {
            return x % y;
        },
        'tQilu': function (x, y) {
            return x && y;
        },
        'iccnR': 'Yes'
    };
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const S = args[0x0][0x0];
    const N = S['length'];
    let odd = !![];
    let even = !![];
    for (let i = 0x0; EoDfeE['fPwxQ'](i, N); i++) {
        if (EoDfeE['pttoL'](EoDfeE['iGCaC'](i, 0x2), 0x0)) {
            if (![
                    'R',
                    'U',
                    'D'
                ]['includes'](S[i]))
                odd = ![];
        } else {
            if (![
                    'L',
                    'U',
                    'D'
                ]['includes'](S[i]))
                even = ![];
        }
    }
    if (EoDfeE['tQilu'](odd, even))
        console['log'](EoDfeE['iccnR']);
    else
        console['log']('No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));