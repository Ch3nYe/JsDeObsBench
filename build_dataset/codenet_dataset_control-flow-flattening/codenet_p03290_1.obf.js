'use strict';
function main(input) {
    const dAZCTz = {
        'uqsRH': function (x, y) {
            return x < y;
        },
        'gHqRC': function (x, y) {
            return x === y;
        },
        'YiVWe': function (x, y) {
            return x & y;
        },
        'cKmKF': function (x, y) {
            return x * y;
        },
        'iRrOn': function (x, y) {
            return x / y;
        },
        'akYfv': function (x, y) {
            return x + y;
        },
        'iQRKo': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'QaFZx': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const DG = input['shift']()['split']('\x20')['map'](v => Number(v));
    input = input['map'](v => v['split']('\x20')['map'](v => Number(v)));
    const calc = (a, r) => {
        let count = [Math['pow'](0xa, 0x8)];
        for (let i = 0x0; dAZCTz['uqsRH'](i, DG[0x0]); i++) {
            const cur = Math['pow'](0x2, i);
            if (dAZCTz['gHqRC'](dAZCTz['YiVWe'](a, cur), cur)) {
                const points = dAZCTz['cKmKF'](i + 0x1, 0x64);
                let max = dAZCTz['cKmKF'](points, input[i][0x0]) + input[i][0x1];
                let num = Math['ceil'](dAZCTz['iRrOn'](r, points));
                if (max < r) {
                    count['push'](dAZCTz['akYfv'](input[i][0x0], dAZCTz['iQRKo'](calc, a - cur, r - max)));
                } else {
                    count['push'](dAZCTz['uqsRH'](num, input[i][0x0]) ? num : input[i][0x0]);
                }
            }
        }
        return Math['min'](...count);
    };
    console['log'](calc(dAZCTz['QaFZx'](Math['pow'](0x2, DG[0x0]), 0x1), DG[0x1]));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));