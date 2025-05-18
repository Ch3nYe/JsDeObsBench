'use strict';
function a0_0x65eb() {
    const _0x19fe21 = [
        'abs',
        'log',
        'UYIhG',
        'LeHSq',
        'bIJCH',
        'IvfNd',
        'mTeqJ',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x65eb = function () {
        return _0x19fe21;
    };
    return a0_0x65eb();
}
const a0_0x3ecee9 = a0_0x2b8d;
function a0_0x2b8d(HVRbMf, key) {
    const stringArray = a0_0x65eb();
    a0_0x2b8d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2b8d(HVRbMf, key);
}
function main(input) {
    const _0x5a9139 = a0_0x2b8d;
    input = input['split']('\x20')['map'](v => ~~v);
    const n = input[0x0];
    const m = input[0x1];
    const limit = 0x3b9aca00 + 0x7;
    if (Math[_0x5a9139(0x0)](n - m) >= 0x2) {
        console[_0x5a9139(0x1)](0x0);
        return;
    }
    let nn = 0x1;
    for (let i = 0x2; i <= n; i++) {
        nn *= i;
        if (nn >= limit) {
            if (_0x5a9139(0x2) !== _0x5a9139(0x2)) {
                nn = nn % limit;
            } else {
                nn = nn % limit;
            }
        }
    }
    for (let i = 0x2; i <= m; i++) {
        nn *= i;
        if (nn >= limit) {
            if (_0x5a9139(0x3) === _0x5a9139(0x4)) {
                nn *= i;
                if (nn >= limit) {
                    nn = nn % limit;
                }
            } else {
                nn = nn % limit;
            }
        }
    }
    let tmp = nn % limit;
    if (n == m) {
        if (_0x5a9139(0x5) !== _0x5a9139(0x6)) {
            tmp = 0x2 * tmp;
        } else {
            console[_0x5a9139(0x1)](0x0);
            return;
        }
    }
    const ans = tmp % limit;
    console['log'](ans);
}
main(require('fs')['readFileSync'](a0_0x3ecee9(0x7), a0_0x3ecee9(0x8)));