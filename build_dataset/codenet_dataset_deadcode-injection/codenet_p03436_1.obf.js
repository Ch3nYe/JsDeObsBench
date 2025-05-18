'use strict';
function a0_0x2d85() {
    const _0x3a95f8 = [
        'log',
        'trim',
        'split',
        'map',
        'fill',
        'push',
        'shift',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2d85 = function () {
        return _0x3a95f8;
    };
    return a0_0x2d85();
}
function a0_0x43ab(SgdNHT, key) {
    const stringArray = a0_0x2d85();
    a0_0x43ab = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x43ab(SgdNHT, key);
}
const a0_0x3d8a9e = a0_0x43ab;
console[a0_0x3d8a9e(0x0)](function (args) {
    const _0x3a08c8 = a0_0x43ab;
    const tmp = args[_0x3a08c8(0x1)]()[_0x3a08c8(0x2)]('\x0a');
    const HW = tmp[0x0][_0x3a08c8(0x2)]('\x20')[_0x3a08c8(0x3)](v => v | 0x0);
    const H = HW[0x0], W = HW[0x1];
    const map = [Array(W + 0x2)[_0x3a08c8(0x4)](Infinity)];
    let s = 0x0;
    for (let y = 0x1; y <= H; y++) {
        map[_0x3a08c8(0x5)]([Infinity]);
        for (let x = 0x0; x < W; x++) {
            if (tmp[y][x] === '.') {
                s++;
                map[y][_0x3a08c8(0x5)](0x0);
            } else
                map[y][_0x3a08c8(0x5)](Infinity);
        }
        map[y][_0x3a08c8(0x5)](Infinity);
    }
    map[_0x3a08c8(0x5)](Array(W + 0x2)[_0x3a08c8(0x4)](Infinity));
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
        const q = queue[_0x3a08c8(0x6)]();
        for (const d of dir) {
            const x = q[0x0] + d[0x0], y = q[0x1] + d[0x1];
            if (x === W && y === H)
                return s - q[0x2];
            if (map[y][x] === 0x0) {
                map[y][x] = q[0x2] + 0x1;
                queue[_0x3a08c8(0x5)]([
                    x,
                    y,
                    q[0x2] + 0x1
                ]);
            }
        }
    } while (queue[0x0]);
}(require('fs')['readFileSync'](a0_0x3d8a9e(0x7), a0_0x3d8a9e(0x8))));