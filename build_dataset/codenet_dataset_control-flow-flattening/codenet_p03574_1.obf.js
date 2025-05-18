'use strict';
function Main(input) {
    const SSVWzq = {
        'jOUed': function (x, y) {
            return x === y;
        },
        'VTWlr': function (x, y) {
            return x < y;
        },
        'ANXld': function (x, y) {
            return x <= y;
        },
        'dPedA': function (x, y) {
            return x < y;
        },
        'DFqRM': function (x, y) {
            return x <= y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const hw = input['shift']()['split']('\x20')['map'](str => Number(str));
    const H = hw[0x0], W = hw[0x1];
    const data = input['map'](ls => ls['split'](''));
    const hy = [
        -0x1,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1
    ];
    const wx = [
        -0x1,
        0x0,
        0x1,
        -0x1,
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    for (let i = 0x0; i < H; i++) {
        for (let j = 0x0; j < W; j++) {
            if (SSVWzq['jOUed'](data[i][j], '#'))
                continue;
            let count = 0x0;
            for (let k = 0x0; SSVWzq['VTWlr'](k, 0x8); k++) {
                const y = i + hy[k], x = j + wx[k];
                if (y < 0x0 || SSVWzq['ANXld'](H, y))
                    continue;
                if (SSVWzq['dPedA'](x, 0x0) || SSVWzq['DFqRM'](W, x))
                    continue;
                if (SSVWzq['jOUed'](data[y][x], '#')) {
                    count += 0x1;
                }
            }
            data[i][j] = count;
        }
    }
    const result = data['map'](ls => ls['join'](''))['join']('\x0a');
    console['log'](result);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));