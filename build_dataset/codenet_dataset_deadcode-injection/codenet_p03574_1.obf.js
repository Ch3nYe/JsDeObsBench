'use strict';
function a0_0x30d9(CxtXhC, key) {
    const stringArray = a0_0x1d57();
    a0_0x30d9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x30d9(CxtXhC, key);
}
const a0_0x1fe901 = a0_0x30d9;
function Main(input) {
    const _0x24f170 = a0_0x30d9;
    input = input[_0x24f170(0x0)]()[_0x24f170(0x1)]('\x0a');
    const hw = input['shift']()['split']('\x20')[_0x24f170(0x2)](str => Number(str));
    const H = hw[0x0], W = hw[0x1];
    const data = input[_0x24f170(0x2)](ls => ls[_0x24f170(0x1)](''));
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
            if (data[i][j] === '#')
                continue;
            let count = 0x0;
            for (let k = 0x0; k < 0x8; k++) {
                const y = i + hy[k], x = j + wx[k];
                if (y < 0x0 || H <= y)
                    continue;
                if (x < 0x0 || W <= x)
                    continue;
                if (data[y][x] === '#') {
                    count += 0x1;
                }
            }
            data[i][j] = count;
        }
    }
    const result = data['map'](ls => ls['join'](''))[_0x24f170(0x3)]('\x0a');
    console[_0x24f170(0x4)](result);
}
Main(require('fs')[a0_0x1fe901(0x5)](a0_0x1fe901(0x6), a0_0x1fe901(0x7)));
function a0_0x1d57() {
    const _0xcd6281 = [
        'trim',
        'split',
        'map',
        'join',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1d57 = function () {
        return _0xcd6281;
    };
    return a0_0x1d57();
}