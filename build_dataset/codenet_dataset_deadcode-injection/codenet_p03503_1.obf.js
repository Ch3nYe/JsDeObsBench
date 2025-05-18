'use strict';
function a0_0x2d63(Aksznz, key) {
    const stringArray = a0_0x46da();
    a0_0x2d63 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2d63(Aksznz, key);
}
const a0_0x162946 = a0_0x2d63;
function main(input) {
    const _0x5e9ce1 = a0_0x2d63;
    const lines = input[_0x5e9ce1(0x0)]('\x0a');
    const N = parseInt(lines['shift']());
    const F = [];
    for (let i = 0x0; i < N; i++) {
        F[_0x5e9ce1(0x1)](lines[i][_0x5e9ce1(0x0)]('\x20')[_0x5e9ce1(0x2)](x => parseInt(x)));
    }
    const P = [];
    for (let i = 0x0; i < N; i++) {
        P[_0x5e9ce1(0x1)](lines[i + N][_0x5e9ce1(0x0)]('\x20')[_0x5e9ce1(0x2)](x => parseInt(x)));
    }
    let result = -Infinity;
    for (let i = 0x1; i < 0x400; i++) {
        let score = 0x0;
        for (let j = 0x0; j < N; j++) {
            if (_0x5e9ce1(0x3) === _0x5e9ce1(0x4)) {
                let store = F[j];
                let p_index = (parseInt(store['join'](''), 0x2) & i)[_0x5e9ce1(0x5)](0x2)[_0x5e9ce1(0x0)]('')[_0x5e9ce1(0x2)](x => Number(x))[_0x5e9ce1(0x6)]((a, b) => a + b, 0x0);
                score += P[j][p_index];
            } else {
                let store = F[j];
                let p_index = (parseInt(store['join'](''), 0x2) & i)[_0x5e9ce1(0x5)](0x2)[_0x5e9ce1(0x0)]('')[_0x5e9ce1(0x2)](x => Number(x))['reduce']((a, b) => a + b, 0x0);
                score += P[j][p_index];
            }
        }
        if (score > result) {
            if (_0x5e9ce1(0x7) !== _0x5e9ce1(0x8)) {
                result = score;
            } else {
                F[_0x5e9ce1(0x1)](lines[i][_0x5e9ce1(0x0)]('\x20')[_0x5e9ce1(0x2)](x => parseInt(x)));
            }
        }
    }
    console['log'](result);
}
main(require('fs')[a0_0x162946(0x9)](a0_0x162946(0xa), a0_0x162946(0xb)));
function a0_0x46da() {
    const _0x283050 = [
        'split',
        'push',
        'map',
        'zBZAt',
        'enqTw',
        'toString',
        'reduce',
        'cSoIC',
        'cXSdA',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x46da = function () {
        return _0x283050;
    };
    return a0_0x46da();
}