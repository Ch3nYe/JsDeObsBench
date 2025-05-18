'use strict';
function a0_0x6341() {
    const _0x470d40 = [
        'trim',
        'split',
        'push',
        'fill',
        'length',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x6341 = function () {
        return _0x470d40;
    };
    return a0_0x6341();
}
function a0_0x3fb1(aZJZAW, key) {
    const stringArray = a0_0x6341();
    a0_0x3fb1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3fb1(aZJZAW, key);
}
const a0_0x1af3fe = a0_0x3fb1;
const main = arg => {
    const _0x6909a7 = a0_0x3fb1;
    arg = arg[_0x6909a7(0x0)]()[_0x6909a7(0x1)]('\x0a');
    const N = parseInt(arg[0x0]);
    const cnt = [];
    for (let i = 0x0; i < 0xa; i++) {
        cnt[_0x6909a7(0x2)](new Array(0xa)[_0x6909a7(0x3)](0x0));
    }
    for (let i = 0x1; i <= N; i++) {
        const S = String(i);
        const head = parseInt(S[0x0]);
        const tail = parseInt(S[S[_0x6909a7(0x4)] - 0x1]);
        cnt[head][tail]++;
    }
    let answer = 0x0;
    for (let i = 0x0; i < 0xa; i++) {
        for (let j = 0x0; j < 0xa; j++) {
            answer += cnt[i][j] * cnt[j][i];
        }
    }
    console[_0x6909a7(0x5)](answer);
};
main(require('fs')[a0_0x1af3fe(0x6)]('/dev/stdin', a0_0x1af3fe(0x7)));