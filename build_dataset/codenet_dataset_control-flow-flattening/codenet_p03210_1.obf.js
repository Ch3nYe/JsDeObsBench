'use strict';
function Main(INPUT) {
    const yEgSJs = {
        'Vhzkc': function (x, y) {
            return x == y;
        },
        'qKMHg': function (x, y) {
            return x == y;
        },
        'WjElx': 'YES'
    };
    const N = INPUT['split']('\x0a')[0x0];
    if (yEgSJs['Vhzkc'](N, 0x7) || yEgSJs['qKMHg'](N, 0x5) || yEgSJs['qKMHg'](N, 0x3)) {
        console['log'](yEgSJs['WjElx']);
    } else {
        console['log']('NO');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));