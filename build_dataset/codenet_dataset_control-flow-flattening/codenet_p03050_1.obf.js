'use strict';
function Main(input) {
    const UoQkeW = {
        'rMcjc': function (callee, param1) {
            return callee(param1);
        },
        'TurAO': function (x, y) {
            return x < y;
        },
        'ZMPVg': function (x, y) {
            return x * y;
        },
        'AOBPT': function (x, y) {
            return x - y;
        },
        'iARPi': function (x, y) {
            return x !== y;
        },
        'fnIax': function (x, y) {
            return x === y;
        },
        'MaoWN': function (x, y) {
            return x % y;
        },
        'oiPIF': function (x, y) {
            return x / y;
        }
    };
    const N = UoQkeW['rMcjc'](parseInt, input);
    let ret = 0x0;
    for (let i = 0x1; UoQkeW['TurAO'](UoQkeW['ZMPVg'](i, i), N); i++) {
        const ic = UoQkeW['AOBPT'](i, 0x1);
        if (UoQkeW['iARPi'](ic, 0x0) && UoQkeW['fnIax'](UoQkeW['MaoWN'](N, ic), Math['trunc'](UoQkeW['oiPIF'](N, ic)))) {
            ret += ic;
        }
        const j = UoQkeW['AOBPT'](Math['trunc'](N / i), 0x1);
        if (UoQkeW['fnIax'](N % j, i)) {
            ret += j;
        }
    }
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));