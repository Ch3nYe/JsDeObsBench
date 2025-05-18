'use strict';
console['log'](function (args) {
    const BsGAFa = {
        'JXoDp': function (callee, param1) {
            return callee(param1);
        },
        'cUtOL': function (x, y) {
            return x <= y;
        },
        'YCepp': function (x, y) {
            return x < y;
        },
        'kcsHa': function (callee, param1) {
            return callee(param1);
        },
        'wvCBv': function (x, y) {
            return x + y;
        },
        'KJdDD': function (x, y) {
            return x === y;
        },
        'fJDft': function (x, y) {
            return x - y;
        }
    };
    const tmp = args['trim']()['split']('\x0a');
    const HW = tmp[0x0]['split']('\x20')['map'](v => v | 0x0);
    const H = HW[0x0], W = HW[0x1];
    const map = [BsGAFa['JXoDp'](Array, W + 0x2)['fill'](Infinity)];
    let s = 0x0;
    for (let y = 0x1; BsGAFa['cUtOL'](y, H); y++) {
        map['push']([Infinity]);
        for (let x = 0x0; BsGAFa['YCepp'](x, W); x++) {
            if (tmp[y][x] === '.') {
                s++;
                map[y]['push'](0x0);
            } else
                map[y]['push'](Infinity);
        }
        map[y]['push'](Infinity);
    }
    map['push'](BsGAFa['kcsHa'](Array, W + 0x2)['fill'](Infinity));
    const dir = [
        [
            -0x1,
            0x0
        ],
        [
            0x0,
            -0x1
        ],
        [
            0x1,
            0x0
        ],
        [
            0x0,
            0x1
        ]
    ];
    const queue = [[
            0x1,
            0x1,
            0x2
        ]];
    do {
        const q = queue['shift']();
        for (const d of dir) {
            const x = BsGAFa['wvCBv'](q[0x0], d[0x0]), y = q[0x1] + d[0x1];
            if (BsGAFa['KJdDD'](x, W) && BsGAFa['KJdDD'](y, H))
                return BsGAFa['fJDft'](s, q[0x2]);
            if (map[y][x] === 0x0) {
                map[y][x] = BsGAFa['wvCBv'](q[0x2], 0x1);
                queue['push']([
                    x,
                    y,
                    BsGAFa['wvCBv'](q[0x2], 0x1)
                ]);
            }
        }
    } while (queue[0x0]);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));