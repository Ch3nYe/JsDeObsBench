'use strict';
const a0_0x2806ba = a0_0x13e4;
function a0_0x13e4(ueRUmI, key) {
    const stringArray = a0_0x3200();
    a0_0x13e4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x13e4(ueRUmI, key);
}
console[a0_0x2806ba(0x0)](function (args) {
    const _0x36b815 = a0_0x13e4;
    const tmp = args['trim']()[_0x36b815(0x1)]('\x0a')[_0x36b815(0x2)](r => r[_0x36b815(0x1)]('\x20')['map'](v => v | 0x0));
    const N = tmp[0x0][0x0], M = tmp[0x0][0x1];
    const x = [], y = [];
    for (let i = 0x0; i < M; i++) {
        x[_0x36b815(0x3)](tmp[0x1 + i][0x0]);
        y[_0x36b815(0x3)](tmp[0x1 + i][0x1]);
    }
    const dp = Array(M + 0x1)[_0x36b815(0x4)](0x0)['map'](_ => Array(N + 0x1)[_0x36b815(0x4)](0x0));
    for (let i = 0x1; i <= M; i++) {
        for (let j = 0x0; j < M; j++) {
            dp[i][y[j]] = Math['max'](dp[i][y[j]], dp[i - 0x1][x[j]] + 0x1);
        }
    }
    return Math[_0x36b815(0x5)](...dp[M])['toString']();
}(require('fs')[a0_0x2806ba(0x6)](a0_0x2806ba(0x7), 'utf8')));
function a0_0x3200() {
    const _0x34f4dc = [
        'log',
        'split',
        'map',
        'push',
        'fill',
        'max',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3200 = function () {
        return _0x34f4dc;
    };
    return a0_0x3200();
}