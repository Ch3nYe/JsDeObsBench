'use strict';
function Main(input) {
    const HGUZyp = {
        'WOcHC': function (x, y) {
            return x < y;
        },
        'ktlRw': function (x, y) {
            return x === y;
        },
        'tAqzP': function (x, y) {
            return x % y;
        },
        'zTxds': 'Yes',
        'JogsT': function (x, y) {
            return x % y;
        },
        'tbKbU': function (callee) {
            return callee();
        },
        'NdKto': function (callee, param1) {
            return callee(param1);
        },
        'OCKEk': function (callee) {
            return callee();
        }
    };
    let N = HGUZyp['NdKto'](Number, input);
    const func = () => {
        if (HGUZyp['WOcHC'](N, 0x4)) {
            console['log']('No');
        } else if (HGUZyp['ktlRw'](HGUZyp['tAqzP'](N, 0x4), 0x0)) {
            console['log'](HGUZyp['zTxds']);
        } else if (HGUZyp['JogsT'](N, 0x7) === 0x0) {
            console['log'](HGUZyp['zTxds']);
        } else {
            N -= 0x4;
            HGUZyp['tbKbU'](func);
        }
    };
    HGUZyp['OCKEk'](func);
}
;
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());