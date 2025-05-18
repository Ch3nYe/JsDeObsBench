'use strict';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', line => {
    const oNsBon = {
        'SZJRz': 'keyence',
        'UQQZK': function (x, y) {
            return x != y;
        },
        'DKUaS': 'YES',
        'uyFcN': function (x, y) {
            return x < y;
        },
        'Usjxd': function (x, y) {
            return x + y;
        },
        'klwvq': function (x, y) {
            return x != y;
        }
    };
    let word = line;
    let arr = [
        'k',
        'e',
        'y',
        'e',
        'n',
        'c',
        'e'
    ];
    let keyence = oNsBon['SZJRz'];
    if (oNsBon['UQQZK'](word['indexOf']('keyence'), -0x1)) {
        console['log'](oNsBon['DKUaS']);
        return;
    }
    let str = '';
    let ans = ![];
    for (let i = 0x0; oNsBon['uyFcN'](i, 0x6); i++) {
        str += arr['shift']();
        let tmp = keyence['slice'](oNsBon['Usjxd'](i, 0x1));
        if (oNsBon['UQQZK'](word['indexOf'](str), -0x1) && oNsBon['klwvq'](word['indexOf'](tmp), -0x1)) {
            ans = !![];
            break;
        }
    }
    if (ans)
        console['log'](oNsBon['DKUaS']);
    else
        console['log']('NO');
});