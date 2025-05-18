'use strict';
function Main(input) {
    const hfMCZr = {
        'bQCWC': function (x, y) {
            return x === y;
        },
        'ignUv': function (x, y) {
            return x % y;
        },
        'JCPGJ': function (x, y) {
            return x % y;
        },
        'ChqcD': function (x, y) {
            return x % y;
        },
        'uhlgT': function (x, y) {
            return x + y;
        },
        'mxobd': 'Possible',
        'MexeW': 'Impossible'
    };
    input = input['split']('\x0a');
    const arr = input[0x0]['split']('\x20');
    if (hfMCZr['bQCWC'](hfMCZr['ignUv'](arr[0x0], 0x3), 0x0) || hfMCZr['bQCWC'](hfMCZr['JCPGJ'](arr[0x1], 0x3), 0x0) || hfMCZr['ChqcD'](hfMCZr['uhlgT'](arr[0x0], arr[0x1]), 0x3) === 0x0) {
        console['log'](hfMCZr['mxobd']);
    } else {
        console['log'](hfMCZr['MexeW']);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));