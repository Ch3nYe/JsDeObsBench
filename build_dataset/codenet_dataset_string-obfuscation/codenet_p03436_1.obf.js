'use strict';
function a0_0x23a1(dLJdny, key) {
    const stringArray = a0_0x4f09();
    a0_0x23a1 = function (index, key) {
        index = index - 0xab;
        let value = stringArray[index];
        return value;
    };
    return a0_0x23a1(dLJdny, key);
}
const a0_0x5358a4 = a0_0x23a1;
(function (stringArrayFunction, comparisonValue) {
    const _0xfd88b0 = a0_0x23a1;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0xfd88b0(0xb0)) / 0x1 * (parseInt(_0xfd88b0(0xbf)) / 0x2) + parseInt(_0xfd88b0(0xae)) / 0x3 * (parseInt(_0xfd88b0(0xbe)) / 0x4) + -parseInt(_0xfd88b0(0xab)) / 0x5 * (-parseInt(_0xfd88b0(0xac)) / 0x6) + parseInt(_0xfd88b0(0xb7)) / 0x7 * (-parseInt(_0xfd88b0(0xb6)) / 0x8) + -parseInt(_0xfd88b0(0xb8)) / 0x9 * (-parseInt(_0xfd88b0(0xb5)) / 0xa) + parseInt(_0xfd88b0(0xb1)) / 0xb * (-parseInt(_0xfd88b0(0xbc)) / 0xc) + parseInt(_0xfd88b0(0xb2)) / 0xd * (parseInt(_0xfd88b0(0xc0)) / 0xe);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4f09, 0xc7d50));
function a0_0x4f09() {
    const _0x1f0b76 = [
        'trim',
        '95ZPKbJi',
        '4741mMGnlI',
        '1651pJBFnW',
        'push',
        'readFileSync',
        '15913910ApzFwS',
        '87528jSvHuk',
        '791bfODpX',
        '9eGCqqd',
        'split',
        'shift',
        'fill',
        '23196YoNzfK',
        '/dev/stdin',
        '8BSrkuq',
        '14794twJnpe',
        '35714KPGucx',
        '125HWjOhg',
        '40434rMdovR',
        'map',
        '152115MNJvJR'
    ];
    a0_0x4f09 = function () {
        return _0x1f0b76;
    };
    return a0_0x4f09();
}
console['log'](function (args) {
    const _0x4600e3 = a0_0x23a1;
    const tmp = args[_0x4600e3(0xaf)]()[_0x4600e3(0xb9)]('\x0a');
    const HW = tmp[0x0][_0x4600e3(0xb9)]('\x20')[_0x4600e3(0xad)](v => v | 0x0);
    const H = HW[0x0], W = HW[0x1];
    const map = [Array(W + 0x2)[_0x4600e3(0xbb)](Infinity)];
    let s = 0x0;
    for (let y = 0x1; y <= H; y++) {
        map[_0x4600e3(0xb3)]([Infinity]);
        for (let x = 0x0; x < W; x++) {
            if (tmp[y][x] === '.') {
                s++;
                map[y]['push'](0x0);
            } else
                map[y][_0x4600e3(0xb3)](Infinity);
        }
        map[y][_0x4600e3(0xb3)](Infinity);
    }
    map[_0x4600e3(0xb3)](Array(W + 0x2)[_0x4600e3(0xbb)](Infinity));
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
        const q = queue[_0x4600e3(0xba)]();
        for (const d of dir) {
            const x = q[0x0] + d[0x0], y = q[0x1] + d[0x1];
            if (x === W && y === H)
                return s - q[0x2];
            if (map[y][x] === 0x0) {
                map[y][x] = q[0x2] + 0x1;
                queue['push']([
                    x,
                    y,
                    q[0x2] + 0x1
                ]);
            }
        }
    } while (queue[0x0]);
}(require('fs')[a0_0x5358a4(0xb4)](a0_0x5358a4(0xbd), 'utf8')));