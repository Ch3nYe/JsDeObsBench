'use strict';
function arrayOfDivisors(n) {
    const sRLhVw = {
        'MYpPq': function (x, y) {
            return x <= y;
        },
        'LRjgp': function (x, y) {
            return x % y;
        },
        'vlNhz': function (x, y) {
            return x !== y;
        },
        'KwWPZ': function (x, y) {
            return x - y;
        },
        'KnlDf': function (x, y) {
            return x / y;
        },
        'xRvJI': function (x, y) {
            return x - y;
        }
    };
    const divisor = new Array();
    divisor[0x0] = 0x1;
    for (let i = 0x2; sRLhVw['MYpPq'](i, Math['sqrt'](n)); i++) {
        if (sRLhVw['LRjgp'](n, i) === 0x0) {
            divisor['push'](i);
        }
    }
    const p = divisor['length'];
    if (sRLhVw['vlNhz'](Math['sqrt'](n), divisor[sRLhVw['KwWPZ'](p, 0x1)])) {
        divisor['push'](sRLhVw['KnlDf'](n, divisor[sRLhVw['xRvJI'](p, 0x1)]));
    }
    for (let i = sRLhVw['xRvJI'](p, 0x2); sRLhVw['MYpPq'](0x0, i); i--) {
        divisor['push'](sRLhVw['KnlDf'](n, divisor[i]));
    }
    return divisor;
}
(function main(input) {
    const RSjppb = {
        'Hvnft': function (x, y) {
            return x - y;
        },
        'vZQWt': function (x, y) {
            return x === y;
        },
        'TjJsK': function (x, y) {
            return x > y;
        },
        'MUtlt': function (callee, param1) {
            return callee(param1);
        }
    };
    const n = Number(input['trim']());
    const subOnly = RSjppb['Hvnft'](arrayOfDivisors(RSjppb['Hvnft'](n, 0x1))['length'], 0x1);
    let divIncluded = 0x0;
    const divOfN = arrayOfDivisors(n);
    divOfN['shift']();
    for (let d of divOfN) {
        let n1 = n;
        do {
            n1 /= d;
        } while (RSjppb['vZQWt'](n1 % d, 0x0));
        if (n1 === 0x1) {
            divIncluded++;
        } else if (RSjppb['TjJsK'](RSjppb['MUtlt'](arrayOfDivisors, n1 - 0x1)['indexOf'](d), -0x1)) {
            divIncluded++;
        }
    }
    console['log'](subOnly + divIncluded);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));