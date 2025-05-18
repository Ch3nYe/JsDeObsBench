'use strict';
const main = arg => {
    const FXjhOm = {
        'uaVUk': function (callee, param1) {
            return callee(param1);
        },
        'PKeyH': function (x, y) {
            return x < y;
        },
        'AGHdU': function (x, y) {
            return x - y;
        },
        'ciMUn': function (x, y) {
            return x > y;
        },
        'FmBdA': function (x, y) {
            return x - y;
        },
        'gPpiw': function (x, y) {
            return x > y;
        },
        'pwiLA': function (x, y) {
            return x + y;
        },
        'pIVhj': function (x, y) {
            return x - y;
        },
        'ClCTR': function (x, y) {
            return x - y;
        },
        'QuqjV': function (x, y) {
            return x - y;
        },
        'sYtFT': function (x, y) {
            return x < y;
        },
        'FZfAl': function (x, y) {
            return x + y;
        },
        'fNmGF': function (x, y) {
            return x - y;
        }
    };
    const input = arg['trim']()['split']('\x0a');
    let N = FXjhOm['uaVUk'](Number, input[0x0]['split']('\x20')[0x0]);
    let x = FXjhOm['uaVUk'](Number, input[0x0]['split']('\x20')[0x1]);
    let As = input[0x1]['split']('\x20')['map'](n => Number(n));
    let manip = 0x0;
    for (let i = 0x0; FXjhOm['PKeyH'](i, N); i++) {
        let exceed = FXjhOm['AGHdU'](As[i], x);
        if (FXjhOm['ciMUn'](exceed, 0x0)) {
            As[i] = x;
            manip += exceed;
        }
    }
    for (let i = 0x1; i < FXjhOm['FmBdA'](N, 0x1); i++) {
        let left = As[FXjhOm['AGHdU'](i, 0x1)];
        let current = As[i];
        let right = As[i + 0x1];
        if (FXjhOm['gPpiw'](FXjhOm['pwiLA'](left, current), x) && FXjhOm['pwiLA'](current, right) > x) {
            As[i] = FXjhOm['pIVhj'](x, left);
            manip += FXjhOm['ClCTR'](current, FXjhOm['QuqjV'](x, left));
        }
    }
    for (let i = 0x0; FXjhOm['sYtFT'](i, FXjhOm['QuqjV'](N, 0x1)); i++) {
        let current = As[i];
        let right = As[i + 0x1];
        if (FXjhOm['ciMUn'](FXjhOm['FZfAl'](current, right), x)) {
            As[i] = FXjhOm['fNmGF'](x, right);
            manip += current - FXjhOm['pIVhj'](x, right);
        }
    }
    console['log'](manip);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));