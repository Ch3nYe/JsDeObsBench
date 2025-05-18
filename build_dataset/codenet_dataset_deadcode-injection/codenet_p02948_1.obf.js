'use strict';
const a0_0x5ade28 = a0_0x31b1;
function a0_0x591a() {
    const _0x22f7cb = [
        'split',
        'map',
        'sort',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x591a = function () {
        return _0x22f7cb;
    };
    return a0_0x591a();
}
function a0_0x31b1(yNCSoy, key) {
    const stringArray = a0_0x591a();
    a0_0x31b1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x31b1(yNCSoy, key);
}
function Main(input) {
    const _0x5115a9 = a0_0x31b1;
    const N = Number(input['split']('\x0a')[0x0][_0x5115a9(0x0)]('\x20')[0x0]);
    const M = Number(input['split']('\x0a')[0x0][_0x5115a9(0x0)]('\x20')[0x1]);
    const list = input[_0x5115a9(0x0)]('\x0a')['slice'](0x1)[_0x5115a9(0x1)](x => x[_0x5115a9(0x0)]('\x20')[_0x5115a9(0x1)](x => Number(x)))['filter'](x => x[0x0] <= M)[_0x5115a9(0x2)]((a, b) => {
        if (a[0x1] === b[0x1]) {
            return b[0x0] - a[0x0];
        } else {
            return b[0x1] - a[0x1];
        }
    });
    let ans = 0x0;
    let now = 0x0;
    if (list[_0x5115a9(0x3)] === 0x0) {
        console[_0x5115a9(0x4)](0x0);
        return;
    }
    for (let i = 0x0; i < N; i++) {
        if (now === M) {
            break;
        }
        if (list[i][0x0] > M - now) {
            continue;
        }
        ans += list[i][0x1];
        now++;
    }
    console[_0x5115a9(0x4)](ans);
}
Main(require('fs')[a0_0x5ade28(0x5)](a0_0x5ade28(0x6), a0_0x5ade28(0x7))[a0_0x5ade28(0x8)]());