'use strict';
function a0_0xd7e1(WYMKwK, key) {
    const stringArray = a0_0x349d();
    a0_0xd7e1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xd7e1(WYMKwK, key);
}
const a0_0xcb5535 = a0_0xd7e1;
const input = require('fs')[a0_0xcb5535(0x0)](a0_0xcb5535(0x1), a0_0xcb5535(0x2))[a0_0xcb5535(0x3)]()[a0_0xcb5535(0x4)]('\x0a');
const NM = input[0x0][a0_0xcb5535(0x4)]('\x20')[a0_0xcb5535(0x5)](Number);
const N = NM[0x0];
const M = NM[0x1];
function a0_0x349d() {
    const _0x43fbf8 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'slice',
        'log',
        'Yes',
        'exit'
    ];
    a0_0x349d = function () {
        return _0x43fbf8;
    };
    return a0_0x349d();
}
const As = input[a0_0xcb5535(0x6)](0x1, N + 0x1);
const Bs = input['slice'](N + 0x1, N + M + 0x1);
for (let ax = 0x0; ax < N - M; ax++) {
    for (let ay = 0x0; ay < N - M; ay++) {
        let flag = !![];
        for (let bx = 0x0; bx < M; bx++) {
            for (let by = 0x0; by < M; by++) {
                if (As[ax + bx][ay + by] !== Bs[bx][by]) {
                    flag = ![];
                    break;
                }
            }
            if (!flag)
                break;
        }
        if (flag) {
            console[a0_0xcb5535(0x7)](a0_0xcb5535(0x8));
            process[a0_0xcb5535(0x9)](0x0);
        }
    }
}
console[a0_0xcb5535(0x7)]('No');